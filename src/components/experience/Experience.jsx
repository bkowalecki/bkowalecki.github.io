import React, {Component} from 'react'
import {render} from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './experience.css'
import HERL from '../../assets/herl.jpg'
import PITT from '../../assets/pitt.jpg'
import PITT2 from '../../assets/pitt2.png'
import RESPONSIVAL from '../../assets/responsival.jpeg'
import WHOLEYS from '../../assets/wholeys.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "~react-image-gallery/styles/css/image-gallery.css"


const Experience = () => {

  const courses = ['data stru hvcure', 'intro to'];

  return (
      <div className='experience-section'>
        <h1 className='section-header-white'> Experience</h1>
          <h2 className='section-subheader-white'>Employment / Internships</h2>
            <Carousel className='carousel'
              width="50%"
              dynamicHeight="false"
              autoPlay="true"
              infiniteLoop="true"
              >
              <div className='slide'>
                <img src={HERL}></img>
              </div>
              <div className='slide'>
                <img src={RESPONSIVAL}></img>
              </div>
              <div className='slide'>
                <img classname="CL-img" src={WHOLEYS}></img>
              </div>
            </Carousel>
      <h2 className='section-subheader-white'>Education / Coursework</h2>
      
      <div className='ed-subsection'>
        <img className='CL-img' src={PITT2}/>
        <Carousel className='course-carousel'
          autoPlay="true"
          axis='vertical'
          verticalSwipe='natural'
          centerMode="true"
          infiniteLoop="true"
          interval={4000}
          transitionTime={2000}
          ariaLabel=''
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className='course'><p>{courses[1]}</p></div>
          <div className='course'><p>{courses[0]}</p></div>
          <div className='course'><p>{courses[1]}</p></div>
          <div className='course'><p>{courses[0]}</p></div>
          <div className='course'><p>{courses[1]}</p></div>
          <div className='course'><p>{courses[0]}</p></div>


        </Carousel>
      </div>

    </div>

  )
}



export default Experience