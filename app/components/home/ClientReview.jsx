import React from 'react'
import Image from 'next/image'

const ClientReview = () => {
    return (
        <section className='clientReviewWrap'>
            <div className="container">
                <div className="clientReviewContent">
                    <div className="clientReviewTitle">
                        <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="0">Client <span>Review</span></h2>
                        <div>
                            <span data-aos="fade-up" data-aos-duration="700" data-aos-delay="50">Real</span>
                            <span data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">Experiences.</span>
                            <span data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">Real Results.</span>
                        </div>
                    </div>
                    <div className="clientReviewSlider">
                        <div className="clientReviewSliderItem" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                            <div className="clientReviewSliderItemImg">
                                <Image src="/images/home/family-home.png" alt="clientReviewSlider1" width={565} height={507} />
                            </div>
                            <div className="clientReviewSliderItemContent">
                                <p>“Excellent workmanship and great communication throughout the project. Skyland’s team handled everything smoothly — we couldn’t be happier with the result.”</p>
                                <span>— Arun Menon, Kochi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientReview