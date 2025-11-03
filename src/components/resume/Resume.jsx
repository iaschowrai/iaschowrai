import React from 'react'
import './Resume.css'
import Education from './education/Education';
import Experience from './experience/Experience';
import Skills from './skills/Skills';

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Work Experience</h2>
      </header>
      <Experience />
      <Education />

      <Skills />
    </article>

  )
}

export default Resume
