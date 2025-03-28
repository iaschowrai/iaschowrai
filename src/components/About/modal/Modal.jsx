import React,  { useState } from 'react'
import './Modal.css'
import avatar1 from '../../../assets/images/avatar-1.png';
import iconQuote from '../../../assets/images/icon-quote.svg';

const Clients = () => {

    // state to track the visibility of modal
      const [isModalVisible, setIsModalVisible] = useState(false);
    
    
      // toggle function
      const handleToggleModal = () => {
        console.log("Toggling modal, previous state:", isModalVisible);
        setIsModalVisible(prevState => !prevState);
      }
    

    return (
            
        <div className={`modal-container ${isModalVisible ? 'modal-active' : ''}`} >
            <div className={`overlay ${isModalVisible ? 'modal-active' : ''}`} >
                <section className="testimonials-modal">
                    <button className="modal-close-btn" onClick={handleToggleModal}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={avatar1} alt="Daniel" width="80" />
                        </figure>
                        <img src={iconQuote} alt="quote icon" />
                    </div>

                    <div className="modal-content">
                        <h4 className="h3 modal-title">Daniel</h4>
                        <time dateTime="2021-06-14">2021-06-04</time>
                        <div className="data-modal-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis obcaecati eum corporis, quisquam distinctio possimus! At excepturi rerum neque molestias eos unde fugit temporibus necessitatibus magnam numquam corporis, dolore possimus.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>)
}

export default Clients