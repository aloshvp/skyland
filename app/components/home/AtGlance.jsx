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
                        <h2 data-aos="fade-up" data-aos-delay="0">SkyLand Constructions</h2>
                    </div>
                    <div className="atGlanceItem item2">
                        <Image
                            src="/images/home/play-Button.png"
                            alt="Play Button"
                            width={108}
                            height={108}
                            data-aos="fade-up" data-aos-delay="100" />
                    </div>
                    <div className="atGlanceItem item3">
                        <Link href="" className='exploreBtn' scroll={false} data-aos="fade-up" data-aos-delay="200">About Us</Link>
                    </div>
                    <div className="atGlanceItem item4">
                        <span data-aos="fade-up" data-aos-delay="300">At a Glance</span>
                        <p data-aos="fade-up" data-aos-delay="400">With integrity, we create homes and commercial spaces built to last.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AtGlance