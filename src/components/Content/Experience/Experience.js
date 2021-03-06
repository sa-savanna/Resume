import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { gsap } from "gsap"

const Experience = ({ data }) => {
    const [isVisible, setVisibility] = useState(false)

    let tl = gsap.timeline()

    const toggle = () => {
        setVisibility(!isVisible);
    }

    useEffect(() => {
        tl.from(".exp1", .5, {
            scale: 0.5,
            opacity: 0,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

    }, [tl])

    return (
        <>
            <Button variant="primary" block onClick={toggle}> Experience</Button>

            {
                isVisible &&
                <ul>
                    {
                        data && data.sort((a, b) => b.id > a.id ? 1 : -1).map((list, i) => (
                            <li className='exp1' key={i}>
                                <div className="timelineMarker"></div>
                                <div className="timelineInfo">
                                    <p className="timelineTitle">{list.time}</p>
                                </div>
                                <div className="timelineContent">
                                    <h5>{list.position}</h5>
                                    <p className="timelineTitle">{list.sector} </p>

                                    {list.skills && list.skills.map(y => (
                                        <>
                                            <span><u>{y.name}</u></span>
                                            <ul>
                                                {y.responsibilities && y.responsibilities.map(z => (
                                                    <li>{z}</li>
                                                ))
                                                }
                                            </ul>
                                            <br />
                                        </>
                                    ))
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            }
        </ >
    )
}
export default Experience;
