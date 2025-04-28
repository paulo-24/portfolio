/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faRocket,
  faUser,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <div className="main-contact">
      <section className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Reach Me Out</h2>
          <p>Let's create something together ✨</p>

          <div className="email-box">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Mail me at:
            </p>
            <a href="mailto:jp@gmail.com">jpabrajano81@gmail.com</a>
          </div>

          <div className="number-box">
            <p>
              <FontAwesomeIcon icon={faPhone} /> Contact Me:
            </p>
            <a href="tel:+639684724752">+63 9684724752</a>
          </div>

          <div className="location-box">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Zamboanga City, Philippines
          </div>

          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <h3>
            Send me a message <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="input-icon-group">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Your Name" name="name" required />
            </div>
            <div className="input-icon-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="Your Email" name="email" required />
            </div>
            <div className="input-icon-group">
              <FontAwesomeIcon icon={faCommentDots} />
              <textarea rows="4" placeholder="Your Message" name="message" required></textarea>
            </div>
            <button type="submit">Send message</button>
            {submitted && (
              <p className="success-msg">Message sent successfully ✅</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;