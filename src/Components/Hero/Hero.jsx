import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Together We Can Save lots of lives</h1>
        <p>We are dedicated to making a difference in the lives of the underprivileged through our comprehensive welfare programs and educational initiatives. Join us in our mission to create a better future for everyone.</p>
        <button className='btn'>Start with little<img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
