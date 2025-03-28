import React, { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { phonePortraitOutline, mailOutline, logoLinkedin, logoGithub, downloadOutline, chevronUp, chevronDown } from "ionicons/icons";
import './Sidebar.css';
import ProfilePic from '../../assets/profilePicture/me.png';
import { RESUMELINK } from '../../constants/index';



const Sidebar = () => {

  // state to track the visibility of contacts
  const [isContactsVisible, setIsContactsVisible] = useState(false);


  // toggle function
  const handleToggleContacts = () => {
    setIsContactsVisible(prevState => !prevState);
  }

  return (

    <aside className={`sidebar ${isContactsVisible ? 'active' : ''}`} >
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={ProfilePic} alt='Irshad Schowrai' width="80" />
        </figure>
        <div className='info-content'>
          <h1 className='name' title='Irshad Ahmed Schowrai'>Irshad Ahmed Schowrai</h1>
          <p className="title">Software Engineer</p>
        </div>
        <button className='info_more-btn' onClick={handleToggleContacts}>
          <span>{isContactsVisible ? 'Hide Contacts' : 'Show Contacts'}</span>
          <IonIcon icon={isContactsVisible ? chevronUp : chevronDown} />
          {/* <ion-icon name={isContactsVisible ? "chevron-up" : "chevron-down"}></ion-icon> */}
        </button>
      </div>
      <div className='sidebar-info_more'>
        <div className='separator'></div>
        <ul className='contacts-list'>
          
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={downloadOutline} size="large" />
            </div>
            <div className="contact-info">
              {/* <p className="">Download Resume</p> */}
              <a
                href={RESUMELINK.resume}
                className="resume-title"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to Download Resume
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className='icon-box'>
              <IonIcon icon={phonePortraitOutline} size="medium" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="+17746969620" className="contact-link">+1 (774) 696-9620</a>
            </div>
          </li>
          <li className="contact-item">
            <div className='icon-box'>
              <IonIcon icon={mailOutline} size="medium" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:irshad_ahmeds@yahoo.com" className="contact-link">irshad_ahmeds@yahoo.com</a>
            </div>
          </li>
        </ul>
        <div className='separator'></div>
        <ul className="social-list">
          <li className="social-item">
            <div className='icon-box'>
              <IonIcon icon={logoLinkedin} size="medium" />
            </div>
            <div className="social-info">
              <p className="social-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/iaschowrai/" className="social-link">
                iaschowrai
              </a>
            </div>
          </li>
          <li className="social-item">
            <div className='icon-box'>
              <IonIcon icon={logoGithub} size="medium" />
            </div>
            <div className="social-info">
              <p className="social-title">GitHub</p>
              <a href="https://github.com/iaschowrai" className="social-link">
                iaschowrai
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar