import Image from "next/image"

const page = () => {
  return (
    <main className="projectDetailsWrap">
        <div className="staticNoBannerWrap">
            <div className="containerWrapper">
                <div className="projectHeader">
                    <span  data-aos="fade-up" data-aos-duration="600">PROJECT NAME 1</span>
                    <h1  data-aos="fade-up" data-aos-duration="800"><i>Discover Our Projects: </i> A reflection of our craft and capability</h1>
                </div>
                <div className="projectDescription">
                    <p className="desc" data-aos="fade-up" data-aos-duration="1000">At SKYLAND, we specialize in crafting expertly designed and structurally reliable construction solutions for residential villas, apartment complexes, and commercial developments. Our work blends contemporary architecture with trusted engineering, delivering spaces that are visually striking, highly functional, and built to last.</p>
                    
                    <p className="desc" data-aos="fade-up" data-aos-duration="1200">From concept planning to final handover, every SKYLAND project is shaped around the unique needs of our clients. We ensure intelligent space utilization, premium materials, and modern construction methodologies to create environments that offer comfort, efficiency, and long-term value.</p>
                    
                    <p className="desc" data-aos="fade-up" data-aos-duration="1400">Whether it's an elegant private villa or a multi-storey commercial structure, SKYLAND focuses on durability, safety, and quality craftsmanship, bringing your vision to life with precision and excellence.</p>
                </div>
                <div className="projectGallery">
                    <div className="projectDetGrid">
                        <div className="projectGridItem" data-aos="fade-up" data-aos-duration="1400">
                            <Image  src="/images/project/illustration-construction-site.png"
                                alt="illustration construction" title="illustration construction"
                                width={835} height={557}
                            />
                        </div>
                        <div className="projectGridItem" data-aos="fade-up" data-aos-duration="1600">
                            <Image  src="/images/project/illustration-construction-site.png"
                                alt="illustration construction" title="illustration construction"
                                width={835} height={557}
                            />
                        </div>
                        <div className="projectGridItem" data-aos="fade-up" data-aos-duration="1800">
                            <Image  src="/images/project/illustration-construction-site.png"
                                alt="illustration construction" title="illustration construction"
                                width={835} height={557}
                            />
                        </div>
                        <div className="projectGridItem" data-aos="fade-up" data-aos-duration="2100">
                            <Image  src="/images/project/illustration-construction-site.png"
                                alt="illustration construction" title="illustration construction"
                                width={835} height={557}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default page