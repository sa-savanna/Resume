import React, { Fragment } from 'react';
import { Col, Image, Row, Card, CardDeck, Jumbotron } from 'react-bootstrap';
import { BsBootstrap } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaFigma } from 'react-icons/fa';
import { DiLinux, DiCss3, DiGithubBadge, DiNodejsSmall, DiMongodb, DiJavascript1, DiNodejs, DiReact, DiVisualstudio } from 'react-icons/di';
import { ReactComponent as Postman } from './pm-gray-horiz.svg'
import TopBar from "../TopBar";
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import TableLang from './TableLang';


const About = () => {

    return (
        <Fragment>
            <div className="container2">
                <TopBar />
                <TableLang />
                <Row className="row-skills">
                    <Col lg={3} md={3}>
                        <Image src="https://www.cecimo.eu/wp-content/uploads/2013/09/skills-1024x737.jpg" />
                        <span>SKILLS</span>
                    </Col>
                    <Col lg={9} md={9}>

                        <CardDeck>
                            <Card>
                                <AiOutlineHtml5 />
                                <Card.Body>
                                    <Card.Text>HTML</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <DiCss3 />
                                <Card.Body>
                                    <Card.Text>CSS</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <DiJavascript1 />
                                <Card.Body>
                                    <Card.Text>Java Script</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <BsBootstrap />
                                <Card.Body>
                                    <Card.Text>Bootstrap</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <DiMongodb />
                                <Card.Body>
                                    <Card.Text>MongoDB</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <DiNodejsSmall />
                                <Card.Body>
                                    <Card.Text>ExpressJS</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <DiReact />
                                <Card.Body>
                                    <Card.Text>ReactJS</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <DiNodejs />
                                <Card.Body>
                                    <Card.Text>NodeJS</Card.Text>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>

                </Row>


                <Jumbotron>
                    <Row className='d-flex flex-row'>
                        <Col lg={12}>
                            <p>I work with/on:</p>
                        </Col>
                        <Col lg={12}>
                            <ul>
                                <li><DiVisualstudio /><span>Visual Studio</span> </li>
                                <li><DiLinux /><span>Linux mint</span></li>
                                <li><DiGithubBadge style={{ fontSize: '4em' }} /><span>GitHub</span></li>
                                <li><Postman /><span>Postman</span></li>
                                <li><FaFigma /><span>Figma</span> </li>
                            </ul>
                        </Col>
                    </Row>
                </Jumbotron>

                <div className="file">
                    <div className="education">
                        <Education />
                    </div>
                    <div className="experience">
                        <Experience />
                    </div>
                </div>
            </div>
        </Fragment >
    )
}


export default About;