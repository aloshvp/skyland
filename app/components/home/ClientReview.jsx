import React from 'react'
import Image from 'next/image'

const ClientReview = () => {
    return (
        <section className='clientReviewWrap'>
            <div className="container">
                <div className="clientReviewContent">
                    <div className="clientReviewTitle">
                        <h2>Client Review</h2>
                        <div>
                            <span>Real</span>
                            <span>Experiences.</span>
                            <span>Real Results.</span>
                        </div>
                    </div>
                    <div className="clientReviewSlider">
                        <div className="clientReviewSliderItem">
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