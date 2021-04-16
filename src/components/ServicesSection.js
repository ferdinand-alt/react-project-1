import React from 'react'
import Safety from '../img/Free-party.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faMoneyBillWave, faHandshake } from "@fortawesome/free-solid-svg-icons"


function ServicesSection() {
    return (
      <div className="services">
        <div className="description">
          <h2>Our Services</h2>
          <div className="cards">
            {/* CARD 1  EFFICIENT*/}
            <div className="card">
              <div className="icon">
                <FontAwesomeIcon icon={faClock} />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {/* CARD 2  TEAM*/}
            <div className="card">
              <div className="icon">
                <FontAwesomeIcon icon={faUsers} />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {/* CARD 3  Efficient*/}
            <div className="card">
              <div className="icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
                <h3>Costs</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {/* CARD 4  Efficient*/}
            <div className="card">
              <div className="icon">
                <FontAwesomeIcon icon={faHandshake} />
                <h3>Trust</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
            <div className="image">
                <img src={Safety} alt="safety foto"/>
            </div>
      </div>
    );
}

export default ServicesSection
