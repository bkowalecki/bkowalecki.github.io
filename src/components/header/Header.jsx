import React, {useState} from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
// import Toggle from './Toggle'
import NavBtn from './NavBtn.jsx'


const Header = () => {

  return (
    <header>
      <div className='nav-bar'>
        <span className='nav-bar-logo'>Bk.</span>
        <NavBtn name="About Me"/>
        <NavBtn name="Experience"/>
        <NavBtn name= "Let's Talk"/>
      </div>

      <div className="container header__container">
          <div className='header-one'>
            <h2 className='fade-in-1'>Hello</h2>
            <h1 className='fade-in-2'>I'm Brandon</h1>
            <h3 className='text-light fade-in-3'>Software Engineer</h3>
            <h5 className='fade-in-3'> Full Stack | Data Science | Machine Learning</h5>
          </div>
          <div className='header-two'>
            {/* Purple hex code is #A99FE6 */}
            <img src={ME} alt='me' />
            <HeaderSocials/>
          </div>

      </div>
    </header>

  )
}

export default Header