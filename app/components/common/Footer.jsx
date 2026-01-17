import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footerWrap'>
            <div className="container">
                <div className="footerContent">
                    <div className="footerLogoSec">
                        <div className="footerLogoImg">
                            <Image src="/images/common/skyland_logo.png" alt="logo" width={261} height={58} />
                        </div>
                        <div className="socialMediaLinks">
                            <p>Connect with us</p>
                            <ul className='socialMediaList'>
                                <li>
                                    <Link href="" scroll={false}>
                                        <Image src="/images/common/facebook.png" alt="facebook" width={15} height={28} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" scroll={false}>
                                        <Image src="/images/common/instagram.svg" alt="instagram" width={40} height={40} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" scroll={false}>
                                        <Image src="/images/common/youtube.png" alt="youtube" width={31} height={22} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerLinksSec">
                        <div className='footerLinksCol'>
                            <span>Navigation</span>
                            <ul className='footerLinksList'>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About us </Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/career">Career</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='footerLinksCol'>
                            <span>Services</span>
                            <ul className='footerLinksList'>
                                <li><Link href="/commercial-buildings">Commercial Buildings</Link></li>
                                <li><Link href="" scroll={false}>Residential Buildings</Link></li>
                                <li><Link href="" scroll={false}>Interior Design</Link></li>
                            </ul>
                        </div>
                        <div className='footerLinksCol'>
                            <span>Disclosures</span>
                            <ul className='footerLinksList'>
                                <li><Link href="" scroll={false}>Privacy Policy</Link></li>
                                <li><Link href="" scroll={false}>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerAddressSec">
                        <span>Location</span>
                        <p>2nd Floor,KMATower,</p>
                        <p>Skyland Constructions,</p>
                        <p>near Sakthan stand,</p>
                        <p>Kannamkulangara</p>
                        <p>Thrissur,Kerala 680007</p>
                    </div>
                </div>
                <div className="footerBottomSec">
                    <p>© {new Date().getFullYear()} Skyland Constructions Pvt Ltd. All Rights Reserved</p>
                    <p>Developed by Marin Infotech</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer