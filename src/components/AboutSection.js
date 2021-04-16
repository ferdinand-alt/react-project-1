import React from "react";
import Dream from "../img/Dream-party.jpg";
import styled from "styled-components";

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

// STYLED COMPONENTS

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2 {
    font-weight: lighter;
}
`

const ImgAbout = styled.div`
  background-image: url(${Dream});
  height: 800px;
  width: 500px;
  flex: 1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection;
