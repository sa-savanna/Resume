import React, {useRef, useEffect} from 'react'
import { Col, Row, Card, CardDeck } from 'react-bootstrap';
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Skills = ({ data }) => {

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
        <Row className="row-skills pl-0">
            <Col lg={3} md={3} className="p-0">
                <span data-text="Skills" className="headLang">Skills</span>
                <span>SKILLS</span>
            </Col>
            <Col lg={9} md={9} className="px-0">

                <CardDeck ref={el => app = el} >
                    {data.title.map(i => (
                        <Card key={i.name}>
                            {i.icon}
                            <Card.Body>
                                <Card.Text>{i.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </Col>

        </Row>
    )
}

export default Skills
