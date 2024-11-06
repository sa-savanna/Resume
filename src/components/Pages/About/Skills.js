import React, { useRef, useEffect, memo } from 'react'
import { Col, Row, Card, CardDeck } from 'react-bootstrap';
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Skills = ({ icons }) => {
    let skill = useRef(null)
    let tl = gsap.timeline()

    //Animation
    useEffect(() => {
        tl.from('.card svg', 1, { stagger: 0.15, y: 30, opacity: 0, duration: .1, ease: Power3.easeIn })
            .from('.card p', .8, { stagger: 0.15, scale: 0, ease: Power3.easeIn }, "-=2")
        gsap.to(skill, 0, { css: { opacity: 1 } })

        ScrollTrigger.create({
            animation: tl,
            trigger: skill,
            // markers: true,
            start: 'top 80%',
            toggleActions: "restart none none restart"
        })

    }, [tl])


    let iconsCoding = []
    let iconsDesign = []
    
    if (icons){
        iconsCoding = icons.coding.map(({name, icon}) => (
            <Card key={name} >
                {icon}
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                </Card.Body>
            </Card>
        ))
        iconsDesign = icons.design.map(({name, icon}) => (
            <Card key={name}>
                {icon}
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                </Card.Body>
            </Card>
        ))
    }


    return (
        <Row className="row-skills">
            <Col lg={3} md={3} className="p-0">
                <span data-text="Skills" className="headLang">Skills</span>
                <span className='headHided'>SKILLS</span>
            </Col>
            <Col lg={9} md={9} className="icons" >
                <div>
                    <h4>Development</h4>
                    <CardDeck className="coding" ref={el => skill = el}>
                        {iconsCoding}
                    </CardDeck>
                </div>
                <div>
                    <h4>Design</h4>
                    <CardDeck className="design" >
                        {iconsDesign}
                    </CardDeck>
                </div>

            </Col>

        </Row>
    )
}

export default memo(Skills)
