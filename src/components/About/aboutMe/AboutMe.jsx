import React from 'react'
import './AboutMe.css';
import { HERO_CONTENT } from '../../../constants/index.js';

const AboutMe = () => {
  return (
    <section className="about-text">
        <p>
        {HERO_CONTENT.p1}
        </p>
        <p>
        {HERO_CONTENT.p2}
        </p>
      </section>
  )
}

export default AboutMe