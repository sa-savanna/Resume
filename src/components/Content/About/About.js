import React from 'react';
import { BsBootstrap } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaFigma, FaSass } from 'react-icons/fa';
import { DiLinux, DiGithubBadge, DiNodejsSmall, DiMongodb, DiJavascript1, DiNodejs, DiReact, DiVisualstudio } from 'react-icons/di';
import { ReactComponent as Postman } from './pm-gray-horiz.svg'
import TopBar from "./TopBar";
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import TableLang from './TableLang';
import Skills from './Skills';
import JumbotronComponent from "./Jumbotron"


const About = () => {
    let data = {
        title: [
            { name: "HTML", icon: <AiOutlineHtml5 /> },
            { name: "CSS/SASS", icon: <FaSass /> },
            { name: "JavaScript", icon: <DiJavascript1 /> },
            { name: "Bootstrap", icon: <BsBootstrap /> },
            { name: "MongoDB", icon: <DiMongodb /> },
            { name: "ExpressJS", icon: <DiNodejsSmall /> },
            { name: "ReactJS", icon: <DiReact /> },
            { name: "NodeJS", icon: <DiNodejs /> },

        ],
        frame: [
            { name: "Visual Studio", icon: <DiVisualstudio /> },
            { name: "Linux mint", icon: <DiLinux /> },
            { name: "GitHub", icon: <DiGithubBadge style={{ fontSize: '4em' }} /> },
            { name: "Postman", icon: <Postman /> },
            { name: "Figma", icon: <FaFigma /> }
        ],
        education: [
            {
                time: "Feb. 2020 - Sep. 2020",
                instituion: 'Intec Brussel, Brussels',
                title: 'Web-developer Certificate'
            },
            {
                time: "2001-2006",
                instituion: 'Metallurgical Academy of Ukraine, Dnipro',
                title: 'Bachelor of Engineering'
            }
        ],
        experience: [
            {
                time: 'Jul 2016 - Jun 2017',
                company: 'English Time,',
                sector: "Language center",
                position: 'Branch administrator',
                responsibilities: [
                    'Created, implemented and conducted a database of students\' and teachers\' personal files to automate the control for their progress, payments and schedule;',
                    'Managed advertisements and promotion pages in social networks;',
                    'Designed banners, booklets and advertisement;',
                    'Assisted in the cycle of the recruiting process.'
                ]
            },
            {
                time: 'Jul 2015 - Jun 2016',
                company: '  Agroline, ',
                sector: " Agriculture parts John Deere",
                position: 'Office administrator',
                responsibilities: []
            },
            {
                time: 'May 2011 - May 2015',
                company: ' Techno, ',
                sector: "Peat mining, science",
                position: 'Office manager',
                responsibilities: []
            },
            {
                time: 'Jul 2007 - Jan 2011',
                company: 'Simor,',
                sector: "Canned food production",
                position: 'Personal assistant, Logistic manager',
                responsibilities: []
            }
        ]
    }


    return (
        <>
            <div className="container2">
                <TopBar />
                <TableLang />

                <Skills data={data} />

                <div className="profile">
                    <div >
                        <Education data={data.education} />
                    </div>
                    <div>
                        <Experience data={data.experience} />
                    </div>
                </div>

                <JumbotronComponent data={data} />
            </div>
        </>
    )
}


export default About;