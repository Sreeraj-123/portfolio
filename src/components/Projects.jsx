import React from 'react';
import SpotlightCard from './animations/SpotlightCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A React-based admin dashboard to manage products, view sales analytics, and track user engagement in real-time. Designed with a dark UI theme.',
      tech: ['React', 'Vite', 'CSS Variables', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'Data Visualizer App',
      description: 'A Python and React fullstack application that visualizes complex datasets. Integrated Docker for seamless orchestration and deployment.',
      tech: ['Python', 'React', 'Docker', 'SQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Interactive Portfolio',
      description: 'A highly dynamic, glassmorphism-inspired portfolio for web developers, featuring smooth animations and Web3Forms integration.',
      tech: ['React', 'HTML/CSS', 'Git'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <SpotlightCard key={index} className="project-card">
            <div className="project-header">
              <i className="fa-regular fa-folder project-folder"></i>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" title="View Source">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" title="Live Preview">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
