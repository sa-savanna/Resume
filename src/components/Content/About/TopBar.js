import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap';
import ava from '../Ava.JPG';
import Header from '../Header';
import { FaExternalLinkAlt } from "react-icons/fa";

const TopBar = () => {
  //to count time of experience we can use npm MOMENT but I wanted to use vanilla JS (not a big deal but I'm learning)
  function countYear() {
    var currentYear = new Date().getFullYear();
    return currentYear - new Date('2020, 01, 04').getFullYear();
  }

  function countMonth() {
    var currentDate = new Date();
    var startDate = new Date('2020, 02, 04')
    return currentDate.getMonth() - startDate.getMonth() +
      (12 * (currentDate.getFullYear() - startDate.getFullYear()))

  }
  const data = {
    header: "About Me",
    paragraph: " / About me",
    name: "Home"
  }


  return (
    <Fragment>
      <div className="topbar">
        <Header header={data.header} paragraph={data.paragraph} name={data.name} />
        <div className="aboutme">
          <p>
          Thanks to my passion for computers, non-stop learning attitude for applications 
          and new technologies, I decided to continue developing my talents in the IT field. <hr/>
          I'm a developer who's passionate about visualization, innovation, and overcoming failure. 
          Whether it’s creating a more interactive and responsive application or refactoring the code, 
          I am able to perform because of my drive for improvement and a non-give-up attitude. <hr />
            I am improving ReactJS skills, <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noopener noreferrer">MERN stack <sup><FaExternalLinkAlt /></sup> </a> . <br />
            - Currently learn animations, motions. <br />
            - Interested in Data visualizing.
          </p>
          <p> At the same time, I am learning back-end to grow knowledge in all stages of development.
          </p>
          <p><strong>I am a developer for:</strong></p>
          <div className="countup">
            <span className="timeel year">{countYear()}</span>
            <span className="timeel timeRef">year<small>(s)</small> </span>
            <span className="timeel month">{countMonth()}</span>
            <span className="timeel timeRef">month<small>(s)</small></span>
          </div>
        </div>
      </div>

      <div className="rectangle">
        <Image className="photo" src={ava} />
      </div>
    </Fragment>
  )

}


export default TopBar;