import React from 'react'
import { Image } from 'react-bootstrap';
import ava from '../Ava.JPG';
import Header from '../Header';
import { FaExternalLinkAlt } from "react-icons/fa";

const TopBar = ({ data }) => {

  return (
    <>
      <div className="topbar">
        <Header
          header={data && data.header.title}
          paragraph={data && data.header.paragraph}
          name={data && data.header.name} />

        <div className="aboutme">
          <p>
            Thanks to my passion for computers, non-stop learning attitude for applications
          and new technologies, I decided to continue developing my talents in the IT field. <hr />

            I am improving ReactJS skills, <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noopener noreferrer">MERN stack
            <sup><FaExternalLinkAlt /></sup>  </a> . <br />
            - Currently I am learning <b> Python</b>. <br />
            - Interested in Data visualizing and 2D/3D design.
          </p>
          <p> At the same time, I am learning back-end to grow knowledge in all stages of development.
          </p>
        </div>
      </div>

      <div className="rectangle">
        <Image className="photo" src={ava} />
      </div>
    </>
  )

}


export default TopBar;