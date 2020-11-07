import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap';

const Experience = ({ data }) => {
    const [isVisible, setVisibility] = useState(null)


    function toggle() {
        setVisibility(!isVisible);
    }

    return (
        <Fragment>
            <Button variant="primary" block onClick={toggle}> Experience</Button>
            {
                isVisible &&

                < ul style={{ height: '100%' }}>
                    {
                        data.map((list, i) => (
                            <li key={i}>
                                <div className="timelineMarker"></div>
                                <div className="timelineInfo">
                                    <p>{list.time}</p>
                                </div>
                                <div className="timelineContent">
                                    <h5 className="timelineTitle">{list.company} <small>{list.sector}</small> </h5>
                                    <p>{list.position}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            }
            <div></div>
        </Fragment >
    )
}
export default Experience;