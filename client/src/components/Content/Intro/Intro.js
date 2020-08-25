import React, { Fragment } from 'react'
import '../../../App.css'
import { Row, Col } from 'react-bootstrap';

const Intro = () => {


    return (
        <Fragment >
            <Row className="box-intro">
                <Col></Col>
                <Col lg={4} md={6} sm={7} style={{margin: 'auto'}}>
                    <div className="table-cell">
                        <div className="header-table">
                            <h1 className='box-headline one'>Hello
                            <div className="box bounce-6"></div>
                            </h1>

                            <h1 className='box-headline'>I am</h1>
                            <h1 className='box-headline'>anna</h1>
                            <p>savchenko</p>
                        </div>

                    </div>
                </Col>
                <Col lg={4} md={4} sm={3}>
                    <div className='sub-table'>
                        <h5>junior</h5>
                        <h5>web</h5>
                        <h5>developer</h5>
                    </div>
                </Col>
            </Row>

        </Fragment>
    )
}

export default Intro;