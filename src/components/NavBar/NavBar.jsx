import React from 'react'
import './NavBar.css'
import NavBtn from '../NavBar/NavBtn.jsx'


const NavBar = () => {
  return (
    <div className='nav-bar'>
        <div className='nav-bar-logo'>Bk.</div>
        <NavBtn name="Experience" />
        <NavBtn name="About Me" />
        <NavBtn name= "Let's Talk"/>
    </div>
  )
}

export default NavBar