import React, { useRef, useEffect } from 'react'
import { Col, Row, Card, CardDeck } from 'react-bootstrap';
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Skills = ({ icons }) => {

    let skill = useRef(null)
    let tl = gsap.timeline()

    useEffect(() => {
        tl.from('.card svg', 1, { stagger: 0.15, y: 30, opacity: 0, duration: .2, ease: Power3.easeIn })
            .from('.card p', .8, { stagger: 0.15, scale: 0, ease: Power3.easeIn }, "-=2")
        gsap.to(skill, 0, { css: {opacity: 1 } })

        ScrollTrigger.create({
            animation: tl,
            trigger: skill,
            // markers: true,
            start: 'top 80%',
            toggleActions: "restart none none restart"
        })

    }, [tl])

    return (
        <Row className="row-skills">
            <Col lg={3} md={3} className="p-0">
                <span data-text="Skills" className="headLang">Skills</span>
                <span className='headHided'>SKILLS</span>
            </Col>
            <Col lg={9} md={9} className="icons" >
                <div>
                    <h4>Coding</h4>
                    <CardDeck className="coding" ref={el => skill = el}>
                        {icons.coding.map(icon => (
                            <Card key={icon.name} >
                                {icon.icon}
                                <Card.Body>
                                    <Card.Text>{icon.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </div>
                <div>
                    <h4>Design</h4>
                    <CardDeck className="design" ref={el => skill = el}>
                        {icons.design.map(icon => (
                            <Card key={icon.name}>
                                {icon.icon}
                                <Card.Body>
                                    <Card.Text>{icon.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </div>

            </Col>

        </Row>
    )
}

export default Skills
