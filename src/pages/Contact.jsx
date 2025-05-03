/* eslint-disable no-unused-vars */
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
  // eslint-disable-next-line no-unused-vars
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    const serviceID = 'service_nl43b0v';
    const templateID = 'template_xobowbf';
    const publicKey = 'oNmtmn7rviwDnfs47';

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        setSubmitted(true);
        setError(null);
        setTimeout(() => setSubmitted(false), 4000);
        e.target.reset();
      }, (error) => {
        setError('Failed to send message. Please try again.');
        setTimeout(() => setError(null), 4000);
      });
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
            <a href="https://www.facebook.com/paulo.abrajano24?_rdc=1&_rdr" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/paulo-24" target="_blank" rel="noreferrer">
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
            {error && (
              <p className="error-msg">{error}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;