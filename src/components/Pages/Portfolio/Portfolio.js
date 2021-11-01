import React, { useContext, useState } from 'react'
import { Image, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FaGithub, FaRegEye, FaNode, FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { DiJavascript1 } from 'react-icons/di';
import { SiAngularjs } from 'react-icons/si';

import Header from '../Header';
import { DataContext } from "../../context/DataContext"
import Loader from '../../Loader/Loader';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Portfolio = () => {

    const { dataPortfolio, loading } = useContext(DataContext);
    const data = dataPortfolio
    const [sorted, setSorted] = useState(data && data.cards)
    const [valueName] = useState()



    const dataIcons = [
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "Node", icon: <FaNode /> },
        { name: "React", icon: <FaReact /> },
        { name: "Angular", icon: <SiAngularjs /> },
        { name: "Figma", icon: <FiFigma /> }
    ]


    const findIcon = (frame) => {
        for (let idx in dataIcons) {
            if (dataIcons[idx].name === frame) {
                return dataIcons[idx].icon
            }
        }
    }

    const filterProject = (projectName) => {
        let updatedItems = []

        if (sorted) {
            updatedItems = data.cards.filter((elem) => {
                return elem.frame === projectName
            })
        } else {
            setSorted(data.cards)

        }
        setSorted(updatedItems)
    }

    return (
        <>
            <div className="inner">
                <Header
                    header={data && data.header.title}
                    paragraph={data && data.header.paragraph}
                    name={data && data.header.name} />

                {/* Title */}
                <div className="title">
                    <p>This site is made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React</a> library, without backend, using <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                            SASS </a> styling, <a href="https://greensock.com/" target="_blank" rel="noopener noreferrer">
                            GreenSock </a> animation and <a href="https://reactcommunity.org/react-transition-group/" target="_blank" rel="noopener noreferrer">
                            React Transition Group.</a>
                    </p>
                    <a href='https://github.com/sa-savanna/Resume' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                        <Button variant="warning" size="sm"><FaGithub />View code</Button>
                    </a>
                </div>


                {/* Filtering buttons */}
                <ToggleButtonGroup
                    className="filterButtons"
                    name='typeButton'
                    type='radio'
                    value={valueName}
                    defaultValue={['All']}
                >
                    <ToggleButton
                        value={"All"}
                        onClick={() => setSorted(data.cards)}>All

                    </ToggleButton>
                    {
                        dataIcons.map(({ name, icon }) => (
                            <ToggleButton
                                key={name}
                                value={name}
                                onClick={() => filterProject(name)}
                            >
                                {icon}<span>{name}</span>
                            </ToggleButton>
                        ))
                    }
                </ToggleButtonGroup>


                {/* Projects */}
                <TransitionGroup className="wrapperCards p-0">
                    {loading ? <Loader /> :
                        sorted && sorted.map(({ img, links, title, list, frame }) => (
                            <CSSTransition
                                key={title}
                                timeout={500}
                                classNames="fade">
                                <div className="card">
                                    <div className="frame">{findIcon(frame)}</div>
                                    <Image variant="top" src={require(`${img}`)} />
                                    <div className="info">
                                        <h5 className="mb-4">{title}</h5>
                                        <ul>
                                            {
                                                list.map((x, key) => (
                                                    <li key={key}>{x}</li>
                                                ))
                                            }
                                        </ul>
                                        <div>
                                            <a href={links.site} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Click to watch">
                                                <Button
                                                    className={links.site === '' && 'disabled'}
                                                    variant="warning"
                                                    size="lg"> <FaRegEye />
                                                </Button>
                                            </a>

                                            <a href={links.git} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                                                <Button
                                                    className={links.git === '' && 'disabled'}
                                                    variant="warning"
                                                    size="lg"><FaGithub />
                                                </Button>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))

                    }
                </TransitionGroup>
                {/* </div > */}
            </div >
        </>
    )

}

export default Portfolio;
