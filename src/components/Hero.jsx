import React from 'react';
import SplitText from './animations/SplitText';

const Hero = () => {
  return (
    <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
        <span className="hero-greeting">Hi, my name is</span>
        <h1 className="hero-title" style={{ margin: 0 }}>
          <SplitText text="Sreeraj V R" />
        </h1>
        <h2 className="hero-subtitle">
          <SplitText text="I build things for the web." />
        </h2>
        <p className="hero-description">
          I'm a Frontend Developer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating accessible, human-centered products using modern React architectures.
        </p>
        <a href="#contact" className="btn-primary">
          Get In Touch <i className="fa-solid fa-arrow-right"></i>
        </a>

        <div className="hero-socials">
          <a href="https://github.com/Sreeraj-123" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/sreeraj-v-r" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:sreeraj@example.com" className="social-icon">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
