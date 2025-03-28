import React from 'react'
import './About.css';
import AboutMe from './aboutMe/AboutMe';
import Service from './service/Service';
import Testimonials from './testimonials/Testimonials';
import Modal from './modal/Modal';
import Certificate from './certificate/Certificate';
import Resume from '../resume/Resume'

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <AboutMe />
      <div className='separator'></div>
      {/* <Resume /> */}
      <Service />
      {/* <Testimonials /> */}
      <Modal />
      {/* <Certificate /> */}
    </article>


  )
}

export default About