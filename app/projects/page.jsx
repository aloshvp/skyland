"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { galleryImages } from "@utils/staticData";



const categories = ["Residential Buildings", "Commercial Buildings", "Interior Design"];

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("Residential Buildings");

    useEffect(() => {
        AOS.init({
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [activeCategory]);

    const filteredImages = galleryImages.filter(
        (img) => img.category === activeCategory
    );

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
                                        Projects
                                    </div>
                                    <div
                                        className="mainTitle"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        Discover Our Projects:
                                        <em></em>
                                        A reflection of our craft and capability
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= GRID VIEW ======= */}
            <section className="gallery-sec">
                <div className="containerWrapper">

                    {/* Filter Buttons */}
                    <div
                        className="filter-buttons"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`filter-btn ${activeCategory === cat ? "active" : ""
                                    } filter-btn-${cat
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="glr-single-row">
                        <div className="row">
                            {filteredImages.length > 0 ? (
                                filteredImages.map((img, index) => (
                                    <div
                                        className="col-xl-3 col-lg-4 col-sm-6"
                                        key={`${activeCategory}-${img.id}`}
                                    >
                                        <div
                                            className="glr-Box"
                                            data-aos="fade-up"
                                            data-aos-duration="600"
                                            data-aos-delay={index * 50}
                                            data-aos-offset="0"
                                            onClick={() => openGallery(index)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="glr-item">
                                                <img
                                                    src={img.src}
                                                    alt={`Gallery ${activeCategory} ${index + 1}`}
                                                />
                                            </div>
                                            <div className="glr-title">
                                                {img.category} Project
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No images found in this category.</p>
                                </div>
                            )}
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
                        {filteredImages.map((img) => (
                            <SwiperSlide key={img.id}>
                                <img
                                    src={img.src}
                                    alt={`Gallery ${activeCategory} ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    );
}
