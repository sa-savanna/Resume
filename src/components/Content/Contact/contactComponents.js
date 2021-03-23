import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import { FaWhatsapp, FaAt, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';


export const Gsm = ({data}) => {
    const popoverGsm = (
        <Popover id="popover-basic">
            <Popover.Content>
                {
                    <a href={`https://api.whatsapp.com/send/?phone=${data.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer" title="Via whatsapp">
                        {data.phone}</a>
                }
            </Popover.Content>

        </Popover>
    );
    return (
        <div>
            <a href={`https://api.whatsapp.com/send/?phone=${data.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer"
                title="Via whatsapp"><FaWhatsapp /> </a>
            <OverlayTrigger placement="right" overlay={popoverGsm} delay={{ show: 0, hide: 1000 }}>
                <span> GSM number</span>
            </OverlayTrigger>
        </div>
    )
}

export const Mail = ({data}) => {
    const popoverEmail = (
        <Popover id="popover-basic">
            <Popover.Content>
                {
                    <a href={`mailto:${data.email}`} target='blank' rel="noopener noreferrer">
                        {data.email}</a>
                }
            </Popover.Content>
        </Popover>
    );
    return (
        <div>
            <a href={`mailto:${data.email}`} target='blank' rel="noopener noreferrer">
                <FaAt /> </a>
            <OverlayTrigger placement="right" overlay={popoverEmail} delay={{ show: 0, hide: 1000 }}>
                <span> E-mail</span>
            </OverlayTrigger>
        </div>
    )
}

export const Linkd = ({data}) => {
    return (
        <a href={data.linkdIn} target='blank' rel="noopener noreferrer">
            <IoLogoLinkedin /> LinkedIn <sup><FaExternalLinkAlt /></sup>
        </a>
    )
}