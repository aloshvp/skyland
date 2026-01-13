"use client";

import HomeForm from "@home/HomeForm";
import Image from "next/image";
import Link from "next/link";

const CommercialBuildings = () => {
    return (
        <>
            {/* Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <Image
                            src="/images/static/Commercial-Buildings-bg.png"
                            alt="Commercial & Residential Construction"
                            width={1920}
                            height={500}
                            priority
                            className="commercialbuildingsbg"
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption WiderCap">
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Commercial Buildings
                                    </div>
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Home &gt; Commercial Buildings
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Detail */}
            <section className="Service_Detail_Sec">
                <div className="containerWrapper">
                    <div className="Service_Detail_BoxRow">
                        <div className="row">
                            <div className="col-lg-5">
                                <div
                                    className="Service_Detail_Heading"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <h1>Commercial Construction</h1>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="Service_Detail_ContentBox">
                                    <div className="Service_Detail_Desc">
                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            At SKYLAND, we specialize in crafting expertly designed and structurally reliable construction solutions for residential villas, apartment complexes, and commercial developments. Our work blends contemporary architecture with trusted engineering, delivering spaces that are visually striking, highly functional, and built to last.
                                        </p>

                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            From concept planning to final handover, every SKYLAND project is shaped around the unique needs of our clients. We ensure intelligent space utilization, premium materials, and modern construction methodologies to create environments that offer comfort, efficiency, and long-term value.
                                        </p>
                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            Whether it’s an elegant private villa or a multi-storey commercial structure, SKYLAND focuses on durability, safety, and quality craftsmanship, bringing your vision to life with precision and excellence.
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1200">
                                        <a
                                            className="btn btn-WhatsappEnq"
                                            href="https://wa.me/971527288944?text=Say hello, We’d love to hear from you. About *Commercial and Residential Construction*"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icon-whatsapp iconstyle" />
                                            Enquiry
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="Service_Detail_Img_BoxRow">
                        <div className="row gutters">
                            {[
                                "commercial-and-residential-construction-2.avif",
                                "commercial-and-residential-construction-1.avif",
                            ].map((img, i) => (
                                <div className="col-md-6" key={i}>
                                    <div
                                        className="Service_Detail_ImageBox"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    >
                                        <Image
                                            src={`/images/${img}`}
                                            alt="Commercial & Residential Construction"
                                            width={800}
                                            height={500}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <HomeForm />

        </>
    );
};

export default CommercialBuildings;
