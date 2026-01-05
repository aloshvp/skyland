"use client";
import React from 'react'
import { Accordion } from 'react-bootstrap'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <section className="whyChooseSection">
            <div className="row">
                <div className="col-lg-6">
                    <div
                        className="whyChooseImage"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <Image
                            src="/images/home/why-choose-us.png"
                            alt="Why Choose Us"
                            width={785}
                            height={1176}
                        />
                    </div>
                </div>

                <div className="col-lg-6 alSelfCenter">
                    <div className="whyChooseContent paddingLeft">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="1200">
                            What Makes Skyland One of Kerala’s Most Trusted Builders
                        </h2>
                        <div
                            className="SecHead_Small"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            Why Choose Us
                        </div>
                        <div
                            className="SecHeading"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            Driven by integrity, we deliver value through our services
                        </div>

                        <div className="whyChooseAccordion">
                            <Accordion defaultActiveKey="0">
                                {[
                                    { title: "Experienced Team", content: "Our team consists of industry veterans with decades of combined experience in construction and engineering." },
                                    { title: "Innovative Designs", content: "We push the boundaries of architecture to create modern, functional, and aesthetically pleasing structures." },
                                    { title: "Quality Assurance", content: "We adhere to strict quality control standards to ensure every project meets the highest benchmarks of safety and durability." },
                                    { title: "On-Time Delivery", content: "We respect deadlines and are committed to delivering projects on schedule without compromising on quality." },
                                    { title: "Sustainable Practices", content: "We implement eco-friendly construction methods and materials to minimize environmental impact." }
                                ].map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index} data-aos="fade-up" data-aos-duration="1200">
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