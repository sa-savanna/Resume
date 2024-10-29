import React, { useState, useEffect, memo } from 'react'
import { Button } from 'react-bootstrap';
import { gsap } from "gsap"

const Experience = ({ data }) => {
    const [isVisible, setVisibility] = useState(false)

    let tl = gsap.timeline()

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
            <Button variant="primary" block onClick={() => setVisibility(!isVisible)}>Experience</Button>

            {
                isVisible &&
                <ul>
                    {
                        data?.sort((a, b) => b.id > a.id ? 1 : -1).map(
                            ({ id, position, responsibilities, sector, time, location }) => (
                                <li className='exp1' key={id}>
                                    <div className="timelineMarker"></div>
                                    <div className="timelineInfo">
                                        <p>{time}
                                            <span>{location}</span>
                                        </p>
                                    </div>

                                    <div className="timelineContent">
                                        <h5>{position}</h5>

                                        <p className="timelineTitle">{sector} </p>
                                        <ul>
                                            {responsibilities?.map((item, key) => (
                                                <li key={key}>{item}</li>
                                            ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            ))
                    }
                </ul>
            }
        </ >
    )
}
export default memo(Experience);
