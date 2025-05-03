/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

import bigbrewImg from '../assets/bigbrew.png';
import smsImg from '../assets/sms.png';
import pokeImg from '../assets/pokemon.png';
import TodoImg from '../assets/Todolist.png';

const projects = [
  {
    title: "Bigbrew Website",
    description: "A modern, responsive coffee shop website designed to streamline staff clock-in and clock-out with image capture for accurate time tracking.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/paulo-24/Bigbrew_website.git",
    image: bigbrewImg,
  },
  {
    title: "Capstone SMS",
    description: "A student management system that simplifies school administrative tasks and grade monitoring, featuring QR-based attendance tracking.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/paulo-24/Capstone_project.git",
    image: smsImg,
  },
  {
    title: "Pokemon Mini Dex",
    description: "A simple React and Tailwind-based Pokédex with clean design.",
    tech: ["ReactJS", "Tailwind"],
    github: "https://github.com/paulo-24/PokemonDex.git",
    image: pokeImg,
    liveLink: "https://pokedexduel.netlify.app/"
  },
  {
    title: "To Do List App",
    description: "A lightweight To-Do List app with ReactJS and CSS, featuring smooth UI.",
    tech: ["ReactJS", "CSS"],
    github: "https://github.com/paulo-24/ToDoList.git",
    image: TodoImg,
    liveLink: "https://purelist.netlify.app/",
  },
];

const Projects = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img || pauloImg);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">P R O J E C T S</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={project.image || pauloImg}
              alt={project.title}
              className="project-image"
              onClick={() => openModal(project.image)}
            />
            <div className="project-content">
              <h3 className="project-title">{project.title.toUpperCase()}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((tech, idx) => (
                  <li key={idx} className="tech-item">{tech}</li>
                ))}
              </ul>
              <div className="project-btn-container">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <FaGithub style={{ marginRight: '8px' }} />
                  View on GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    <span style={{ marginRight: '8px' }}>➡️</span>
                    View it live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImg} alt="Zoomed project" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;