const Tableloader = ({ rows, columns}) => {

    const cols = [...Array(columns)];
    const row = [...Array(rows-1)];

    return (
        <div className="shimmer">
            <table>
                <thead>
                     <tr>
                        {
                            cols.map((_,e)=> 
                                <th key={e}><span className="shimbg"></span></th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        row.map((_,e)=> 
                            <tr key={e}>
                            {
                                cols.map((_,e)=> 
                                    <td key={e}><span className="shimbg"></span></td>
                                )
                            }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tableloader