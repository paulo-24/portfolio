import "./Hero.css";
import pauloImage from "../assets/paulo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-container">
        <div className="hero-content">
          <h1>JOHN PAULO ABRAJANO</h1>
          <h2>Backend Developer</h2>
          <p>With a passion for developing modern React web apps for commercial businesses.</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:your-email@example.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={pauloImage} alt="John Paulo Abrajano" className="circular-image" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
