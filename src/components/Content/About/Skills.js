import React, { useRef, useEffect } from 'react'
import { Col, Row, Card, CardDeck } from 'react-bootstrap';
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Skills = ({ icons }) => {

    let app = useRef(null)
    let tl = gsap.timeline()
   
    useEffect(() => {
        tl.from('.coding svg', .8, { stagger: 0.15, x: -500, ease: Power3.easeOut })
            .from('.design svg', .8, { stagger: 0.15, x: 500, ease: Power3.easeOut }, "-=2")
            .from('.coding p', .8, { stagger: 0.15, scale: 0, ease: Power3.easeOut })
            .from('.design p', .8, { stagger: 0.15, scale: 0, ease: Power3.easeOut },"-=2")
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
        <Row className="row-skills">
            <Col lg={3} md={3} className="p-0">
                <span data-text="Skills" className="headLang">Skills</span>
                <span>SKILLS</span>
            </Col>
            <Col ref={el => app = el} lg={9} md={9} className="icons">
                <div>
                    <h4>Coding</h4>
                    <CardDeck className="coding">
                        {icons.coding.map(icon => (
                            <Card key={icon.name}>
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
                    <CardDeck className="design">
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
