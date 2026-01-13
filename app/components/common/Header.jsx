"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize'
import { NAV_LINKS } from '@utils/homeData'


const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { width } = useWindowSize();
    const pathname = usePathname();

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

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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
                {(width === undefined || width > 1200) && (
                    <div className="navLinksListSec">
                        <ul className='navLinksList'>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`navLink ${pathname === link.href ? 'active' : ''
                                            }`}
                                        scroll={false}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="hamburgerSec">
                    <Link href="" className="talkWithUsBtn" scroll={false}>Talk with us</Link>
                    <div className="hamburger" onClick={toggleSidebar}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </header >

            {/* Mobile Sidebar */}
            <div className={`mobileSidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebarOverlay" onClick={toggleSidebar}></div>
                <div className="sidebarContent">
                    <div className="sidebarHeader">
                        <button className="closeSidebar" onClick={toggleSidebar}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="sidebarNav">
                        <ul className="sidebarNavList">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={pathname === link.href ? 'active' : ''}
                                        onClick={toggleSidebar}
                                        scroll={false}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

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