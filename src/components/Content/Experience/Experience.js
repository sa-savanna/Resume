import React, { Fragment, useState } from 'react'
import edu from '../Education/edu.module.css'
import { Button } from 'react-bootstrap';

const Experience = () => {
    const [isVisible, setVisibility] = useState(null)


    function toggle() {
        setVisibility(!isVisible);
    }

    return (
        <Fragment>
            <Button variant="primary" block className="mb-4" onClick={toggle}> Experience</Button>
            {
                isVisible &&

                < ul className={edu.timeline} style={{ height: '100%' }}>
                    <li className={edu.timelineItem}>
                        <div className={edu.timelineInfo}>
                            <p>2016 - 2017 | Ukraine</p>
                        </div>
                        <div className={edu.timelineMarker}></div>
                        <div className={edu.timelineContent}>
                            <h5 className={edu.timelineTitle}>English Time,  <small>Language center</small> </h5>
                            <p>Branch administrator</p>
                            <ul>
                                <li>Created, implemented and conducted a database of students' and teachers' personal files to automate the control for their progress, payments and schedule;</li>
                                <li>Managed advertisements and promotion pages in social networks;</li>
                                <li>Designed banners, booklets and advertisement;</li>
                                <li>Assisted in the cycle of the recruiting process.</li>
                            </ul>
                        </div>
                    </li>
                    <li className={edu.timelineItem}>
                        <div className={edu.timelineInfo}>
                            <p>2004-2016 | Ukraine</p>
                        </div>
                        <div className={edu.timelineMarker}></div>
                        <div className={edu.timelineContent}>
                            <h5 className={edu.timelineTitle}>
                                Agroline, <small> agriculture parts</small> <br />
                            Techno, <small>peat mining</small><br />
                            Simor, <small> canned food production</small> <br />
                            Business and  Security, <small> Security services</small></h5>
                            <p>Personal assistant, Office-manager, Logistic Manager</p>
                            <ul style={{ fontSize: '16px' }}>
                                <li>Filled the company's website with content;</li>
                                <li>Provided commercial offers;</li>
                                <li>Scheduled meetings and agendas;</li>
                                <li>Took the initiative to install, update and maintain software in order to fix networking errors and the smooth running operations;</li>
                                <li>Collaborated with the HR department for the preparation of documentation;</li>
                                <li>Prepeared materials to expositions and presentations.</li>
                            </ul>

                        </div>
                    </li>
                </ul>

            }
            <div></div>
        </Fragment >
    )
}
export default Experience;