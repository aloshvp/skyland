"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import { servicesData } from "@utils/staticData";

const page = () => {
    useEffect(() => {
        // Ensure AOS is refreshed when this page loads
        const refreshAOS = () => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        };

        // Refresh immediately and after delays to ensure animations work
        refreshAOS();
        const timer1 = setTimeout(refreshAOS, 100);
        const timer2 = setTimeout(refreshAOS, 300);
        const timer3 = setTimeout(refreshAOS, 600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const totalServices = servicesData?.length;

    return (
        <section className='serviceWrap'>
            {servicesData?.map((service, index) => {

                const isLastItem = index === totalServices - 1;
                const bgClass = `serviceMainItemBg ${isLastItem ? 'serviceMainItemBgLast' : ''}`;

                return (
                    <div className="serviceMainItem" key={service.number}>
                        {/* Use the dynamically created bgClass */}
                        <div className={bgClass}>
                            <Image src={service.bgImage} alt={service.name} fill className="serviceMainItemImg" priority />
                        </div>
                        <div className="serviceMainItemContent">
                            <span className="serviceMainItemNumber" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quart" data-aos-offset="150" data-aos-once="false">{service.number}</span>
                            <h3 className="serviceMainItemName" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quart" data-aos-offset="150">{service.name}</h3>
                            <Link href={service?.link ? service?.link : ""} data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-quart" data-aos-offset="150">
                                Explore More <span className="arrow"></span>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default page