import React, { useContext, useState } from 'react'
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FaRegEye, FaNode, FaReact, FaGithub } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { DiJavascript1 } from 'react-icons/di';
import { SiAngularjs } from 'react-icons/si';

import Header from '../Header';
import { DataContext } from "../../context/DataContext"
import Loader from '../../Loader/Loader';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Title from './Title';
import GetImagesFirebase from './GetImagesFirebase';


const Portfolio = () => {

    const { dataPortfolio, loading, portfolioImagesUrl } = useContext(DataContext);
    const data = dataPortfolio
    const [sorted, setSorted] = useState(data?.cards)
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
                    header={data?.header.title}
                    paragraph={data?.header.paragraph}
                    name={data?.header.name} />

                {/* Title */}
                <Title data={data} />

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

                {/* Cards */}

                <TransitionGroup className="wrapperCards p-0">
                {/* <GetImagesFirebase />  */}
                    {loading ? <Loader /> :
                        sorted && sorted.map(({ links, title, list, frame, name }) => (
                            <CSSTransition
                                key={title}
                                timeout={500}
                                classNames="fade">
                                <div className="card">
                                    <div className="frame">{findIcon(frame)}</div>
                                    <GetImagesFirebase portfolioImagesUrl={portfolioImagesUrl} imageName={name} /> 
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
                                </div >
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup >
            </div >
        </>
    )

}

export default Portfolio;
