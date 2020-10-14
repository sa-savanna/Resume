import React, { Fragment } from 'react'
import { Image, Button } from 'react-bootstrap';
import icecream from './iceCream.png'
import bookfinder from './BookFinder.png'
import { FaGithub, FaRegEye } from 'react-icons/fa';
import Header from '../Header';
import weather from './weather.png'


const Portfolio = () => {
    const data = {
        header: "Portfolio",
        paragraph: " / Portfolio",
        name: "Home"
    }
    return (
        <Fragment>
            <div className="inner">

                <Header header={data.header} paragraph={data.paragraph} name={data.name} />
                <div className="wrapper p-0">
                    <div className="card">
                        <Image variant="top" src={bookfinder} />
                        <div className="info">
                            <h5>Exersice for:</h5>
                            <ul>
                                <li>REST API</li>
                                <li>Styling</li>
                            </ul>
                            <a href="https://sa-savanna.github.io/BookFinder/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Click to watch">
                                <Button variant="warning" size="lg"> <FaRegEye /></Button>
                            </a>

                            <a href="https://github.com/sa-savanna/BookFinder" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                                <Button variant="warning" size="lg"><FaGithub /></Button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <Image variant="top" src={weather} />
                        <div className="info">
                            <h5>Exersice for:</h5>
                            <ul>
                                <li>REST API</li>
                                <li>JavaScript</li>
                            </ul>
                            <a href="https://sa-savanna.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Click to watch">
                                <Button variant="warning" size="lg"> <FaRegEye /></Button>
                            </a>

                            <a href="https://github.com/sa-savanna/WeatherApp" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                                <Button variant="warning" size="lg"><FaGithub /></Button>
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <Image variant="top" src={icecream} />
                        <div className="info">
                            <h5>Exersice for:</h5>
                            <ul>
                                <li>NodeJS Routing</li>
                                <li>Registration form</li>
                                <li>Connect to MongoDB</li>
                            </ul>

                            <a href="https://icecream-node-routing.herokuapp.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Click to watch">
                                <Button variant="warning" size="lg"><FaRegEye />
                                </Button>
                            </a>
                            <a href="https://github.com/sa-savanna/Node-routing" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                                <Button variant="warning" size="lg">
                                    <FaGithub />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div >
            </div>
        </Fragment >
    )

}

export default Portfolio;