import React, {memo,  useState } from 'react'
import { Image } from 'react-bootstrap';
// import ava from '../Ava.JPG';
import Header from '../Header';

const TopBar = ({ data, img }) => {


  const [paragraphs] = useState([data?.description])

  let pagraphMe = ''
  let paragraphPrev = ''
  let pagraphSoft = ''
  let paragrapgShift = ''

  if (paragraphs) {
    pagraphMe = paragraphs.map((par, key) => <p key={key}>{par.me}</p>)
    paragraphPrev = paragraphs.map((par, key) => <p key={key}>{par.prev}</p>)
    pagraphSoft = paragraphs.map((par, key) => <p key={key}>{par.soft}< br />{par.thus}</p>)
    paragrapgShift = paragraphs.map((par, key) => <p key={key}>{par.shift}< br />{par.now}</p>)

  }

  return (
    <>
      <div className="topbar">
        <Header
          header={data?.header.title}
          paragraph={data?.header.paragraph}
          name={data?.header.name}
        />

        <div className="aboutme">
          {pagraphMe}
          {paragraphPrev}
          {pagraphSoft}
          <hr />
          {paragrapgShift}
        </div>
      </div >

      <div className="rectangle">
        {img &&
          <Image className="photo" src={img} />
        }
      </div>
    </>
  )

}


export default memo (TopBar);