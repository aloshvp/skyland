import 'server-only';
import { NextResponse } from 'next/server';
import { executeProcedure } from '@lib/db';
import { serverEmailvalidate,serverPhoneValidate } from '@functions/validation';
import { writeFile, unlink } from 'fs/promises'; 
import path from 'path';
import fs from 'fs'; 

const UPLOAD_BASE_DIR = path.join(process.cwd(), 'public', 'files');

const SaveFiles = async (FilePath, FileBuffer) => {
    try {
        await writeFile(FilePath, FileBuffer);
        return true;
    } catch (error) {
        console.error('File Save Error:', error);
        return false;
    }
};

export async function POST(req) {

    try {
        const formData = await req.formData();
        const switchOption = formData?.get('switchOption');

        if (!switchOption) {
            return NextResponse.json({ resData: 'switchOption parameter is missing' }, { status: 400 });
        }

        const hidden = formData.get('hiddenfield');
        if (hidden !== null && hidden.trim() !== '') {
            return NextResponse.json({ error: 'Bot detected' }, { status: 403 });
        }

        switch (switchOption) {
            
            case "ManageApplications": {


                const UPLOAD_DIR = path.join(UPLOAD_BASE_DIR, 'careers'); 
                const option = formData?.get('option');
                const srno = formData?.get('srno') ? parseInt(formData?.get('srno')) : 0;
                const enq_firstname = formData?.get('firstname') ?? null;
                const enq_lastname = formData?.get('lastname') ?? null;
                const enq_mobile = formData?.get('mobile') ?? null;
                const enq_email = formData?.get('email') ?? null;
                const enq_location = formData?.get('location') ?? null;
                const enq_expertise = formData?.get('expertise') ?? null;
                const enq_coverletter = formData?.get('coverletter') ?? null;
                const enq_file = formData?.get('file_upload') ?? null;
                let fileName='';
            
                
                if (option === 'insert'&& !serverEmailvalidate(enq_email)&&!serverPhoneValidate(enq_mobile)) {
                    return NextResponse.json({ resData: 'Please enter valid details' }, { status: 400 });
                }
                if (option === 'delete' && !srno) {
                    return NextResponse.json({ resData: 'srno is required for this operation.' }, { status: 400 });
                }
                
                try {

                    if(option==="insert"){
                         if (enq_file && enq_file.size > 0) {
                                                    
                            const fileExt = enq_file.name.split('.').pop().toLowerCase();
                            if (['pdf','doc', 'docx'].includes(fileExt)) {

                                if (!fs.existsSync(UPLOAD_DIR)) {
                                    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
                                }
                                
                                fileName = enq_file.name.trim();
                                

                                if (fs.existsSync(path.join(UPLOAD_DIR, fileName))) {
                                    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
                                    fileName = `${nameWithoutExt}_${Date.now()}.${fileExt}`;
                                }
                                

                                fileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
                                const filePath = path.join(UPLOAD_DIR, fileName);
                                

                                const FileBytes = await enq_file.arrayBuffer();
                                const FileBuffer = Buffer.from(FileBytes);
                                await SaveFiles(filePath, FileBuffer);

                                
                                
                            } else {
                                console.log('Invalid file type. Only standard file formats are allowed.');
                            }
                        } else if (option === 'insert' && !fileName) {
                            return NextResponse.json({ resData: 'file is required for a new event.' }, { status: 400 });
                        }
                    }

                    const ResultData = await executeProcedure('ManageApplications', 
                        [option,
                        srno,
                        enq_firstname,
                        enq_lastname,
                        enq_mobile,
                        enq_email,
                        enq_location,
                        enq_expertise,
                        enq_coverletter,
                        fileName]);

                    if (['insert','delete'].includes(option)) {
                        return NextResponse.json({ resData: 'success' }, { status: 200 });
                    } else {
                        return NextResponse.json({ resData: ResultData }, { status: 200 });
                    }
                    
                } catch (error) {
                    console.error('Failed to process Careers details:', error);
                    return NextResponse.json({
                        resData: 'Database ',
                        error: error.message
                    }, { status: 500 });
                }
            } 
            
            default: {
                return NextResponse.json({ resData: `Unknown option: ${switchOption}` }, { status: 400 });
            }
        } 
        
    } catch (error) {
        console.error('Careers API Error:', error);
        return NextResponse.json({ resData: 'something went wrong', error: error.message }, { status: 500 });
    }
}