'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Controller } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { bestWorkSlides } from '@utils/homeData';

const BestWork = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className='bestWorkWrap'>
            <div className="bestWorkBody">
                <Swiper
                    modules={[Navigation, Pagination, Thumbs, Controller]}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    pagination={{
                        el: '.swiper-pagination-custom',
                        clickable: true,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="bestWorkMainSlider"
                    slidesPerView={1}
                    loop={true}
                >
                    {bestWorkSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="bestWorkSlideItem">
                                <div className="bestWorkImage">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="workImg"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="bestWorkOverlay">
                    <div className="container h-100">
                        <div className="bestWorkHeader">
                            <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="700"><em>View Some of Our</em> Best Work</h2>
                            <div className="bestWorkControls" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                                <div className="swiper-button-prev-custom custom-nav-btn">
                                    <Image src="/images/home/left-arrow.png" alt="Previous" width={59} height={59} />
                                </div>
                                <div className="swiper-pagination-custom"></div>
                                <div className="swiper-button-next-custom custom-nav-btn">
                                    <Image src="/images/home/right-arrow.png" alt="Next" width={59} height={59} />
                                </div>
                            </div>
                        </div>

                        <div className="bestWorkFooterExternal">
                            <div className="activeSlideInfo" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                                <h3>{bestWorkSlides[activeIndex]?.title}</h3>
                                <p>{bestWorkSlides[activeIndex]?.description}</p>
                            </div>

                            <div className="thumbsSliderWrap" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    modules={[Thumbs]}
                                    watchSlidesProgress
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    className="bestWorkThumbsSlider"
                                >
                                    {bestWorkSlides.map((slide, index) => (
                                        <SwiperSlide key={slide.id}>
                                            <div className={`thumbItem ${activeIndex === index ? 'active-thumb' : ''}`}>
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    width={100}
                                                    height={80}
                                                    className="thumbImg"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestWork