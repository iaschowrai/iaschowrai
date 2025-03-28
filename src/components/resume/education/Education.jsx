import React from 'react'
import './Education.css';
import { IonIcon } from '@ionic/react';

import { bookOutline } from 'ionicons/icons';

const Education = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box"> 
        <IonIcon icon={bookOutline} />        
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Clark University</h4>
          <span>Jan/2022 — Dec/2023</span>
          <p className="timeline-text">
            Relevant Coursework: Design and Analysis of Algorithms, Server-Side Web Programming, SQA and testing, Data Analytics and 
            Software Engineering. 
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Education