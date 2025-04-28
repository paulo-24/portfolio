/* eslint-disable no-unused-vars */
import React from 'react';

const Skills = () => {
  return (
    <div className="about-skills">
      <div className="section-title">
        <h2>Skills</h2>
        <hr />
      </div>
      <ul className="skills-list">
        <li><i className="fab fa-html5" style={{ color: "#e34c26" }}></i> HTML</li>
        <li><i className="fab fa-css3-alt" style={{ color: "#264de4" }}></i> CSS</li>
        <li><i className="fab fa-js" style={{ color: "#f0db4f" }}></i> JavaScript</li>
        <li><i className="fab fa-php" style={{ color: "#8892BF" }}></i> PHP</li>
        <li><i className="fab fa-react" style={{ color: "#61DBFB" }}></i> ReactJS</li>
      </ul>
    </div>
  );
};

export default Skills;
