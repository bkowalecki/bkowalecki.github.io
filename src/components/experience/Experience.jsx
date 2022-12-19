import React, {Component} from 'react'
import {render} from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './experience.css'
import HERL from '../../assets/herl.png'
import PITT from '../../assets/pitt.jpg'
import PITT2 from '../../assets/pitt2.png'
import RESPONSIVAL from '../../assets/responsival.jpeg'
import WHOLEYS from '../../assets/wholeys.jpg'
import AWS from '../../assets/aws3_b.png'
import GOOGLE from '../../assets/google_b.png'
import PITTLOGO from '../../assets/pittLogo_b.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "~react-image-gallery/styles/css/image-gallery.css"
import Marquee from "react-fast-marquee";

const Experience = () => {

  const courses = ['Intermediate Java', 'Discrete Structures', 'Data Structures', 'Assembly Language', 
                  'System Software', 'Algorithm Implementation', 'Programming Languages for Web Applications',
                   'AI Ethics', 'Theory of Computation', 'Operating Systems', 'Software Quality Assurance', 'Data Science',
                  'Software Engineering'];

  
  return (
    <div className='experience-section'>
      
      <div className='experience-title-container'>
        <h1 className='experience-title'>Experience</h1>
      </div>
    
        <h2 className='section-subheader-white'>Employment / Internships</h2>
         
          <div className='employment-container'>

            <div className='employment-card herl'>
              Human Engineering Research Laboratories
            </div>

            <div className='employment-card responsival'>
              Responsival
            </div>

            <div className='employment-card wholeys'>
            Wholey's
            </div>

          </div>

        <h2 className='section-subheader-white'>Education / Coursework</h2>
          
          

          <div className='ed-subsection'>

    <div className='pitt-img-container ed-card'>
      <img className='pitt-img' src={PITTLOGO}/>
      <div className='pitt-hover'>
        <div className='degree-container'>
          <div className='degree-text'>
            B.S Computer Science
          </div> 
          <div className='degree-text'>
            2022
          </div>
        </div>

        {/* <div className='marquee-container-1'>
          <Marquee
          play={true}
          gradientWidth={500}
          >
          {courses.map((course, index) => {
            return(
              <div key={index} className='course-marquee-container'>{course}</div>
            )
          })}
          </Marquee>
        </div> */}
      </div>
    </div>

    
        <div className="aws-img-container ed-card"> 
              <img className='aws-img' src={AWS}/>

              <div className='google-hover'>
        <div className='coming-soon-container'>
          <div className='coming-soon-text'>
            Coming Soon
          </div> 
        </div>
      </div>
            </div>
    
    
    <div className="google-img-container ed-card"> 
      <img className='google-img' src={GOOGLE}/>
      
      <div className='google-hover'>
        <div className='coming-soon-container'>
          <div className='coming-soon-text'>
            Coming Soon
          </div> 
        </div>
      </div>


    </div>


        


            

            

          

          </div>

    </div>

  )
}



export default Experience