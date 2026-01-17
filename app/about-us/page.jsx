"use client";

import HomeForm from "@home/HomeForm";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <>

            {/* Sub Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <img
                            src="/images/static/about-us-bg.png"
                            alt="About Us"
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption">
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        About Us
                                    </div>
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Home &gt; About Us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* about us count */}
            <section className="aboutUsCountWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="aboutUsCountSec">
                                <div className="aboutUsCountSecItem item1" data-aos="fade-up" data-aos-duration="1200">
                                    <span>20+</span>
                                    <h3>Years of Experiance</h3>
                                    <p>Our years of industry experience allow Skyland Builders to bring expertise, efficiency, and innovation to every project—ensuring results you can trust</p>
                                </div>
                                <div className="aboutUsCountSecItem item2" data-aos="fade-up" data-aos-duration="1400">
                                    <span>109+</span>
                                    <h3>Completed projects</h3>
                                    <p>Our completed projects reflect our quality, precision, and timely delivery—showcasing our commitment to client satisfaction.</p>
                                </div>
                                <div className="aboutUsCountSecItem item3" data-aos="fade-up" data-aos-duration="1600">
                                    <span>12</span>
                                    <h3>Ongoing Projects</h3>
                                    <p>Ongoing projects that reflect our steady progress, quality, and commitment to excellence.</p>
                                </div>
                                <div className="aboutUsCountSecItem item4" data-aos="fade-up" data-aos-duration="1800">
                                    <span>3</span>
                                    <h3>Ready to Move</h3>
                                    <p>Homes that are fully finished, quality-checked, and ready for immediate occupancy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Company */}
            <section className="ourCompanyWrap">
                <div className="ourCompanyContentSec">
                    <div className="container">
                        <h2 data-aos="fade-up" data-aos-duration="1200">About <span>Our Company</span></h2>
                        <p data-aos="fade-up" data-aos-duration="1400">Welcome to Skyland Buildings & Construction, where quality, reliability, and on-time delivery meet your vision. With skilled craftsmanship and experienced teams, we handle residential, commercial, and custom projects with precision and care.</p>
                        <p data-aos="fade-up" data-aos-duration="1600">Our goal is simple: to build strong structures and even stronger client relationships. At Skyland, we don’t just construct buildings—we cultivate excellence, dependability, and trust from the ground up.</p>
                    </div>
                </div>
                <div className="ourCompanyImgSec">
                    <div className="container">
                        <Image
                            src="/images/static/our-company.png"
                            alt="ourCompany"
                            width={728}
                            height={720}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </section>

            {/* MD Message */}
            <section className="mdMsgWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mdMsgSec">
                                <div className="mdMsgSecLeft" data-aos="fade-up" data-aos-duration="1200">
                                    <Image src="/images/static/MD.png" alt="mission" width={666} height={668} />
                                </div>
                                <div className="mdMsgSecRight">
                                    <h2 data-aos="fade-up" data-aos-duration="1200">MD's Message</h2>
                                    <p data-aos="fade-up" data-aos-duration="1400">
                                        At Skyland Builders, our journey has always been guided by a commitment to quality, integrity, and innovation. Over the years, we have built more than just structures—we have built trust, relationships, and a reputation for excellence.
                                    </p>
                                    <p data-aos="fade-up" data-aos-duration="1600">
                                        Our goal is to create spaces that stand the test of time while ensuring our clients’ vision remains at the heart of every project. As we continue to grow, we remain dedicated to delivering craftsmanship you can rely on and service you can trust.
                                    </p>
                                    <span data-aos="fade-up" data-aos-duration="1800">Thank you for being part of our story.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Vision / Passion */}
            <section className="mission-sec">
                <div className="containerWrapper">
                    <div className="row">
                        {[
                            {
                                img: "mission.svg",
                                title: "Our Mission",
                                desc:
                                    "To provide superior construction solutions with uncompromised quality, timely delivery, and innovative designs."
                            },
                            {
                                img: "vision.svg",
                                title: "Our Vision",
                                desc:
                                    "To be the most trusted and preferred construction partner, creating lasting value for clients."
                            },
                            {
                                img: "passion.svg",
                                title: "Our Passion",
                                desc:
                                    "Passion drives every brick we lay. We design projects that reflect elegance, functionality, and durability."
                            }
                        ].map((item, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="BoxItem">
                                    <div
                                        className="icon"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    >
                                        <img
                                            src={`/images/${item.img}`}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h3 data-aos="fade-up" data-aos-duration="1200">
                                        {item.title}
                                    </h3>
                                    <div
                                        className="desc"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                    >
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Brochure */}
            <section className="downloadBrochureWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="downloadBrochureSec">
                                <div className="downloadBrochureContent">
                                    <h2 data-aos="fade-up" data-aos-duration="1200">Download <em> Brochure</em> </h2>
                                    <p data-aos="fade-up" data-aos-duration="1400">Excellence is at the heart of everything we do, and it is supported by these three core values.</p>
                                </div>
                                <div className="downloadBrochureBtn" data-aos="fade-up" data-aos-duration="1600">
                                    <Link href="" scroll={false}>Download</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HomeForm />

        </>
    );
};

export default About;
