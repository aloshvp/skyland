import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AtGlance = () => {
    return (
        <section className='atGlanceWrap'>
            <Image
                src="/images/home/about-us-bg.png"
                alt="At Glance"
                fill
                className='atGlanceBg' />
            <div className="atGlanceOverlay"></div>
            <div className="container">
                <div className="atGlanceGrid">
                    <div className="atGlanceItem item1">

                        <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="0">SKYLAND Constructions</h2>
                    </div>
                    <div className="atGlanceItem item2">
                        <Image
                            src="/images/home/play-Button.png"
                            alt="Play Button"
                            width={107}
                            height={107}
                            data-aos="fade-up" data-aos-duration="700" data-aos-delay="50" />
                    </div>
                    <div className="atGlanceItem item3">
                        <Link href="" className='exploreBtn' scroll={false} data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">About Us</Link>
                    </div>
                    <div className="atGlanceItem item4">
                        <span data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">At a Glance</span>
                        <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">With integrity, we create homes and commercial spaces built to last.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AtGlance