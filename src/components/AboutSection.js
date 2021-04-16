import React from 'react';
import Dream from '../img/Dream-party.jpg'

const AboutSection = () => {
    return (
      <div>
        <div className="description">
          <div className="title">
            <div className="hide">
              <h2>We make your</h2>
            </div>
            <div className="hide">
              <h2><span>dream</span> parties</h2>
            </div>
            <div className="hide">
              <h2>Safe again</h2>
            </div>
          </div>
            </div>
            {/* paragraaf */}
            <p>We are specialised in making festivals free from virussen and giving your audience an feeling of safety and freedome</p>
            <button>Contact us</button>
            <div className="image">
                <img src={Dream} alt="Dream Party"/>
            </div>
      </div>
    );
}

export default AboutSection;