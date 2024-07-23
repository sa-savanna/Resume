import React from 'react'
import { Col, Row, Jumbotron } from 'react-bootstrap';

const JumbotronComponent = ({ icons }) => {
    return (
        <Jumbotron>
            <Row className='d-flex flex-row m-0'>
                <Col lg={12} className="p-0">
                    <p>I work with/on:</p>
                </Col>
                <Col lg={12} className="p-0">
                    <ul>
                        {icons.frames.map(y => (
                            <li key={y.name}>{y.icon}
                                <span>{y.name}</span>
                            </li>
                        ))} 
                    </ul>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default JumbotronComponent
