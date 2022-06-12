import React from 'react'
import CV from '../../assets/Brandon_Kowalecki_Resume_May_2022.pdf'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/bkowalecki/' target="_blank"> <BsLinkedin/> </a>
    <a href='https://github.com/bkowalecki' target="_blank"> <FaGithub/> </a>   
</div>
  )
}

export default CTA