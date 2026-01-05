const Contact = () => {
    return (
        <>

            {/* Sub Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <img
                            src="/images/banner-contact.avif"
                            alt="Contact Us"
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption">
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Contact Us
                                    </div>
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Get in touch with us for any inquiries, feedback, or support
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

            {/* Contact Section */}
            <section className="contact-sec">
                <div className="containerWrapper">
                    <div className="row">
                        {/* Left Content */}
                        <div className="col-lg-6">
                            <h1 data-aos="fade-up" data-aos-duration="1200">
                                Contact Us
                            </h1>

                            <div
                                className="desc"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                Turn your vision into reality with Idea Cube Building Contracting
                                LLC. From expert consultation to custom construction and flawless
                                execution, we deliver excellence at every stage. Whether
                                residential, commercial, or industrial, our team is ready to
                                bring your plans to life.
                            </div>

                            <div className="contactBoxItem">
                                <div
                                    className="contactBox"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="icon">
                                        <span className="icon-location iconstyle" />
                                    </div>
                                    <div className="txtbox">
                                        <div className="title">Address</div>
                                        <div className="txt">
                                            Idea Cube Building Contracting LLC
                                            <br />
                                            Dubai, United Arab Emirates
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="contactBox"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="icon">
                                        <span className="icon-phone iconstyle" />
                                    </div>
                                    <div className="txtbox">
                                        <div className="title">Phone</div>
                                        <div className="txt">
                                            <a href="tel:00971527288944">+971 52 728 8944</a>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="contactBox"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="icon">
                                        <span className="icon-email iconstyle" />
                                    </div>
                                    <div className="txtbox">
                                        <div className="title">Email</div>
                                        <div className="txt">
                                            <a href="mailto:hello@ideacube.co">
                                                hello@ideacube.co
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-lg-6">
                            <div className="contactFormSec">
                                <h2 data-aos="fade-up" data-aos-duration="1200">
                                    Enquiry
                                </h2>

                                <div
                                    className="text"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    Have questions or need assistance? Fill out the form below, and
                                    our team will get back to you as soon as possible.
                                </div>

                                <div
                                    className="contact-form"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <form method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="FormItem">
                                                    <div className="txt-label">
                                                        Name<span className="required">*</span>
                                                    </div>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="FormItem">
                                                    <div className="txt-label">
                                                        Phone<span className="required">*</span>
                                                    </div>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="FormItem">
                                                    <div className="txt-label">
                                                        Email<span className="required">*</span>
                                                    </div>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="FormItem">
                                                    <div className="txt-label">Subject</div>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="FormItem">
                                                    <div className="txt-label">Enquiry</div>
                                                    <textarea
                                                        className="form-control"
                                                        id="message"
                                                        rows="1"
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="location-sec">
                <div className="location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d462561.65915368934!2d55.227488!3d25.076022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1746166246746!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </div>
            </section>

        </>
    );
};

export default Contact;
