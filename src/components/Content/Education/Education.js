import React, { useState } from 'react'
import { Button } from 'react-bootstrap';


const Education = ({ data }) => {
    const [isVisible, setVisibility] = useState(null)

    function toggle() {
        setVisibility(!isVisible);
    }


    return (
        <>
            <Button variant="primary" block onClick={toggle}>Education</Button>
            {
                isVisible &&

                <ul>
                    {
                        data.map((list, i) => (
                            <li key={i}>
                                <div className="timelineInfo">
                                    <p>{list.time}</p>
                                </div>
                                <div className="timelineMarker"></div>
                                <div className="timelineContent">
                                    <h5 className="timelineTitle">{list.instituion}</h5>
                                    <p>{list.title}</p>
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