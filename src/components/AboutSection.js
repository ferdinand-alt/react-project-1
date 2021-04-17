import React from "react";
import styled from "styled-components";
import { About, Description, ImgAbout, Hide} from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>Dream</span> festival
            </h2>
          </Hide>
          <Hide>
            <h2>safe again</h2>
          </Hide>
        </div>
        <p>
         Lorem ipsum dolor sit amet.
        </p>
        <button>Contact us</button>
      </Description>
          <ImgAbout></ImgAbout>
    </About>
  );
};

export default AboutSection;
