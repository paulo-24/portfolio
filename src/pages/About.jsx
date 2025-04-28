/* eslint-disable no-unused-vars */
// About.jsx
import React from 'react';
import './About.css';
import AboutMe from './Aboutme';
import Skills from './Skills';
import Tools from './Tools';
import Interests from './Interests';

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        <AboutMe />
        <Skills />
      </div>
      <Tools />
      <Interests />
    </section>
  );
};

export default About;
