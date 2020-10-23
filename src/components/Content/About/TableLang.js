import React from 'react'
import { Fragment } from 'react';
import { ProgressBar } from 'react-bootstrap';


const TableLang = () => {
    return (
        <Fragment>
            <div className="bodyLang">
                <div>
                    <span className="headLang">Languages</span>
                    <div className="tableLang">
                        <p>English</p>
                        <span>
                            <ProgressBar now={70} label="B2" />
                        </span>
                        <p>French</p>
                        <span>
                            <ProgressBar now={50} label="B1" />
                        </span>
                        <p>Dutch</p>
                        <span>
                            <ProgressBar animated now={30} label="2.2" />
                        </span>
                        <p>Russian</p>
                        <span>
                            <ProgressBar now={100} label="Native" />
                        </span>
                        <p>Ukranian</p>
                        <span>
                            <ProgressBar now={100} label="Native" />
                        </span>
                    </div>

                </div>
                <div>
                    <span className="headLang">Info</span>
                    <div className="tableLang">
                        <p> Work permit</p>
                        <span>unlimited</span>
                        <p> Card residence</p>
                        <span>till Feb. 2023</span>
                        <p> Driver licence</p>
                        <span>category B</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TableLang
