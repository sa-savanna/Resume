import React, { memo, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { gsap } from "gsap"

const Education = ({ data }) => {
    const [isVisible, setVisibility] = useState(false)

    let tl = gsap.timeline()

    useEffect(() => {
        tl.from(".exp", .5, {
            scale: 0.5,
            opacity: 0,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

    }, [tl])

    return (
        <>
            <Button variant="primary" block onClick={() => setVisibility(!isVisible)}>Education</Button>
            {
                isVisible &&
                <ul>
                    {
                        data?.sort((a, b) => b.id > a.id ? 1 : -1).map(({ time, instituion, title, subtitle, id }) => (
                            <li key={id} className="exp">
                                <div className="timelineInfo">
                                    <p>{time}</p>
                                </div>
                                <div className="timelineMarker"></div>
                                <div className="timelineContent">
                                    <h5>{instituion}</h5>
                                    <p>{title}
                                        <em> {subtitle} </em>
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

export default memo(Education)