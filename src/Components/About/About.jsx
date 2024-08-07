import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT NGO</h3>
        <h2>We believe in the power of community and the importance of giving back.</h2>
        <p> <strong>Our Mission</strong> committed to fostering positive change in communities through targeted welfare programs, educational opportunities, and community support. Our mission is to uplift the underprivileged and provide them with the tools they need to lead a better life. </p>
        <p> <strong>Our Vision</strong> We envision a world where every individual has access to the resources they need to thrive. Through our dedicated team and comprehensive programs, we aim to create sustainable and lasting change. </p>
        <p> <strong>Our History</strong> Founded in 2016 , NGO has grown from a small grassroots organization to a prominent NGO making a significant impact. Over the years, we have reached thousands of individuals through our various initiatives and continue to expand our reach.

</p>
      </div>
    </div>
  )
}

export default About
