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
import { pageAnimation } from "../animation";

const OurServices = () => {
    return (
      <Works
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Work>
          <h2>Preperation</h2>
          <div className="line"></div>
          <Link to="/services/preperation">
            <img src={empty} alt="festival" />
          </Link>
        </Work>
        <Work>
          <h2>Security</h2>
          <div className="line"></div>
          <Link to="/services/security">
            <img src={empty} alt="festival" />
          </Link>
        </Work>
        <Work>
          <h2>Testing</h2>
          <div className="line"></div>
          <Link to="/services/testing">
            <img src={safety} alt="festival" />
          </Link>
        </Work>
        <Work>
          <h2>Consultancy</h2>
          <div className="line"></div>
          <Link to="/services/consultancy">
            <img src={organisation} alt="festival" />
          </Link>
        </Work>
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
const Work = styled.div`
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background-color: white;
    margin-bottom: 3rem;
}
img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
}
`

export default OurServices
