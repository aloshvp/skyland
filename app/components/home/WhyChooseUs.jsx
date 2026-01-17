"use client";
import React from 'react'
import { Accordion } from 'react-bootstrap'
import Image from 'next/image'
import { whyChooseUsAccordionData } from '@utils/homeData'

const WhyChooseUs = () => {
    return (
        <section className="whyChooseSection">
            <div className="row">
                <div className="col-lg-6">
                    <div
                        className="whyChooseImage"
                        data-aos="fade-up"
                        data-aos-duration="700"
                    >
                        <Image
                            src="/images/home/why-choose-us-hero.png.png"
                            alt="Why Choose Us"
                            width={784}
                            height={898}
                        />
                    </div>
                </div>

                <div className="col-lg-6 alSelfCenter">
                    <div className="whyChooseContent paddingLeft">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="0">
                            What Makes Skyland One of Kerala’s Most Trusted Builders
                        </h2>
                        <div
                            className="SecHead_Small"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="50"
                        >
                            Why Choose Us
                        </div>
                        <div
                            className="SecHeading"
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-delay="100"
                        >
                            Driven by integrity, we deliver value through our products and services
                        </div>

                        <div className="whyChooseAccordion">
                            <Accordion defaultActiveKey="0">
                                {whyChooseUsAccordionData.map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index} data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>
                                            <p>{item.content}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WhyChooseUs