import "./About.css";
import profileImage from "../assets/eye-glasses.png"; // Adjust path based on your file location

const About = () => {
  return (
    <section className="about">
      <img src={profileImage} alt="Profile" className="about-image" />
      <h2>ABOUT ME</h2>
      <hr className="about-line" />
      <p>
        Hi, Im Paulo Abrajano, and Im 22 years old. I have a variety of interests, 
        including playing online games and basketball. I also enjoy adventure activities 
        like hiking and camping, as they help me stay healthy and complete my day. In the field 
        of programming, I work as a back-end developer, and I consider myself a beginner, 
        still learning and growing. I’m also exploring my interests, as I have a passion for design. 
        It is possible that I may shift towards UI/UX design or front-end development in the future.
      </p>
    </section>
  );
};

export default About;
