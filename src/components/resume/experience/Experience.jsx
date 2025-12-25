import React from 'react'
import { EXPERIENCES } from '../../../constants/index';
import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';


const Experience = () => {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
        {EXPERIENCES.map((experience, index) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">{experience.role} <span >{experience.company}</span></h4>
            <span>{experience.year}</span>

            {/* <p className="timeline-text">
              {experience.description}
            </p> */}
            <ul className="timeline-text list-disc list-inside mt-2">
              {experience.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}

      </ol>

    </section>
  )
}

export default Experience
