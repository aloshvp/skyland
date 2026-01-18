import React from 'react'

const CommonBanner = () => {
    return (
        <section className="common-banner-sec">
            <div className="commonBannerImgWrap">
                <div className="banner-image">
                    <img
                        src="/images/static/about-us-bg.png"
                        alt="About Us"
                    />
                    <div className="banner-title">
                        <div className="containerWrapper">
                            <div className="common-banner-caption">
                                <div
                                    className="mainTitle"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    About Us
                                </div>
                                <div
                                    className="subCaption"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    Home &gt; About Us
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommonBanner