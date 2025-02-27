import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="main-contact">
    <section className="contact-container">

      {/* Left Side: Text and Email Info */}
      
      <div className="contact-info">
        <h2>Reach Me Out</h2>
        <p>Lets create something together ✨</p>
        <div className="email-box">
          <p>Mail me at:</p>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
        <div className="number-box">
          <p>Contact Me</p>
          <a href="number">+63 9684724752</a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-form">
        <h3>Send me a message🚀</h3>
        <form>
          <input type="text" placeholder="Full name*" required />
          <input type="email" placeholder="Email address*" required />
          <textarea placeholder="Tell me more about your project*" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
