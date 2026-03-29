import React from 'react';
import InfiniteScroll from './animations/InfiniteScroll';

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'SQL', icon: 'fa-solid fa-database' },
    { name: 'Linux', icon: 'fa-brands fa-linux' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'Git', icon: 'fa-brands fa-git-alt' },
    { name: 'HTML/CSS', icon: 'fa-brands fa-html5' }
  ];

  return (
    <section id="skills" className="section-container" style={{ padding: '60px 0', overflow: 'hidden' }}>
      <h2 className="section-title">My Technical Setup</h2>
      <div style={{ marginTop: '3rem' }}>
        <InfiniteScroll speed={20} direction="left">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-panel" style={{ minWidth: '200px', margin: '0 1rem' }}>
              <i className={`${skill.icon} skill-icon`}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <InfiniteScroll speed={25} direction="right">
          {skills.slice().reverse().map((skill, index) => (
            <div key={`rev-${index}`} className="skill-card glass-panel" style={{ minWidth: '200px', margin: '0 1rem' }}>
              <i className={`${skill.icon} skill-icon`}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Skills;
