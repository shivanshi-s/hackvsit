import React from 'react'

const LandingPage = () => {
  return (
    <div className='main'>
         <Navbar/>
         <div className='bodyStyle'>
              <LeftContainer className="leftContainer"/>
              <RightContainer className="rightContainer"/>
         </div>
         
    </div>
  )
}

export default LandingPage