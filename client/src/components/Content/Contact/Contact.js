
import React, { useState, Fragment } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { FaPhoneSquareAlt, FaEnvelopeSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

import '../../../App.css'
import Axios from 'axios';
import Header from '../Header';

const data = {
    header: "Contact Me",
    paragraph: " / Contact Me",
    name: "Home"
}

function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [disable, setDisabled] = useState(false)
    const [emailSend, setEmailSend] = useState(null)

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else if (e.target.id === 'subject') {
            setSubject(e.target.value)
        } else if (e.target.id === 'message') {
            setMessage(e.target.value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true)

        const dataToSubmit = {
            email,
            subject,
            message
        }

        Axios.post('/api/email', dataToSubmit)
            .then(res => {
                if (res.data.success) {
                    setDisabled(false)
                    setEmailSend(true)
                } else {
                    setDisabled(false)
                    setEmailSend(false)
                }
            })
            .catch(err => {
                console.log(err);
                setDisabled(false)
                setEmailSend(false)
            })

    }


    return (
        <Fragment>
            <div className="inner">
                <Header name={data.name} header={data.header} paragraph={data.paragraph} />
                <div className="wrapper">
                    <Row>
                        <Col md={6}>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group >
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <Form.Control
                                                className="input-contact"
                                                id="email"
                                                name="email"
                                                type="email"
                                                required="required"
                                                value={email}
                                                onChange={handleChange} />
                                        </Form.Group>

                                    </Col>

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label htmlFor="subject">Subject</Form.Label>
                                            <Form.Control
                                                className="input-contact"
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required="required"
                                                value={subject}
                                                onChange={handleChange} />
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label htmlFor="message">Message</Form.Label>
                                            <Form.Control
                                                className="textarea-contact"
                                                id="message"
                                                name="message"
                                                as="textarea"
                                                rows="3"
                                                required="required"
                                                value={message}
                                                onChange={handleChange} />
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>
                                        <Button
                                            className="d-inline-block btn btn-box"
                                            variant="warning"
                                            type="submit"
                                            disabled={disable}
                                        >
                                            Send
                                        </Button>

                                        {emailSend === true && <Alert className="mt-2" variant="success">Email Has Sent</Alert>}
                                        {emailSend === false && <Alert className="mt-2" variant="danger">Email Failed <br /> <small>Backend server requires modification </small></Alert>}
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                        <Col md={6} className="col-left" >
                            <h5>Belgium, Brussels</h5>
                            <div className="contact-info">
                                <a href="https://wa.me/32493339032?text=Hello%20Anna," target='blank' title="Via whatsapp"><FaPhoneSquareAlt /> +32 493 33 90 32</a>
                                <a href="mailto:savanna.be.ua@gmail.com" target='blank'><FaEnvelopeSquare /> savanna.be.ua@gmail.com</a>
                                <a href="https://www.linkedin.com/in/anna-savchenko" target='blank'><IoLogoLinkedin /> LinkedIn </a>
                            </div>
                        </Col>
                    </Row>
                </div >
            </div>
        </Fragment>
    )
}

export default Contact;