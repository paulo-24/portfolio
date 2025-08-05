/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: false,
    });
  }, []);

  return (
    <div className="experience">
      <div className="button-wrapper">
        <Link to="/" className="top-back-button">
          ← <span> </span>
        </Link>
      </div>
      <section className="experience-container">
        <div className="experience-header-top">
          <h1 className="experience-title">E x p e r i e n c e</h1>
          <div className="scroll-indicator" aria-hidden="true">
            ↓
          </div>
        </div>
        <div className="experience-list">
          
          {/* Software Engineering */}
          <div className="experience-item" data-aos="fade-up" data-aos-delay="100">
            <div className="experience-header">
              <h2 className="experience-role">
                <span role="img" aria-label="laptop">💻</span> Software Engineering
              </h2>
              <p className="experience-company">Team Project | College Software Engineering</p>
              <p className="experience-duration">January 2024 – May 2024</p>
            </div>
            <div className="experience-description">
              <ul>
                <li>Collaborated with a team to develop a full system for a real client, focusing on backend development and database integration.</li>
                <li>Contributed to building user login systems and other backend features, working closely with frontend developers.</li>
                <li>Participated in system design, brainstorming, and error-fixing sessions, often working late nights to meet deadlines.</li>
                <li>Successfully defended the system during midterms (80% completion) and final defense, implementing feedback to add minor features.</li>
                <li>Overcame challenges including team dynamics and personal struggles, ensuring project completion despite setbacks.</li>
              </ul>
            </div>
          </div>

          {/* Capstone Project */}
          <div className="experience-item" data-aos="fade-up" data-aos-delay="200">
            <div className="experience-header">
              <h2 className="experience-role">
                <span role="img" aria-label="trophy">🏆</span> Capstone Project
              </h2>
              <p className="experience-company">Final Year Project | BSIT Program</p>
              <p className="experience-duration">June 2024 – October 2024</p>
            </div>
            <div className="experience-description">
              <ul>
                <li>Developed a comprehensive system aimed at solving real-world problems related to [insert topic, e.g., attendance, inventory, etc.].</li>
                <li>Managed both frontend and backend aspects, ensuring seamless user experience and system stability.</li>
                <li>Coordinated with a team of 4 members to handle requirements gathering, prototyping, testing, and deployment.</li>
                <li>Presented the project to a panel of professors and IT professionals during the Capstone Final Defense.</li>
                <li>Received positive feedback for innovation, UI design, and practical impact of the system.</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="back-button-container" data-aos="fade-up" data-aos-delay="300">
          <Link to="/" className="back-button">
            <span>Back</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experience;
