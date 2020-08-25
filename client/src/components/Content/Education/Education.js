import React, { Fragment, useState } from 'react'
import edu from './edu.module.css'
import { Button } from 'react-bootstrap';


const Education = () => {
    const [isVisible, setVisibility] = useState(null)
    function toggle() {
        setVisibility(!isVisible);
    }
    return (
        <Fragment>
            <Button variant="primary" block className="mb-4" onClick={toggle}>Education</Button>
            {
                isVisible &&

                <ul className={edu.timeline}>
                    <li className={edu.timelineItem}>
                        <div className={edu.timelineInfo}>
                            <p>Feb. 2020 to Present</p>
                        </div>
                        <div className={edu.timelineMarker}></div>
                        <div className={edu.timelineContent}>
                            <h5 className={edu.timelineTitle}>Intec Brussel, Brussels</h5>
                            <p>Web-developer</p>
                        </div>
                    </li>
                    <li className={edu.timelineItem}>
                        <div className={edu.timelineInfo}>
                            <p>2001-2007</p>
                        </div>
                        <div className={edu.timelineMarker}></div>
                        <div className={edu.timelineContent}>
                            <h5 className={edu.timelineTitle}>Metallurgical Academy of Ukraine, Dnipro</h5>
                            <p>Master of Engineering. <br /> <em>Engineer of power and energy.</em> </p>

                        </div>
                    </li>
                </ul>
            }
        </Fragment>
    )
}

export default Education