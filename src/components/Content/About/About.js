import React, { Fragment, useRef, useEffect } from 'react';
import { Col, Row, Card, CardDeck, Jumbotron } from 'react-bootstrap';
import { BsBootstrap } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaFigma, FaSass } from 'react-icons/fa';
import { DiLinux, DiGithubBadge, DiNodejsSmall, DiMongodb, DiJavascript1, DiNodejs, DiReact, DiVisualstudio } from 'react-icons/di';
import { ReactComponent as Postman } from './pm-gray-horiz.svg'
import TopBar from "./TopBar";
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import TableLang from './TableLang';
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    let data = {
        title: [
            { name: "HTML", icon: <AiOutlineHtml5 /> },
            { name: "CSS/SASS", icon: <FaSass /> },
            { name: "JavaScript", icon: <DiJavascript1 /> },
            { name: "Bootstrap", icon: <BsBootstrap /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "ExpressJS", icon: <DiNodejsSmall /> },
            { name: "ReactJS", icon: <DiReact /> },
            { name: "NodeJS", icon: <DiNodejs /> },

        ],
        frame: [
            { name: "Visual Studio", icon: <DiVisualstudio /> },
            { name: "Linux mint", icon: <DiLinux /> },
            { name: "GitHub", icon: <DiGithubBadge style={{ fontSize: '4em' }} /> },
            { name: "Postman", icon: <Postman /> },
            { name: "Figma", icon: <FaFigma /> }
        ]
    }


    let app = useRef(null)
    let tl = gsap.timeline()

    useEffect(() => {
        tl.from('.card svg', .8, { stagger: 0.15, x: 1000, ease: Power3.easeOut })
            .from('.card p', .8, { stagger: 0.15, scale: 0, ease: Power3.easeOut })

        gsap.to(app, 0, { css: { visibility: "visible" } })

        ScrollTrigger.create({
            animation: tl,
            trigger: app,
            // markers: true,
            start: 'top 80%',
            toggleActions: "restart none none restart"
        })
    }, [tl])

    return (
        <Fragment>
            <div className="container2">
                <TopBar />
                <TableLang />

                <Row className="row-skills pl-0">
                    <Col lg={3} md={3} className="p-0">
                        <span data-text="Skills" className="headLang">Skills</span>
                        <span>SKILLS</span>
                    </Col>
                    <Col lg={9} md={9} className="px-0">

                        <CardDeck ref={el => app = el} >
                            {data.title.map(i => (
                                <Card key={i.key}>
                                    {i.icon}
                                    <Card.Body>
                                        <Card.Text>{i.name}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </CardDeck>
                    </Col>

                </Row>

                <div className="profile">
                    <div className="education">
                        <Education />
                    </div>
                    <div className="experience">
                        <Experience />
                    </div>
                </div>

                <Jumbotron>
                    <Row className='d-flex flex-row m-0'>
                        <Col lg={12} className="p-0">
                            <p>I work with/on:</p>
                        </Col>
                        <Col lg={12} className="p-0">
                            <ul>
                                {data.frame.map(y => (
                                    <li>{y.icon}
                                        <span>{y.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        </Fragment >
    )
}


export default About;