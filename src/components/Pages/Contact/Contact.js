import React, { useContext } from 'react'
import { DataContext } from "../../context/DataContext"
import { Col, Row } from 'react-bootstrap'
import Header from '../Header';
import Loader from '../../Loader/Loader';
import EmailSend from './EmailSend';
import { Gsm, Linkd, Mail } from './contactComponents';

function Contact() {
    const { dataContact, loading } = useContext(DataContext);

    const data = dataContact

    return (
        <>
            <div className="inner">
                <Header
                    header={data?.header.title}
                    paragraph={data?.header.paragraph}
                    name={data?.header.name} />
                <div className="wrapper">
                    <Row>
                        <Col md={6}>
                            <EmailSend />
                        </Col>
                        {loading ? <Loader /> :
                            <Col md={6} className="col-right" >
                                <h5>{data?.city}</h5>
                                <div className="contact-info">
                                    <Gsm data={data} />

                                    <Mail data={data} />

                                    <Linkd data={data} />

                                </div>
                            </Col>
                        }
                    </Row>
                </div >
            </div >
        </>
    )
}

export default Contact;