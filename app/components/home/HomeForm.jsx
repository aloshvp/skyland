"use client"
import React from 'react';
import Image from 'next/image';
import { alert } from "@functions/alertmessage";
import { phonenovalidate, checknumberonly, emailvalidate } from "@functions/validation";
import { useState } from "react";
const initialFormState = {
    name: '',
    email:'',
    mobile: ''
    
};
const HomeForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
          const [formData, setFormData] = useState(initialFormState);
    
        
          const validateForm = () => {
        
            const getFieldName = (key) => {
                switch(key) {
                    case 'name': return 'Name';
                    case 'email': return 'Email Address'; 
                    case 'mobile': return 'Mobile Number'; 
                    default: return key;
                }
            };
            
            const validationOrder = [
                'name', 
                'email',
                'mobile'
            ];
            
    
            for (const key of validationOrder) {
                
                const fieldName = getFieldName(key);
                let isMissing = false;
    
          
                  if (!formData[key] || (typeof formData[key] === 'string' && formData[key].trim() === '')) {
                      isMissing = true;
                      alert(`Please enter the required field : ${fieldName}.`);
                  }
                
    
                if (isMissing) {
                    return false;
                }
            }
    
            return true;
          };
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            
            if (!validateForm()) {
                return; 
            }
    
            setIsSubmitting(true);
            
            const postFormData = new FormData(event.target);
    
             try {
                    postFormData.append('switchOption', 'ManageContactUs');
                    postFormData.append('option', 'insert');
                    postFormData.append('type', 'enquiry');
                    postFormData.append('pagename', 'home');
                    
        
                    const response = await fetch('/api/contacts', {
                        method: 'POST',
                        body: postFormData, 
                    });
        
                    if (!response.ok) {
                        console.log(`HTTP error! status: ${response.status}`);
                    }
    
                    const result = await response.json(); 
                    if (result && result.resData === 'success') {
                          setFormData(initialFormState);
                          alert('We will get back to you soon.', 'success');
                    }else{
                      alert('Something went wrong!.', 'warning');
                    }
    
                } catch (error) {
                    console.error('Error submitting form:', error);
                } finally {
                    setIsSubmitting(false);
                }
    
        }
    return (
        <section className='homeFormWrap'>
            <Image src="/images/home/excavator-action.png" alt="Contact Background" fill className="homeFormBg" />
            <div className="homeFormOverlay"></div>
            <div className="container">
                <div className="homeFormContent">
                    <div className="homeFormHead">
                        <h2>Are you planning a new project?</h2>
                        <p>Partner with Skyland, where experience meets excellence. From design to delivery, we ensure quality, transparency, and timely completion every step of the way. Let’s build your vision together.</p>
                    </div>
                    <div className="homeFormSec">
                        <form method="post" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" 
                             name="name" id="name" autoComplete="off" maxLength={50} 
                                                        onChange={handleInputChange}
                                                        value={formData.name ?? ''}
                            />
                            <input type="email" placeholder="Email"   name="email" onBlur={emailvalidate} 
                                                        onChange={handleInputChange}
                                                        value={formData.email ?? ''}
                                                        id="email" autoComplete="off" maxLength={300} />
                            <input type="tel" placeholder="Phone Number" 
                             name="mobile" id="mobile" 
                                                    onKeyDown={checknumberonly} onBlur={phonenovalidate} 
                                                    onChange={handleInputChange}
                                                    value={formData.mobile ?? ''}
                                                    autoComplete="off" maxLength={10}/>
                            <input type='text' className="hiddeninput"  name="hiddenfield"  tabIndex="-1" aria-hidden="true"/>
                            <button disabled={isSubmitting} >Submit</button> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeForm;