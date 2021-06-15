import React from 'react'
import './heroimage.scss'
import LeftImage from '../../images/mk_watch.jpg'
import mainImage from '../../images/header_hero.jpg'

function HeroImage() {
  return (
    <div className="hero-wrapper">
      <div className="hero-left">
        <img src={LeftImage} alt="Michael kors watch" />
      </div>
      <div className="hero-right">
        <div>
          <img src={mainImage} alt="men watch" />
        </div>
        <div className="hero-down">
          <div>
            <p className="hero-maintext">best watches you can find</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
