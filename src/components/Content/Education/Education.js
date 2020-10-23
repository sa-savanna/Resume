import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap';


const Education = () => {
    const [isVisible, setVisibility] = useState(null)

    function toggle() {
        setVisibility(!isVisible);
    }


    return (
        <Fragment>
            <Button variant="primary" block onClick={toggle}>Education</Button>
            {
                isVisible &&

                <ul>
                    <li>
                        <div className="timelineInfo">
                            <p>Feb. 2020 to Present</p>
                        </div>
                        <div className="timelineMarker"></div>
                        <div className="timelineContent">
                            <h5 className="timelineTitle">Intec Brussel, Brussels</h5>
                            <p>Web-developer certification</p>
                        </div>
                    </li>
                    <li>
                        <div className="timelineInfo">
                            <p>2001-2006</p>
                        </div>
                        <div className="timelineMarker"></div>
                        <div className="timelineContent">
                            <h5 className="timelineTitle">Metallurgical Academy of Ukraine, Dnipro</h5>
                            <p>Bachelor of Engineering. <br /> </p>

                        </div>
                    </li>
                </ul>
            }
        </Fragment>
    )
}

export default Education