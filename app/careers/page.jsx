const Careers = () => {
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
            <div className="pattern-bg-top">
                <img
                    src="/images/pattern-bg-top.png"
                    alt="services"
                />
            </div>

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
                        <form method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            First Name<span className="required">*</span>
                                        </div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            Last Name<span className="required">*</span>
                                        </div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            Phone<span className="required">*</span>
                                        </div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">
                                            Email<span className="required">*</span>
                                        </div>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">Location</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="FormItem">
                                        <div className="txt-label">Your Experience</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="FormItem">
                                        <div className="txt-label">Cover Letter</div>
                                        <textarea
                                            className="form-control"
                                            id="coverletter"
                                            rows="1"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="FormItem">
                                        <div className="txt-label">Upload Your Resume</div>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="formFile"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
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
                                </div>
                            </div>

                            <button
                                type="button"
                                id="contact"
                                className="btn btn-submit"
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