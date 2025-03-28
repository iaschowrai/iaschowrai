import React from 'react'
import './Service.css'
import DesignIcon from "../../../assets/images/icon-design.svg";
import WebDesign from '../../../assets/images/icon-dev.svg';
import WebDev from '../../../assets/images/icon-design.svg';
import Photography from '../../../assets/images/icon-design.svg';


const Service = () => {
  return (
    <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={DesignIcon} alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Kafka Event Notifications</h4>
              <p className="service-item-text">
              Leverage Apache Kafka to build real-time, event-driven notifications ensuring scalability, fault tolerance, and efficient message delivery across distributed systems.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={WebDesign} alt="Web Developement" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Developement</h4>
              <p className="service-item-text">
              Build dynamic, responsive websites with HTML, CSS, JavaScript, and React, focusing on performance, scalability, and seamless user experiences.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={WebDev} alt="Mobile Apps" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title"> Code Efficiency</h4>
              <p className="service-item-text">
              Enhance problem-solving skills by mastering data structures, algorithms, and efficient coding techniques to tackle complex challenges and improve performance.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={Photography} alt="Photography" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">CI/CD Pipeline</h4>
              <p className="service-item-text">
              Leveraging CI/CD pipelines using AWS ECR, EKS, and other AWS services to automate testing, building, and deployment for scalable, efficient software delivery.              </p>
            </div>
          </li>
        </ul>
      </section>
  )
}

export default Service