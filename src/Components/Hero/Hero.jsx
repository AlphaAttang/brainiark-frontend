import React from 'react'
import './Hero.css'
import LogoSlider from '../LogoSlider/LogoSlider'

const Hero = () => {
  return (
    <div className='hero-container' >
      <div className="hero">
        <h1>Streamline with <span>Automated</span> Solutions.</h1>
        <p><b>Customer Service, Marketing, and Sales.</b></p>
        <p>Learn how you can automate business operations with software.</p>
        <button className='plain'>GET STARTED</button>
      </div>
      <LogoSlider />
      <p className='slider-text'>Integrates with top-tier companies</p>
    </div>
  )
}

export default Hero