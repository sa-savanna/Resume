
import React, { useState, Fragment } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { FaPhoneSquareAlt, FaEnvelopeSquare } from 'react-icons/fa';
import { MdArrowDownward } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import Axios from 'axios';
import Header from '../Header';
import ReCAPTCHA from "react-google-recaptcha";



const data = {
    header: "Contact Me",
    paragraph: " / Contact Me",
    name: "Home"
}

function Contact() {
    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleOnChange = event => {
        event.persist();
        setInputs(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    };


    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };


    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        Axios({
            method: "post",
            url: "https://formspree.io/xvownjqz",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Message has sent. Thank you!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    
};

function onChange(value) {
    console.log("Captcha value:", value);
    
}


return (
    <Fragment>
        <div className="inner">
            <Header name={data.name} header={data.header} paragraph={data.paragraph} />
            <div className="wrapper">
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleOnSubmit} id="contactform">
                            <Row>
                                <Col md={6}>
                                    <Form.Group >
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control
                                            className="input-contact"
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={handleOnChange}
                                            value={inputs.email}
                                            required="required"
                                        />
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
                                            onChange={handleOnChange}
                                            value={inputs.subject}
                                        />
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
                                            onChange={handleOnChange}
                                            value={inputs.message}
                                            required="required"
                                        />
                                    </Form.Group>

                                </Col>

                                <Col md={12}>
                                    <p>Please verify <MdArrowDownward /> </p>
                                    <ReCAPTCHA
                                        sitekey="6LegBsMZAAAAAD3CnoJq8ttc7PGrZm7OOF9VaEdS"
                                        onChange={onChange}
                                    />

                                    <Button
                                        className="d-inline-block btn btn-box"
                                        variant="warning"
                                        type="submit"
                                        disabled={serverState.submitting}
                                    >
                                        Send
                                        </Button>

                                    {serverState.status && (
                                        <Alert className="mt-2" variant="info">
                                            {serverState.status.msg}
                                        </Alert>
                                    )}


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