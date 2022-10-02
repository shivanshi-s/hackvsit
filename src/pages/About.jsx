import React from 'react'
import './Pages.css'
import Health from '../img/health.svg';
import Chat from '../img/diversity.svg';

const About = () => {
  return (
    <div className='aboutMain'>
      <h1>WHAT IT'S ALL ABOUT</h1>
      <div className='upperContainer'>
        <p>There are over 26.8 million people with disabilities in India and the number grows every
          year. <br /> It becomes really important to build an environment which provides a safe and a
          free space to accommodate their needs and create a welcoming environment.</p>
        <img className='upperImg' src={Health} alt="healthcare" />
      </div>

      <div className='lowerContainer'>
        <img className='upperImg' src={Chat} alt='chat' />
        <p>Our team - BIT BLEND built this solution at HackVSIT 4.0 to provide a community to help specially abled people and make spaces more accesbile and inclusive!</p>

      </div>
    </div>
  )
}

export default About;