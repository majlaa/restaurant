import React from 'react'
import '../styles/About.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyCarousel from '../components/MyCarousel'

function About() {
  return (
    <div className='about'>
      <div className='carousel'>
      <MyCarousel/>
      </div>
      <div className='info'>
        <h1 className='title'>Enjoy our food experience</h1>
        <p>We don't just make food. We make people's experience. We believe that food should be special and we carry this belief in everything we do.</p>
        <div className="location">
            <i class="bi bi-geo-alt-fill"></i>
            <p1>LOCATION: <br/> Brooklyn, New York 70250</p1>
            <i class="bi bi-envelope-at-fill"></i>
            <p1>CONTACT US: <br/> fine.dining@outlook.com</p1>
            <i class="bi bi-clock-fill"></i>
            <p1>OPEN HOURS: <br/> Monday-Friday: 10 AM - 11 PM <br/> Saturday-Sunday: 10 AM - 12 AM</p1>
        </div>
      </div>
    </div>
  )
}

export default About
