import React from 'react'
import Image from 'next/image'

const galleryData = [
    { type: 'text', title: 'Spaces That', color: '#47BEB1' },
    { type: 'image', src: '/images/home/homeGallery1.png', alt: 'Modern Architecture' },
    { type: 'text', title: 'Celebrate', color: '#0095D3' },
    { type: 'image', src: '/images/home/homeGallery2.png', alt: 'Interior Design' },
    { type: 'image', src: '/images/home/homeGallery3.png', alt: 'Urban Planning' },
    { type: 'text', title: 'Love', color: '#F2C337' },
    { type: 'image', src: '/images/home/homeGallery4.png', alt: 'Construction Site' },
    { type: 'text', title: 'and Laughter', color: '#000000' },
]

const HomeGallery = () => {
    return (
        <section className="homeGallerySection">
            <div className="homeGalleryGrid">
                {galleryData.map((item, index) => (
                    <div
                        key={index}
                        className={`galleryItem ${item.type === 'text' ? 'galleryText' : 'galleryImage'}`}
                        style={item.type === 'text' && item.color ? { backgroundColor: item.color } : {}}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay={index * 100}
                    >
                        {item.type === 'image' ? (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="galleryImg"
                            />
                        ) : (
                            <div className="galleryContent">
                                <h3>{item.title}</h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeGallery