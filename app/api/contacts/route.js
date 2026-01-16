import 'server-only';
import { NextResponse } from 'next/server';
import { executeProcedure } from '@lib/db';
import { serverEmailvalidate,serverPhoneValidate } from '@functions/validation';


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
            case "ManageContactUs": {

                const option = formData?.get('option');
                const srno = formData?.get('srno') ? parseInt(formData?.get('srno')) : 0;
                const enq_name = formData?.get('name') ?? null;
                const enq_mobile = formData?.get('mobile') ?? null;
                const enq_email = formData?.get('email') ?? null;
                const enq_subject = formData?.get('subject') ?? null;
                const enq_message = formData?.get('enquiry') ?? null;
                const enq_type = formData?.get('type') ?? null;
                const enq_pagename = formData?.get('pagename') ?? null;
                
                if (option === 'insert'&& !serverEmailvalidate(enq_email)&&!serverPhoneValidate(enq_mobile)) {
                    return NextResponse.json({ resData: 'Please enter valid details' }, { status: 400 });
                }
                if (option === 'delete' && !srno) {
                    return NextResponse.json({ resData: 'SrNo is required for this operation.' }, { status: 400 });
                }
                
                try {
                    const ResultData = await executeProcedure('ManageContactUs', 
                        [option,
                        srno,
                        enq_name,
                        enq_mobile,
                        enq_email,
                        enq_subject,
                        enq_message,
                        enq_type,
                        enq_pagename]);

                    if (['insert','delete'].includes(option)) {
                        return NextResponse.json({ resData: 'success' }, { status: 200 });
                    } else {
                        return NextResponse.json({ resData: ResultData }, { status: 200 });
                    }
                    
                } catch (error) {
                    console.error('Failed to process enquiry details:', error);
                    return NextResponse.json({
                        resData: 'Database ',
                        error: error.message
                    }, { status: 500 });
                }

                
            } 
            
            default: {
                return NextResponse.json({ resData: `Unknown switchOption: ${switchOption}` }, { status: 400 });
            }
        } 
        
        
    } catch (error) {
        console.error('ContactUs API Error:', error);
        return NextResponse.json({ resData: 'something went wrong', error: error.message }, { status: 500 });
    }
}