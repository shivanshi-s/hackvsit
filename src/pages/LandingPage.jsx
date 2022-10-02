import React from 'react'
import Navbar from "../components/Navbar"
import LeftContainer from "../components/LeftContainer"
import RightContainer from "../components/RightContainer"
import "./Pages.css";



const LandingPage = () => {
  return (
    <div className='Landingmain'>
      <Navbar />
      <div className='bodyStyle'>
        <LeftContainer className="leftContainer" />
        <RightContainer className="rightContainer" />
      </div>

    </div>
  )
}

export default LandingPage