import React, { useState, useEffect } from 'react'
import { Image, Button } from 'react-bootstrap';
import { FaGithub, FaRegEye, FaHtml5, FaNodeJs, FaReact, FaAngular } from 'react-icons/fa';
import Header from '../Header';
import axios from "../../../axios"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get('/Data.json')
            .then(res => {
                // console.log(res.data);
                setData(res.data.Portfolio)
            })
            .catch(error => console.error(error))

    }, [])


    let dataIcons = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "Node", icon: <FaNodeJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Angular", icon: <FaAngular /> }
    ]
    const findIcon = (frame) => {
        for (let idx in dataIcons) {
            if (dataIcons[idx].name === frame) {
                return dataIcons[idx].icon
            }
        }
    }

        return (
            <>
                <div className="inner">
                    <Header header={data && data.header.title} paragraph={data && data.header.paragraph} name={data && data.header.name} />
                    <div className="title">
                        <p>This site is made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React
                    </a> library, without backend, using
                    <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"> SASS</a>  styling and <a href="https://greensock.com/" target="_blank" rel="noopener noreferrer"> GreenSock</a> animation.</p>
                        <a href='https://github.com/sa-savanna/Resume' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                            <Button variant="warning" size="sm"><FaGithub />View code</Button>
                        </a>
                    </div>

                    <div className="wrapper p-0">
                        {
                            data && data.cards.map(({ img, links, title, list, frame }) => (
                                <div key={title} className="card">
                                    <div className="frame">{findIcon(frame)}</div>
                                    <Image variant="top" src={require(`${img}`)} />
                                    <div className="info">
                                        <h5 className="mb-4">{title}</h5>
                                        <ul>
                                            {
                                                list.map((x, key) => (
                                                    <li key={key}>{x}</li>
                                                ))
                                            }
                                        </ul>
                                        <div>
                                            <a href={links.site} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Click to watch">
                                                <Button
                                                    className={links.site === '' && 'disabled'}
                                                    variant="warning"
                                                    size="lg"> <FaRegEye />
                                                </Button>
                                            </a>

                                            <a href={links.git} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                                                <Button
                                                    className={links.git === '' && 'disabled'}
                                                    variant="warning"
                                                    size="lg"><FaGithub />
                                                </Button>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div >
                </div >
            </>
        )

    }

    export default Portfolio;
