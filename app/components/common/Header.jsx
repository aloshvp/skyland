import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='headerWrap'>
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
            <div className="navLinksListSec">
                <ul className='navLinksList'>
                    <li>
                        <Link href="" className="navLink" scroll={false}>
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
            <div className="hamburgerSec">
                <Link href="" className="talkWithUsBtn" scroll={false}>Talk with us</Link>
                <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </header >
    )
}

export default Header