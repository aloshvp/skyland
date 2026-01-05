import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PostTension = () => {
    return (
        <section className='postTensionWrap'>
            <Image
                src="/images/home/post-tension.png"
                alt="Post Tension"
                fill
                className='postTensionBg' />
            <div className="postTensionOverlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="postTensionContent">
                            <span data-aos="fade-up" data-aos-delay="0">Kerala's No 1</span>
                            <h2 data-aos="fade-up" data-aos-delay="100">Post Tension Experts</h2>
                            <p data-aos="fade-up" data-aos-delay="200">Post-tensioning strengthens concrete by applying compressive stress using high-tensile steel tendons, counteracting tensile forces from load and weight. Strands specializes in bonded post-tensioning, which provides superior corrosion protection and durability-ideal for slabs, bridges, and complex structures.</p>
                            <Link href="" className='exploreBtn' scroll={false} data-aos="fade-up" data-aos-delay="300">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostTension