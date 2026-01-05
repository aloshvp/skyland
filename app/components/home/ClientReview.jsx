import React from 'react'

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
                            <div className="clientReviewSliderItemImg"></div>
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