import "./About.css";
import profileImage from "../assets/man.png";

const About = () => {
  return (
    <div className="about">
      <section className="about-container">
        <h2 className="about-title">ABOUT ME</h2>
        <hr className="about-line" />
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, Im Paulo Abrajano, a passionate UI/UX designer. I focus on creating user-centered 
              experiences through design thinking, human-computer interaction, and visual design. 
              I’m driven to craft intuitive and engaging interfaces that meet diverse user needs, 
              collaborating with cross-functional teams to deliver seamless experiences.
            </p>
          </div>
          <div className="about-image-container">
            <img src={profileImage} alt="Profile" className="about-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
