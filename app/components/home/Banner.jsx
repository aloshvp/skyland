"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { bannerSlides } from '@utils/homeData';

const Banner = () => {
    return (
        <section className='bannerWrapper'>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}
                speed={800}
                effect="fade"
                className="bannerSwiper"
            >
                {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className='bannerSlide'>
                            <Image
                                src={slide.backgroundImage}
                                alt={slide.title}
                                fill
                                className='bannerBgImage'
                                priority={slide.id === 1}
                            />
                            <div className='bannerOverlay'></div>
                            <div className='container'>
                                <div className='bannerContent'>
                                    <h1 data-aos="fade-up" data-aos-duration="1200">
                                        {slide.title}
                                        <span>{slide.subtitle}</span>
                                    </h1>
                                    <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Banner