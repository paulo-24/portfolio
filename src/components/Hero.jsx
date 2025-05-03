import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import pauloImage1 from "../assets/paulo.png";
import pauloImage2 from "../assets/paulo2.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  const images = [pauloImage1, pauloImage2];
  const [currentImage] = useState(0);
  const [text, setText] = useState("");
  const fullText = "HELLO EVERYONE!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <section className="hero-container">
        <div className="hero-content">
          <h1 className="typewriter">{text}</h1>
          <h1 className="gradient-text">JOHN PAULO ABRAJANO</h1>
          <h2 className="fade-up">Backend Developer</h2>
          <p className="fade-up delay-1">
            Passionate about building scalable and efficient systems that power modern web applications.
          </p>
          <div className="button-group fade-up delay-2">
            <Link to="/blog" className="blog-button">
              <span>My Blog</span>
            </Link>
            <Link to="/experience" className="blog-button experience-button">
              <span>Experience</span>
            </Link>
            <Link to="/certifications" className="blog-button">
              <span>Certifications</span>
            </Link>
          </div>
          <div className="social-icons fade-up delay-3">
          {/* <a href="https://www.linkedin.com/in/john-paulo-abrajano-126906363/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a> */}
            <a href="https://www.facebook.com/paulo.abrajano24?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/pauuulooo0/" target="_blank" rel="noopener noreferrer">  
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/paulo-24" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="hero-image fade-up delay-4">
          <img src={images[currentImage]} alt="John Paulo Abrajano" className="circular-image" />
        </div>
      </section>
    </div>
  );
};

export default Hero;