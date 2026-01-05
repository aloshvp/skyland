import React from 'react'

const WhatWeDo = () => {
    return (
        <section className='whatWeDoWrap'>
            <h2 data-aos="fade-up" data-aos-delay="0">What We Do?</h2>
            <p data-aos="fade-up" data-aos-delay="100">At Skyland Buildings & Construction, we turn visions into lasting structures. From residential and commercial spaces to custom builds, we deliver quality, precision, and on-time results — building not just projects, but lasting trust.</p>
            <div className="whatWeDoGrid">
                <div className="whatWeDoGridItem item1" data-aos="fade-up" data-aos-delay="200">
                    <div className="whatWeDoGridItemIcon whatWeDoGridItemIcon1">
                        <img src="/images/home/buildings.png" alt="" width={71} height={67} />
                    </div>
                    <p>At Skyland Buildings & Construction, we turn visions into lasting structures. From residential and commercial spaces to custom builds, we deliver quality, precision, and on-time results — building not just projects, but lasting trust.</p>
                </div>
                <div className="whatWeDoGridItem item2" data-aos="fade-up" data-aos-delay="300">
                    <div className="whatWeDoGridItemIcon whatWeDoGridItemIcon2">
                        <img src="/images/home/Residential-Buildings.png" alt="" width={235} height={168} />
                    </div>
                    <p>Residential Buildings</p>
                </div>
                <div className="whatWeDoGridItem item3" data-aos="fade-up" data-aos-delay="400">
                    <div className="whatWeDoGridItemIcon whatWeDoGridItemIcon3">
                        <img src="/images/home/InteriorDesign.png" alt="" width={212} height={168} />
                    </div>
                    <p>Interior Design</p>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo