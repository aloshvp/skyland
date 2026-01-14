'use server';
import { EncryptJWT,jwtDecrypt } from 'jose';
import { cookies } from 'next/headers';
import {  unstable_rethrow } from 'next/navigation'

const secretKey = Buffer.alloc(32, process.env.SECRET_KEY);
const key = new TextEncoder().encode(secretKey);


export async function encrypt(payload) {
  try{
    return await new EncryptJWT(payload)
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" }) // Direct encryption (AES-GCM)
      .setIssuedAt()
      .setExpirationTime("30m") // Expire in 30 minutes
      .encrypt(key);
  }catch(er){

  }
}


export async function decrypt(input) {
  try {
    const { payload } = await jwtDecrypt(input, key);
    return payload;
  } catch (error) {
    return null; 
  }
}


export async function Adminlogin(formData) {

    try{
        if (!formData.hashed_password||!formData.srno) {
            console.log('values required');
        }

        const user = { Username: formData.hashed_password ,srno:formData.srno };
        const expires = new Date(Date.now() + 1800 * 1000);
        const session = await encrypt({ user, expires });

        if (!session) {
            console.log('Failed to create session');
        }

        await (await cookies()).set('session', session, {
            expires,
            path: '/',
            //httpOnly: true,
            //secure: process.env.NODE_ENV === 'production',
            //sameSite: 'strict',
        });
    }catch(ex){

    }

}

export async function logout() {
  try{
    await (await cookies()).set('session', '', {
        expires: new Date(0), // Expires immediately
        path: '/',
        //httpOnly: true,
        //secure: process.env.NODE_ENV === 'production',
        //sameSite: 'strict',
    });
  }catch(ex){

  }
}


export async function getSession() {
    try {
        const cookiesObj = await cookies();
        
        const session = cookiesObj.get('session')?.value;
        if (!session) return null;

        const payload = await decrypt(session);
        return payload;
    } catch (error) {

        unstable_rethrow(error)
        console.error('Session retrieval failed:', error);
        return null;
    }
}


export async function updateSession(){
    try{
        const cookiesObj = await cookies();
        const session = cookiesObj.get('session')?.value;
        
        if (!session) return false; 

        const payload = await decrypt(session);
        
        
        if (!payload) { 
            await logout(); 
            return false;
        }
        


        const FIVE_MINUTES = 5 * 60 * 1000; 
        

        if ((new Date(payload.expires).getTime() - Date.now()) < FIVE_MINUTES) {

        }
        
        return payload;
    }
    catch(ex){
       
        await logout(); 
        console.error('Update session error:', ex);
        return false; 
    }
}

