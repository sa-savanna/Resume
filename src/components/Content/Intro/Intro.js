import React, { useEffect } from 'react'
import { TimelineMax, Circ } from "gsap"
import { FaAt, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';


const Intro = () => {

    useEffect(() => {
        var tl = new TimelineMax({ repeat: -1 });
        tl.to(".box", .10, { transformOrigin: "50% 100%", scaleY: 0.35, yoyo: true, repeat: 1 })
            .to(".box", .75, { y: -48, ease: Circ.easeOut, yoyo: true, repeat: 1 });
    })

    return (
        <>
            <div className="box-intro">
                <div className="header-table">
                    <h1 className='box-headline'>Hello
                    <div className="box bounce-6"></div>
                    </h1>
                    <h1 className='box-headline'>I am</h1>
                    <h1 className='box-headline'>anna</h1>
                    <p>savchenko</p>
                </div>

                <div className='sub-table'>
                    <h5>junior</h5>
                    <h5>web</h5>
                    <h5>developer</h5>
                </div>
                <div className="contact-info">
                    <a href="https://wa.me/32493339032?text=Hello%20Anna," target='blank' rel="noopener noreferrer"
                        title="Via whatsapp"><FaWhatsapp /> </a>
                    <a href="mailto:savanna.be.ua@gmail.com" target='blank' rel="noopener noreferrer">
                        <FaAt /> </a>
                    <a href="https://www.linkedin.com/in/anna-savchenko" target='blank' rel="noopener noreferrer">
                        <FaLinkedinIn /> </a>
                </div>
            </div>

        </ >
    )
}

export default Intro;