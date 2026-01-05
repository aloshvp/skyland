"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
    "/images/gallery-1.avif",
    "/images/gallery-2.avif",
    "/images/gallery-3.avif",
    "/images/gallery-4.avif",
    "/images/gallery-5.avif",
    "/images/gallery-6.avif",
    "/images/gallery-7.avif",
    "/images/gallery-8.avif",
];

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openGallery = (index) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    return (
        <>

            {/* Banner */}
            <section className="sub-banner-sec">
                <div className="subBannerImgWrap">
                    <div className="banner-image">
                        <img
                            src="/images/banner-gallery.avif"
                            alt="Gallery"
                        />
                        <div className="banner-title">
                            <div className="containerWrapper">
                                <div className="sub-banner-caption">
                                    <div
                                        className="subCaption"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Photo Gallery
                                    </div>
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Showcasing Our Quality & Expertise
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pattern-bg-top">
                <img
                    src="/images/pattern-bg-top.png"
                    alt="services"
                />
            </div>
            {/* ======= GRID VIEW (PREVIOUS DESIGN) ======= */}
            <section className="gallery-sec">
                <div className="containerWrapper">
                    <h1 data-aos="fade-up" data-aos-duration="1200">
                        Photo Gallery
                    </h1>

                    <div className="glr-single-row">
                        <div className="row">
                            {galleryImages.map((img, index) => (
                                <div
                                    className="col-xl-3 col-lg-4 col-sm-6"
                                    key={index}
                                >
                                    <div
                                        className="glr-Box"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        onClick={() => openGallery(index)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="glr-item">
                                            <img src={img} alt="Gallery" />
                                        </div>
                                        <div className="glr-title">
                                            Photo Gallery - {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= SWIPER MODAL (ON CLICK) ======= */}
            {isOpen && (
                <div className="galleryModal">
                    <button
                        className="closeBtn"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        initialSlide={activeIndex}
                        className="gallerySwiper"
                    >
                        {galleryImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`Gallery ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    );
}
