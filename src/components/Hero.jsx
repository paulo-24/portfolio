import njdslak from '../assets/paulo.jpg';


const Hero = () => {

  return (
    <div className="App">
    
      <header className="header">
        <h1>JP</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <div className='hero-container'>
            <section id="home" className="hero-section">
                <h1>Hi, Im John Paulo Abrajano</h1>
                <p>Frontend Developer | React Specialist</p>
                <button className='cta-button'>Hire Me</button>
            </section>
            <img className="hero-image" src={njdslak}></img>
        </div>
        
      </main>
    </div>
  );
};

export default Hero;
