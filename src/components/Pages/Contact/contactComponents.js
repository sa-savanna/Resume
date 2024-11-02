import React from 'react'
import { FaWhatsapp, FaAt, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';


export const Gsm = ({ data }) => {

    return (
        <div>
            <a href={`https://api.whatsapp.com/send/?phone=${data?.phone}&text=Hello+Anna%2C&app_absent=0`} target='blank' rel="noopener noreferrer"
                title="Via whatsapp"><FaWhatsapp /> <span> Whatsapp me</span> </a>
        </div>
    )
};

export const Mail = ({ data }) => {
    return (
        <div>
            <a href={`mailto:${data?.email}`} target='blank' rel="noopener noreferrer">
                <FaAt /> <span> E-mail me</span> </a>
        </div>
    )
};

export const Linkd = ({ data }) => {
    return (
        <a href={data.linkdIn} target='blank' rel="noopener noreferrer">
            <IoLogoLinkedin /> My LinkedIn <sup><FaExternalLinkAlt /></sup>
        </a>
    )
};