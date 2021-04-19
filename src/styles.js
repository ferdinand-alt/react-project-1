import styled from 'styled-components'
import dream from "./img/dream-party.jpg";
import free from './img/free-party.jpg'
import { motion } from "framer-motion";

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
export const ImgAbout = styled(motion.div)`
  background-image: url(${dream});
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
  background-image: url(${free});
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
