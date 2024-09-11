import React, { useEffect, useContext } from 'react'
import { DataContext } from "../../context/DataContext"
import { gsap, Circ } from "gsap"
import { FaAt, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Intro = () => {

    const { dataContact, loading } = useContext(DataContext);


    useEffect(() => {

        var tl = gsap.timeline({ repeat: -1 });

        tl.to(".bounce", .1, { transformOrigin: "50% 100%", scaleY: 0.35, yoyo: true, repeat: 1 })
            .to(".bounce", .75, { y: -48, ease: Circ.easeOut, yoyo: true, repeat: 1 });

    }, [])


    return (
        <>
            <div className="box-intro">
                <div className="header-table">
                    <h1 className='header-me'>Hello
                        <div className="bounce"></div>
                    </h1>
                    <h1 className='header-me'>I am</h1>
                    <h1 className='header-me'>anna</h1>
                    <p className='surname'>savchenko</p>

                </div>

                <div className='role'>
                    <h5>junior</h5>
                    <h5>web</h5>
                    <h5>developer</h5>
                </div>
                {!loading &&
                    <div className="contact-info">
                        <a href={`https://api.whatsapp.com/send/?phone=${dataContact.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer"
                            title="Via whatsapp"><FaWhatsapp /> </a>
                        <a href={`mailto:${dataContact.email}`} target='blank' rel="noopener noreferrer">
                            <FaAt /> </a>
                        <a href={dataContact.linkdIn} target='blank' rel="noopener noreferrer">
                            <FaLinkedinIn /> </a>
                    </div>
                }
            </div>
        </>
    )
}

export default Intro;