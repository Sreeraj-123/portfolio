import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NoiseOverlay from './components/animations/NoiseOverlay';
import ParticleBackground from './components/animations/ParticleBackground';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <NoiseOverlay opacity={0.06} />
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
