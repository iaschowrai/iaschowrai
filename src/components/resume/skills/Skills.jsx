import React from 'react'
import './Skills.css';
import { TECHNOLOGIES } from '../../../constants/index';


const Skills = () => {
    return (
        <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">
                {EXPERIENCES.map((experience, index) => (
                    <React.Fragment key={index}>
                        {experience.technologies.map((tech, techIndex) => (
                            <li className="title" key={techIndex}>{tech}</li>
                        ))}
                    </React.Fragment>
                ))}
            </ul> 
            {/* <div className="skills-container">
                {TECHNOLOGIES.map((experience, index) => (
                    <React.Fragment key={index}>
                        {experience.technologies.map((tech, techIndex) => (
                            <span className="skill-badge" key={techIndex}>{tech}</span>
                        ))}
                    </React.Fragment>
                ))}
            </div> */}

            {/* <div className="skills-container">
              {TECHNOLOGIES.map((tech, index) => (
                <span className="skill-badge" key={index}>{tech}</span>
              ))}
            </div> */}







            {/* <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Web design</h5>
                        <data value="80">80%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "80%"}}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Graphic design</h5>
                        <data value="70">70%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "70%"}}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Branding</h5>
                        <data value="90">90%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "90%"}}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">WordPress</h5>
                        <data value="50">50%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "50%"}}></div>
                    </div>

                </li> */}

            {/* </ul> */}

        </section>
    )
}

export default Skills
