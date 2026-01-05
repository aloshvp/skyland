"use client"
import React from 'react';
import Image from 'next/image';

const HomeForm = () => {
    return (
        <section className='homeFormWrap'>
            <Image src="/images/home/excavator-action.png" alt="Contact Background" fill className="homeFormBg" />
            <div className="homeFormOverlay"></div>
            <div className="container">
                <div className="homeFormContent">
                    <div className="homeFormHead">
                        <h2>Are you planning a new project?</h2>
                        <p>Partner with Skyland, where experience meets excellence. From design to delivery, we ensure quality, transparency, and timely completion every step of the way. Let’s build your vision together.</p>
                    </div>
                    <div className="homeFormSec">
                        <form action="">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" />
                            <button onClick={(e) => e.preventDefault()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeForm;