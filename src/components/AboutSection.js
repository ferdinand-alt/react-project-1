import React from "react";
import { About, Description, ImgAbout, Hide, BackgroundImg } from "../styles";
// motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim, } from "../animation";
import Wave from '../img/wave.jpg'
import ScrollTop from '../components/ScrollTop'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>Dream</span> festival
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>safe again</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Lorem ipsum dolor sit amet.</motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <ImgAbout variants={photoAnim}></ImgAbout>
      <BackgroundImg variants={fade}></BackgroundImg>
      <ScrollTop/>
    </About>
  );
};

export default AboutSection;
