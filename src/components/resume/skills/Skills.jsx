import React from 'react';
import './Skills.css';
import { TECHNOLOGIES } from '../../../constants/index';

const Skills = () => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">
        {TECHNOLOGIES.map((tech, index) => (
          <li className="title" key={index}>
            {tech}
          </li>
        ))}
      </ul>

      {/* Optionally, you can use badges instead of list items */}
      <div className="skills-container">
        {TECHNOLOGIES.map((tech, index) => (
          <span className="skill-badge" key={index}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
