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
import { FaSass } from 'react-icons/fa';
import { DiLinux, DiGithubBadge, DiNodejsSmall, DiMongodb, DiJavascript1, DiNodejs, DiReact, DiVisualstudio } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { SiInkscape, SiAdobephotoshop, SiRedux, SiMysql } from 'react-icons/si';

import { ReactComponent as Postman } from './postman.svg'
import { ReactComponent as Firebase } from './firebase-icon.svg'
import { ReactComponent as Draw } from './draw-io.svg'
import Loader from '../../Loader/Loader';


const icons = {
    design: [
        { name: "Figma", icon: <FiFigma /> },
        { name: "Inkskape", icon: <SiInkscape /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Draw.io diagrams", icon: <Draw /> },
    ],
    frames: [
        { name: "GitHub", icon: <DiGithubBadge style={{ fontSize: '4em' }} /> },
        { name: "Linux mint", icon: <DiLinux /> },
        { name: "Postman", icon: <Postman /> },
        { name: "Visual Studio", icon: <DiVisualstudio /> }
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
        { name: "Firebase", icon: <Firebase className="firebaseIcon" /> }
    ]
}


const About = () => {

    const { dataAbout, loading } = useContext(DataContext);
    const data = dataAbout

    return (
        <div className="container2">
            {loading ? <Loader /> :
                <>
                    <TopBar data={data && data.topbar} />
                    <TableLang data={data && data.languages} />

                    <Skills icons={icons} />

                    <div className="profile">
                        <div>
                            <Education data={data && data.Education} />
                        </div>
                        <div>
                            <Experience data={data && data.Experience} />
                        </div>
                    </div>

                    <JumbotronComponent icons={icons} />
                </>
            }
        </div>
    )
}


export default About;