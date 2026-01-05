"use client";

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
                            src="/images/banner-commercial-and-residential-construction.avif"
                            alt="Commercial & Residential Construction"
                            width={1920}
                            height={600}
                            priority
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption WiderCap">
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Commercial & Residential Construction
                                    </div>
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        From towers to villas, we deliver quality, innovation, and
                                        expertise in every project
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pattern-bg-top">
                <Image
                    src="/images/pattern-bg-top.png"
                    alt="services"
                    width={1920}
                    height={120}
                />
            </div>

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
                                    <h1>Commercial & Residential Construction</h1>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="Service_Detail_ContentBox">
                                    <div className="Service_Detail_Desc">
                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            We specialize in delivering expertly designed and
                                            structurally sound construction solutions for residential
                                            villas, apartment complexes, and commercial buildings.
                                        </p>

                                        <p data-aos="fade-up" data-aos-duration="1200">
                                            From concept planning to final execution, every project is
                                            tailored to meet the specific needs of our clients with
                                            durability, safety, and long-term value.
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
                                "commercial-and-residential-construction-1.avif",
                                "commercial-and-residential-construction-2.avif",
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

        </>
    );
};

export default CommercialBuildings;
