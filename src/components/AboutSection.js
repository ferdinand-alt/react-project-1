import React from "react";
import { About, Description, ImgAbout, Hide } from "../styles";
// motion
import { motion } from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation'

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
    </About>
  );
};

export default AboutSection;
