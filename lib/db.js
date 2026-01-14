
import mysql from 'mysql2/promise';

// --- 1. Configuration ---
// Always load credentials from environment variables for security.
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3307,
  
  // Connection Pool Settings
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
};

// --- 2. Singleton Implementation ---
// Use a variable to hold the pool instance.
let pool;


if (process.env.NODE_ENV === 'production') {
  // Production: Create the pool directly.
  pool = mysql.createPool(dbConfig);
} else {
  // Development (HMR): Check global scope to prevent multiple pools
  // from being created due to Next.js Hot Module Reloading.
  if (!global.mysqlPool) {
    global.mysqlPool = mysql.createPool(dbConfig);
    //console.log("Database pool created successfully in development mode.");
  }
  pool = global.mysqlPool;
}

// --- 3. Query Execution Function ---

/**
 * Executes a parameterized SQL query against the connection pool.
 * @param {string} sql - The SQL query string (e.g., 'SELECT * FROM users WHERE id = ?').
 * @param {Array<any>} values - The array of values to safely inject into the query.
 * @returns {Promise<Array<any>>} The query results.
 */
export async function query(sql, values = []) {
  try {
    // pool.execute automatically uses prepared statements (secure!).
    const [results] = await pool.execute(sql, values);
    return results;
  } catch (error) {
    // Enriched error reporting for better debugging
    const dbError = new Error('Database query failed.');
    dbError.code = error.code || 'DB_ERROR'; // e.g., 'ER_DUP_ENTRY'
    dbError.sqlMessage = error.sqlMessage || error.message; 
    
    console.error(`[DB Error ${dbError.code}]:`, dbError.sqlMessage);
    throw dbError; 
  }
}

export async function executeProcedure(procedureName, inputValues = []) {
    try {
        // Construct the CALL statement: CALL proc_name(?, ?, ...)
        const placeholders = inputValues.map(() => '?').join(', ');
        const callStatement = `CALL ${procedureName}(${placeholders})`;

        // pool.execute handles stored procedures that return result sets
        const [results] = await pool.execute(callStatement, inputValues);
        
        // Stored procedures often return multiple result sets, so we return the whole array.
        // The first element ([0]) is usually the data you want.
        return results; 
    } catch (error) {
        const dbError = new Error(`Procedure call failed: ${procedureName}`);
        dbError.code = error.code || 'DB_ERROR';
        dbError.sqlMessage = error.sqlMessage || error.message; 
        
        console.error(`[DB Procedure Error ${dbError.code}]:`, dbError.sqlMessage);
        throw dbError;
    }
}

// --- 4. Graceful Shutdown Hook (For Production/PM2) ---
// Ensures the pool closes cleanly when the server process terminates.
process.on('SIGINT', async () => {
    if (pool) {
        console.log('Received SIGINT. Closing database pool connections...');
        try {
            await pool.end();
           // console.log('Database pool successfully closed.');
            process.exit(0); 
        } catch (err) {
           // console.error('Error closing database pool:', err.message);
            process.exit(1); 
        }
    } else {
        process.exit(0);
    }
});

export default pool;