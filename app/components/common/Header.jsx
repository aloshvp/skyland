"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 || (width && width < 1200)) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [width]);

    return (
        <>
            <header className={`headerWrap ${scrolled ? 'fix' : ''}`}>
                <div className="headerLogoSec">
                    <Link href="/" className="firstLogoLink">
                        <Image
                            src="/images/common/skyland_logo.svg"
                            alt="Logo"
                            width={261}
                            height={58}
                            className="headerLogo img"
                            priority
                        />
                    </Link>
                </div>
                {(width === undefined || width > 991) && (
                    <div className="navLinksListSec">
                        <ul className='navLinksList'>
                            <li>
                                <Link href="/" className="navLink">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="navLink" scroll={false}>
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="navLink" scroll={false}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="navLink" scroll={false}>
                                    PT Slab
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="navLink" scroll={false}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="navLink" scroll={false}>
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="navLink" scroll={false}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="hamburgerSec">
                    <Link href="" className="talkWithUsBtn" scroll={false}>Talk with us</Link>
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </header >
            <div className="whatsappBtnWrap">
                <Link href="https://wa.me/" target="_blank" className="whatsappBtn">
                    <Image
                        src="/images/common/whatsapp.png"
                        alt="WhatsApp"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
        </>
    )
}

export default Header