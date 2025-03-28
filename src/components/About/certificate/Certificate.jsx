import React from 'react';
import './Certificate.css';
import Logo1 from '../../../assets/images/logo-1-color.png';
import Logo2 from '../../../assets/images/logo-2-color.png';

const Clients = () => {
    return (
        <section className="clients">
            <h3 className="h3 clients-title">Certificate</h3>
            <ul className="clients-list has-scrollbar">
                <li className="clients-item">
                    <a href="#">
                        <img src={Logo1} alt="Client 1 Logo" />
                    </a>
                </li>
                <li className="clients-item">
                    <a href="#">
                        <img src={Logo2} alt="Client 2 Logo" />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Clients;
