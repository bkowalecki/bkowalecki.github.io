import React, {useState} from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {

  return (
    <header className='header-section'>
      <div className="container header__container">
          <div className='header-one'>
            <h1 className='fade-in-1'>Hello</h1>
            <h1 className='fade-in-2'>I'm Brandon</h1>
            <h3 className='text-light fade-in-3'>Software Engineer</h3>
            <h5 className='fade-in-3'> Web | Data | Design</h5>
          </div>
          <div className='header-two'>
            {/* Purple hex code is #A99FE6 */}
            <img src={ME} alt='me' className='me-pic' />
            <HeaderSocials/>
          </div>

      </div>
    </header>

  )
}

export default Header