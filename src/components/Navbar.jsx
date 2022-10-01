import React from 'react'
import '../components/Components.css'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='navbar'>
         <a className='redirect' href="#login" style={{color:"white", textDecoration:"none"}}>Login</a>
         <Button className='redirect' />
    </div>
  )
}

export default Navbar