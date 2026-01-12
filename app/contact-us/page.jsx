const Contact = () => {
    return (
        <>

            {/* Sub Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <img
                            src="/images/static/contact-us-bg.png"
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
                                        Get in touch with us for any
                                        <em></em>
                                        inquiries, feedback, or support
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                            2nd Floor, KMA Tower, Skyland Constructions,<br />
                                            near Sakthan stand, Kannamkulangara,<br />
                                            Thrissur, Kerala 680007
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
                                            <a href="tel:917736002040">+91 77360 02040</a>
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
                                            <a href="mailto:skylandconstruction@gmail.com">
                                                skylandconstruction@gmail.com
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5363.344110732892!2d76.21393991180312!3d10.508296389581346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee3e36cf3a59%3A0x73b949ceb96aecc1!2sSkyland%20Constructions!5e1!3m2!1sen!2sin!4v1768238468100!5m2!1sen!2sin"
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
