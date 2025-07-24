import React, { useState, createRef } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import ReCAPTCHA from "react-google-recaptcha";
import { MdArrowDownward } from 'react-icons/md';
import Axios from 'axios';

const EmailSend = () => {
    const recaptcha = createRef()

    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = event => {
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
            url: "https://formspree.io/f/xdkognye",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Message has sent. Thank you!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });



    };

    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
    }


    return (
        <Form onSubmit={handleOnSubmit} id="contactform">
            <Row className='mr-0'>
                <Col md={6}>
                    <Form.Group >
                        <Form.Label htmlFor="email">Your Email</Form.Label>
                        <Form.Control
                            className="input-contact"
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleInputChange}
                            value={inputs.email}
                            required="required"
                            autoComplete='email'
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            value={inputs.message}
                            required="required"
                        />
                    </Form.Group>

                </Col>

                <Col md={12}>
                        <>
                            <p>Please verify <MdArrowDownward /> </p>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={onCaptchaChange}
                            />
                        </>

                    <Button
                        className="d-inline-block btn btn-box"
                        variant="warning"
                        type="submit"
                        disabled={serverState.submitting}
                        ref={recaptcha}
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
    )
}

export default EmailSend
