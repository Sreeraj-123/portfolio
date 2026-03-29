import React from 'react';

const Contact = () => {
  // Web3Forms logic
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // IMPORTANT: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, 
            or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>San Francisco, CA (Open to Remote)</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-form glass-panel">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Sreeraj V R" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="sreeraj@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Hello, I'd like to discuss..."></textarea>
          </div>
          {/* Web3Forms Honeypot */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <button type="submit" className="btn-primary submit-btn">
            Send Message <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <footer className="footer">
        <p>Built with React & Vite. Styled from scratch.</p>
        <p>&copy; {new Date().getFullYear()} Sreeraj V R. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
