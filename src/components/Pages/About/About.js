import React, { useContext } from 'react'
import TopBar from "./TopBar";
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import TableLang from './TableLang';
import Skills from './Skills';
import JumbotronComponent from "./Jumbotron"
import { DataContext } from "../../context/DataContext"

import { BsBootstrap } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaSass, FaProjectDiagram, FaMicrosoft } from 'react-icons/fa';
import {
    DiLinux, DiGithubBadge, DiNodejsSmall, DiMongodb, DiJavascript1,
    DiNodejs, DiReact, DiVisualstudio
} from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { SiInkscape, SiAdobephotoshop, SiRedux, SiFirebase, SiPostman, SiMysql } from 'react-icons/si';

import Loader from '../../Loader/Loader';


const list = {
    design: [
        { name: "Figma", icon: <FiFigma /> },
        { name: "Inkscape", icon: <SiInkscape /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Draw.io diagrams", icon: <FaProjectDiagram /> },
    ],
    frames: [
        { name: "GitHub", icon: <DiGithubBadge /> },
        { name: "Linux mint", icon: <DiLinux /> },
        { name: "Microsoft", icon: <FaMicrosoft /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Visual Studio", icon: <DiVisualstudio /> },
    ],
    coding: [
        { name: "HTML", icon: <AiOutlineHtml5 /> },
        { name: "CSS/SASS", icon: <FaSass /> },
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "Bootstrap", icon: <BsBootstrap /> },
        { name: "ExpressJS", icon: <DiNodejsSmall /> },
        { name: "ReactJS", icon: <DiReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "NodeJS", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> }
    ]
}

const About = () => {

    const { dataAbout, loading, imageUrl } = useContext(DataContext);
    const data = dataAbout


    return (
        <div className="container-about">
            {loading ? <Loader /> :
                <>
                    <TopBar data={data?.topbar} img={imageUrl && imageUrl} />
                    <TableLang data={data?.languages} />

                    <Skills icons={list} />

                    <div className="history">
                        <div>
                            <Education data={data?.Education} />
                        </div>
                        <div>
                            <Experience data={data?.Experience} />
                        </div>
                    </div>

                    <JumbotronComponent icons={list} />

                </>
            }
        </div>
    )
}


export default About;