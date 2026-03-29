import React from 'react';
import SplitText from './animations/SplitText';
import AnimatedSquares from './animations/AnimatedSquares';

const Hero = () => {
  return (
    <section id="hero" className="hero-section" style={{ position: 'relative' }}>
      <AnimatedSquares />
      
      <div className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
        <span className="hero-greeting">
          <SplitText text="Hi, my name is" delay={0.1} />
        </span>
        <h1 className="hero-title">
          <SplitText text="Sreeraj V R." delay={0.3} />
        </h1>
        <h2 className="hero-subtitle">
          <SplitText text="I build things for the web." delay={0.5} />
        </h2>
        <p className="hero-description">
          I'm a Frontend Developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products using modern React architectures.
        </p>
        <a href="#contact" className="btn-primary">
          Get In Touch <i className="fa-solid fa-arrow-right"></i>
        </a>
        
        <div className="hero-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:your.email@example.com" className="social-icon">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
