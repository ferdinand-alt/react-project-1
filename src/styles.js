import styled from 'styled-components'
import Dream from "./img/Dream-party.jpg";
import Free from './img/Free-party.jpg'

export const About = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;


// AboutSection.js achtergrond IMG
export const ImgAbout = styled.div`
  background-image: url(${Dream});
  height: 800px;
  width: 500px;
  /* flex: 1; */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

// ServicesSection.js achtergrond IMG
export const ImgServices = styled.div`
  background-image: url(${Free});
  height: 800px;
  width: 500px;
  /* flex: 1; */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
