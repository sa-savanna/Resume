import React from 'react'
import { Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Title = ({data}) => {
    return (
        <div className="title">
            {data && 
            <p>{data.title.par1}</p>
            }
            <a href='https://github.com/sa-savanna/Resume' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                <Button variant="warning" size="sm"><FaGithub />View code</Button>
            </a>
        </div>
    )
}

export default Title