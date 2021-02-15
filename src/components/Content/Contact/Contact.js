import React, { useState, useEffect } from 'react'
import { Form, Col, Row, Button, Alert, Popover, OverlayTrigger } from 'react-bootstrap'
import { FaWhatsapp, FaAt, FaExternalLinkAlt } from 'react-icons/fa';
import { MdArrowDownward } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';
import Axios from 'axios';
import Header from '../Header';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "../../../axios"

function Contact() {
    const [inputs, setInputs] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get('/Data.json')
            .then(res => {
                // console.log(res.data);
                setData(res.data.Contact)
            })
            .catch(error => console.error(error))

    }, [])

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

    const popoverGsm = (
        <Popover id="popover-basic">
            <Popover.Content>
                <a href={`https://api.whatsapp.com/send/?phone=${data && data.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer" title="Via whatsapp">
                    {data && data.phone}</a>
            </Popover.Content>

        </Popover>
    );

    const popoverEmail = (
        <Popover id="popover-basic">
            <Popover.Content>
                <a href={`mailto:${data && data.email}`} target='blank' rel="noopener noreferrer">
                    {data && data.email}</a>
            </Popover.Content>
        </Popover>
    );


    return (
        <>
            <div className="inner">
                <Header header={data && data.header.title} paragraph={data && data.header.paragraph} name={data && data.header.name} />
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
                            <h5>{data && data.city}</h5>
                            <div className="contact-info">
                                <div>
                                    <a href={`https://api.whatsapp.com/send/?phone=${data && data.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer"
                                        title="Via whatsapp"><FaWhatsapp /> </a>
                                    <OverlayTrigger placement="right" overlay={popoverGsm} delay={{ show: 0, hide: 1000 }}>
                                        <span> GSM number</span>
                                    </OverlayTrigger>
                                </div>

                                <div>
                                    <a href={`mailto:${data && data.email}`} target='blank' rel="noopener noreferrer">
                                        <FaAt /> </a>
                                    <OverlayTrigger placement="right" overlay={popoverEmail} delay={{ show: 0, hide: 1000 }}>
                                        <span> E-mail</span>
                                    </OverlayTrigger>
                                </div>
                                <a href={data && data.linkdIn} target='blank' rel="noopener noreferrer">
                                    <IoLogoLinkedin /> LinkedIn <sup><FaExternalLinkAlt /></sup></a>

                            </div>
                        </Col>
                    </Row>
                </div >
            </div >
        </>
    )
}

export default Contact;