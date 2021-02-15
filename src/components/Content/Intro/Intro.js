import React, { useState, useEffect } from 'react'
import { TimelineMax, Circ } from "gsap"
import { FaAt, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import axios from "../../../axios"

const Intro = () => {
    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get('/Data.json')
            .then(res => {
                console.log(res.data);
                setData(res.data.Contact)
            })
            .catch(error => console.error(error))

    }, [])
    useEffect(() => {
        var tl = new TimelineMax({ repeat: -1 });

        tl.to(".bounce", .1, { transformOrigin: "50% 100%", scaleY: 0.35, yoyo: true, repeat: 1 })
            .to(".bounce", .75, { y: -48, ease: Circ.easeOut, yoyo: true, repeat: 1 });

    }, [])

    return (
        <>
            <div className="box-intro">
                <div className="header-table">
                    <h1 className='box-headline'>Hello
                    <div className="bounce"></div>
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
                    <a href={`https://api.whatsapp.com/send/?phone=${data && data.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer"
                        title="Via whatsapp"><FaWhatsapp /> </a>
                    <a href={`mailto:${data && data.email}`} target='blank' rel="noopener noreferrer">
                        <FaAt /> </a>
                    <a href={data && data.linkdIn} target='blank' rel="noopener noreferrer">
                        <FaLinkedinIn /> </a>
                </div>
            </div>

        </ >
    )
}

export default Intro;