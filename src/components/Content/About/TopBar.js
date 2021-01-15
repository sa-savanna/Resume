import React from 'react'
import { Image } from 'react-bootstrap';
import ava from '../Ava.JPG';
import Header from '../Header';
import { FaExternalLinkAlt } from "react-icons/fa";

const TopBar = () => {

  const data = {
    header: "About Me",
    paragraph: " / About me",
    name: "Home"
  }


  return (
    <>
      <div className="topbar">
        <Header header={data.header} paragraph={data.paragraph} name={data.name} />
        <div className="aboutme">
          <p>
            Thanks to my passion for computers, non-stop learning attitude for applications
          and new technologies, I decided to continue developing my talents in the IT field. <hr />
          I'm a developer who's passionate about visualization, innovation, and overcoming failure.
          Whether it’s creating a more interactive and responsive application or refactoring the code,
          I am able to perform because of my drive for improvement and a non-give-up attitude. <hr />
            I am improving ReactJS skills, <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noopener noreferrer">MERN stack <sup><FaExternalLinkAlt /></sup> </a> . <br />
            - Currently I am learning Python. <br />
            - Interested in Data visualizing.
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