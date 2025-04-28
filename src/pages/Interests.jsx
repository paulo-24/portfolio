/* eslint-disable no-unused-vars */
import React from 'react';

const Interests = () => {
  return (
    <div className="about-interests">
      <div className="section-title">
        <h2>Interests</h2>
        <hr />
      </div>
      <div className="interests-grid">
        <div className="interest-item"><i className="fas fa-tv" style={{ color: "#e50914" }}></i> Netflix</div>
        <div className="interest-item"><i className="fas fa-basketball-ball" style={{ color: "#f57c00" }}></i> Basketball</div>
        <div className="interest-item"><i className="fas fa-guitar" style={{ color: "#795548" }}></i> Guitar</div>
        <div className="interest-item"><i className="fas fa-gamepad" style={{ color: "#9c27b0" }}></i> Computer Games</div>
        <div className="interest-item"><i className="fas fa-running" style={{ color: "#4caf50" }}></i> Running</div>
        <div className="interest-item"><i className="fas fa-video" style={{ color: "#ff1744" }}></i> Videography</div>
        <div className="interest-item"><i className="fas fa-camera" style={{ color: "#607d8b" }}></i> Photography</div>
        <div className="interest-item"><i className="fas fa-edit" style={{ color: "#3f51b5" }}></i> Editing</div>
        <div className="interest-item"><i className="fas fa-campground" style={{ color: "#6d4c41" }}></i> Camping</div>
        <div className="interest-item"><i className="fas fa-tree" style={{ color: "#388e3c" }}></i> Nature</div>
        <div className="interest-item"><i className="fas fa-music" style={{ color: "#2196f3" }}></i> Music</div>
        <div className="interest-item"><i className="fas fa-plane" style={{ color: "#e91e63" }}></i> Travelling</div>
      </div>
    </div>
  );
};

export default Interests;
