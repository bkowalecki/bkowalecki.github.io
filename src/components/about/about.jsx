import React from 'react'
import './about.css'
import TELESCOPE from '../../assets/telescope.png'
import BASKETBALL from '../../assets/bball.png'
import MOTORCYCLE from '../../assets/motorcycle.png'
import UX from '../../assets/pyschology.png'
const about = () => {
  return (
    <div className='about-me'>
      
      <div className='about-me-title-container'>
        <h1 className='about-me-title'>About Me</h1>
      </div>

      <div className='about-me-container'>
        <div className='about-me-container-text'>
          <p className='about-me-text-main'>
            
            Problem Solver. Calculated Risk Taker. Jack of all trades and master of some. These are all answers I have given to
            the "Tell me about yourself" portion in interviews. I always found it challenging (as I'm sure many of you have) to find
            a few sentences that best describe your experiences, values, and everything else that makes you, you.
          </p>
          <p className='about-me-text-main'>I fortunately have found solace in my answer. Throughout life, I have had many interests and considered many career paths, but one 
            thing has remained constant: The desire to find a solution to any problem. From lifegaurding to software engineering and everything in between, my main goal
            was to solve a problem (while helping as many people as I could along the way)  
          </p>

        </div>
        <div className='about-me-img-container'>
            <img className='telescope-img img-icon' src={TELESCOPE}/>
            <img className='basketball-img img-icon' src={BASKETBALL}/>
            <img className='motorcycle-img img-icon' src={MOTORCYCLE}/>
            <img className='ux-img img-icon' src={UX}/>
        </div>
      </div>
    </div>
  )
}

export default about