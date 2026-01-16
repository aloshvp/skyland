"use client";
import { useState } from "react";
import { alert } from "@functions/alertmessage";
import { phonenovalidate, checknumberonly, emailvalidate } from "@functions/validation";
import { ValidateFileUpload } from "app/admin/components/ValidateFileUpload";

const initialFormState = {
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    location: '',
    experience: '',
    coverletter: '',
    file_upload: ''
};
const Careers = () => {

    const [fileName, setFileName] = useState("No file selected");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(initialFormState);

    const handleFileChange = (e) => {
        const result = ValidateFileUpload(e, ['pdf', 'docx', 'doc']);
        if (!result.isValid) {
            alert(result.message);
        }
        const file = e.target.files[0];

        if (file) {
            setFileName(file.name);
            setFormData(prevData => ({
                ...prevData,
                file_upload: file,
            }));
        } else {
            setFileName('Choose a file...');
            setFormData(prevData => ({
                ...prevData,
                file_upload: null,
            }));
        }
    };


    const validateForm = () => {

        // --- Helper function to get the display name ---
        const getFieldName = (key) => {
            switch (key) {
                case 'firstname': return 'First Name';
                case 'lastname': return 'Last Name';
                case 'mobile': return 'Phone';
                case 'email': return 'Email';
                case 'location': return 'Location';
                case 'experience': return 'Experience';
                case 'coverletter': return 'Cover Lettter';
                case 'file_upload': return 'Upload Pdf';
                default: return key;
            }
        };

        const validationOrder = [
            'firstname',
            'lastname',
            'mobile',
            'email',
            'location',
            'experience',
            'coverletter',
            'file_upload'
        ];


        for (const key of validationOrder) {

            const fieldName = getFieldName(key);
            let isMissing = false;

            if (key === 'file_upload') {
                if (!formData.file_upload) {
                    isMissing = true;
                    alert(`Please upload resume.`);
                }
            } else {
                if (!formData[key] || (typeof formData[key] === 'string' && formData[key].trim() === '')) {
                    isMissing = true;
                    alert(`Please enter the required field : '${fieldName}'.`);
                }
            }

            if (isMissing) {
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }


        setIsSubmitting(true);

        const postFormData = new FormData(event.target);
        try {

            postFormData.append('switchOption', 'ManageApplications');
            postFormData.append('option', 'insert');
            const response = await fetch('/api/careers', {
                method: 'POST',
                body: postFormData,
            });

            const result = await response.json();
            if (result && result.resData === 'success') {
                setFormData(initialFormState);
                setFileName("No file selected");
                alert('We will get back to you soon.', 'success');
            } else {
                alert('Something went wrong!.', 'warning');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>

            {/* Sub Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <img
                            src="/images/banner-careers.avif"
                            alt="Careers"
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption">
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Careers
                                    </div>
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Build Your Future and Bring Your Vision to Life
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pattern */}
            {/* <div className="pattern-bg-top">
                <img
                    src="/images/pattern-bg-top.png"
                    alt="services"
                />
            </div> */}

            {/* Careers Section */}
            <section className="CareersSec">
                <div className="containerWrapper">
                    <h1 data-aos="fade-up" data-aos-duration="1200">
                        Careers
                    </h1>

                    <div
                        className="description"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        At Idea Cube Building Contracting LLC, we offer exciting career
                        opportunities in a dynamic environment. Join a team that values
                        innovation, skill, and integrity.
                    </div>

                    {/* Form */}
                    <div
                        className="contact-form"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            First Name<span className="required">*</span>
                                        </div>
                                        <input type="text" className="form-control" 
                                        id="firstname" name="firstname"
                                        maxLength={50} autoComplete="off"
                                        onChange={handleInputChange}
                                        value={formData?.firstname ?? ''}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            Last Name<span className="required">*</span>
                                        </div>
                                        <input type="text" className="form-control" 
                                         id="lastname" name="lastname"
                                         maxLength={50} autoComplete="off"
                                        onChange={handleInputChange}
                                        value={formData?.lastname ?? ''}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            Phone<span className="required">*</span>
                                        </div>
                                        <input type="text" className="form-control"
                                         id="mobile" name="mobile"
                                        onKeyDown={checknumberonly} onBlur={phonenovalidate}
                                        onChange={handleInputChange}
                                        value={formData?.mobile ?? ''}
                                        maxLength={10} autoComplete="off" 
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            Email<span className="required">*</span>
                                        </div>
                                        <input type="email" className="form-control" 
                                         id="email" name="email"
                                        onBlur={emailvalidate}
                                        onChange={handleInputChange}
                                        value={formData?.email ?? ''}
                                        maxLength={250} autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">Location</div>
                                        <input type="text" className="form-control" 
                                         id="location" name="location"
                                        onChange={handleInputChange}
                                        value={formData?.location ?? ''}
                                        maxLength={50} autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">Your Experience</div>
                                        <input type="text" className="form-control"
                                        id="experience" name="experience"
                                        onChange={handleInputChange}
                                        value={formData?.experience ?? ''}
                                        maxLength={600} autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="FormItem">
                                        <div className="txt-label">Cover Letter</div>
                                        <textarea
                                            className="form-control"
                                            id="coverletter"
                                            name="coverletter"
                                            rows="1"
                                            onChange={handleInputChange}
                                            value={formData?.coverletter ?? ''}
                                            maxLength={600} autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="FormItem">
                                        <div className="txt-label">Upload Your Resume</div>
                                        <input
                                            className="form-control"
                                            type="file"
                                           // id="formFile"
                                            id="file_upload" name="file_upload"
                                            onChange={handleFileChange}
                                            accept=".pdf, .doc, .docx"
                                        />
                                    </div>
                                </div>

                                {/* <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="CaptchaBox">
                                            <div className="CaptchaText">
                                                <span>4aB3De</span>
                                            </div>

                                            <div className="CaptchaInput">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Captcha"
                                                />
                                            </div>

                                            <a className="CaptchaReload" href="#">
                                                <span className="icon-arrow-rotate-right iconstyle" />
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <input type='text' className="hiddeninput"  name="hiddenfield"  tabIndex="-1" aria-hidden="true"/>
                            <button
                                type="submit"
                                id="contact"
                                className="btn btn-submit"
                                //disabled={isSubmitting}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Careers;