import React from 'react';

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
    <section id="skills" className="section-container">
      <h2 className="section-title">My Technical Setup</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card glass-panel">
            <i className={`${skill.icon} skill-icon`}></i>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
