import React from 'react'
import styled from 'styled-components'
// Fotos
import empty from '../img/empty-festival.jpg';
import organisation  from '../img/organisation.jpg';
import safety from '../img/safety-corona.jpg';
// link
import { Link } from 'react-router-dom';
// animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from '../components/useScroll'
import ScrollTop from "../components/ScrollTop";

const OurServices = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
    return (
      <Works
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Work
          layout="position"
          ref={element}
          variants={fade}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={fade}>Preperation</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/preperation">
            <motion.img variants={photoAnim} src={empty} alt="festival" />
          </Link>
        </Work>
        <Work
          layout="position"
          ref={element2}
          variants={fade}
          initial="hidden"
          animate={controls2}
        >
          <h2>Security</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/security">
            <Hide>
              <img src={empty} alt="festival" />
            </Hide>
          </Link>
        </Work>
        <Work>
          <h2>Testing</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/testing">
            <img src={safety} alt="festival" />
          </Link>
        </Work>
        <Work>
          <h2>Consultancy</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/services/consultancy">
            <img src={organisation} alt="festival" />
          </Link>
        </Work>
        <ScrollTop/>
      </Works>
    );
}

const Works = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2 {
    padding: 1rem 0rem;
}
`
const Work = styled(motion.div)`
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background-color: coral;
    margin-bottom: 3rem;
}
img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
}
`
const Hide = styled.div`
overflow: hidden;
`

// Frame Animation
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
/* zo dat het de nav niet bedekt */
top: 0;
width: 100%;
height: 100%;
background-color: #fffebf;
z-index: 2;
`
const Frame2 = styled(Frame1)`
background-color: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurServices
