import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { gsap } from "gsap"

const Education = ({ data }) => {
    const [isVisible, setVisibility] = useState(false)
    

    let tl = gsap.timeline()

    function toggle() {
        setVisibility(!isVisible);
    }

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
            <Button variant="primary" block onClick={toggle}>Education</Button>
            {
                isVisible &&
                <ul>
                    {
                        data && data.map((list, i) => (
                            <li key={i} className="exp">
                                <div className="timelineInfo">
                                    <p>{list.time}</p>
                                </div>
                                <div className="timelineMarker"></div>
                                <div className="timelineContent">
                                    <h5>{list.instituion}</h5>
                                    <p>{list.title}
                                        <em> {list.subtitle} </em>
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

export default Education