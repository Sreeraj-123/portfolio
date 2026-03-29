import React from 'react';
import SpotlightCard from './animations/SpotlightCard';

const Projects = () => {
  const projects = [
    {
      title: 'Recycling Rewards Platform',
      description: 'A dedicated platform to promote recycling initiatives featuring a built-in user reward system. Built with a modern React frontend and a powerful Django backend.',
      tech: ['React', 'Django', 'Python', 'Rewards System'],
      github: '#',
      live: '#'
    },
    {
      title: 'Movie Recommendation Website',
      description: 'A dynamic movie recommendation platform featuring robust search and filtering functionality. Utilized JavaScript for seamless API integration and built a fully responsive user interface.',
      tech: ['JavaScript', 'REST API', 'HTML/CSS'],
      github: 'https://github.com/Sreeraj-123/movie-recommendation-app.git',
      live: '#'
    },
    {
      title: 'Interactive Portfolio Website',
      description: 'Designed and deployed this personal portfolio featuring mobile-first responsive design, advanced UI, and React Bits animations. Hosted on Vercel.',
      tech: ['React', 'Vite', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/Sreeraj-123/portfolio',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <SpotlightCard key={index}>
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
