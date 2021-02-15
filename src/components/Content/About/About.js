import React, { useState, useEffect } from 'react'
import TopBar from "./TopBar";
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import TableLang from './TableLang';
import Skills from './Skills';
import JumbotronComponent from "./Jumbotron"
import axios from "../../../axios"

import { BsBootstrap } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaFigma, FaSass } from 'react-icons/fa';
import { DiLinux, DiGithubBadge, DiNodejsSmall, DiMongodb, DiJavascript1, DiNodejs, DiReact, DiVisualstudio } from 'react-icons/di';
import { ReactComponent as Postman } from './pm-gray-horiz.svg'
import { ReactComponent as Firebase } from './firebase-icon.svg'
import { SiInkscape, SiAdobephotoshop, SiBlender, SiRedux } from 'react-icons/si';


const icons = {
    design: [
        { name: "Figma", icon: <FaFigma /> },
        { name: "Inkskape", icon: <SiInkscape /> },
        { name: "Blender", icon: <SiBlender /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> }
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
        { name: "Firebase", icon: <Firebase className="firebaseIcon" /> }
    ]
}



const About = () => {

    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get('/Data.json')
            .then(res => {
                // console.log(res.data);
                setData(res.data.About)
            })
            .catch(error => console.error(error))

    }, [])

    return (
        <>
            <div className="container2">
                <TopBar />
                <TableLang />

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
            </div>
        </>
    )
}


export default About;