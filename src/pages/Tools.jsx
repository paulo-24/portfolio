/* eslint-disable no-unused-vars */
import React from 'react';

const Tools = () => {
  return (
    <div className="about-tools">
      <div className="section-title">
        <h2>Tools</h2>
        <hr />
      </div>

      <div className="tool-category">
        <h3>Web Dev Tools</h3>
        <div className="tools-grid">
          <div className="tool-item"><i className="fas fa-code" style={{ color: "#007acc" }}></i> VS Code</div>
          <div className="tool-item"><i className="fab fa-git-alt" style={{ color: "#f1502f" }}></i> Git</div>
          <div className="tool-item"><i className="fab fa-github" style={{ color: "#333" }}></i> GitHub</div>
          <div className="tool-item"><i className="fab fa-chrome" style={{ color: "#f4c20d" }}></i> Browser DevTools</div>
        </div>
      </div>

      <div className="tool-category">
        <h3>Backend Tools</h3>
        <div className="tools-grid">
          <div className="tool-item"><i className="fas fa-database" style={{ color: "#f68b1e" }}></i> XAMPP</div>
        </div>
      </div>

      <div className="tool-category">
        <h3>Design & UI/UX Tools</h3>
        <div className="tools-grid">
          <div className="tool-item"><i className="fab fa-figma" style={{ color: "#a259ff" }}></i> Figma</div>
          <div className="tool-item"><i className="fab fa-adobe" style={{ color: "#ff0000" }}></i> Adobe</div>
          <div className="tool-item"><i className="fas fa-paint-brush" style={{ color: "#00c4cc" }}></i> Canva</div>
        </div>
      </div>

      <div className="tool-category">
        <h3>Deployment & Hosting Tools</h3>
        <div className="tools-grid">
          <div className="tool-item"><i className="fas fa-rocket" style={{ color: "#00c7b7" }}></i> Netlify</div>
          <div className="tool-item"><i className="fas fa-server" style={{ color: "#ff5722" }}></i> Hostinger</div>
          <div className="tool-item"><i className="fas fa-infinity" style={{ color: "#6c63ff" }}></i> InfinityFree</div>
          <div className="tool-item"><i className="fas fa-fire" style={{ color: "#ffca28" }}></i> Firebase</div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
