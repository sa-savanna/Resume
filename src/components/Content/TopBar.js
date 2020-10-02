import React, { Fragment } from 'react'
import css from './topBar.module.css'
import { Image } from 'react-bootstrap';
import ava from './Ava.JPG';
import Header from './Header';

const TopBar = () => {
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
      <div className={css.topbar}>
        <Header header={data.header} paragraph={data.paragraph} name={data.name} />
        <div className={css.aboutme}>
          <p>
            As a results-driven web-developer, I am improving ReactJS skills, <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noopener noreferrer">MERN stack</a> . <br />
            Currently learn animations, motions. <br />
            Interested in Data visualizing.
          </p>
          <p> At the same time, I am learning back-end to grow knowledge in all stages of development.
          </p>
          <p><strong>I am a developer for:</strong></p>
          <div className={css.countup}>
            <span className={`${css.timeel} year`}>{countYear()}</span>
            <span className={`${css.timeel} ${css.timeRef}`}>year<small>(s)</small> </span>
            <span className={`${css.timeel} month`}>{countMonth()}</span>
            <span className={`${css.timeel} ${css.timeRef}`}>month<small>(s)</small></span>
          </div>
        </div>
      </div>

      <div className={css.rectangle}> <Image className={css.photo} src={ava} /></div>
    </Fragment>
  )

}


export default TopBar;