import React from 'react';
import SpotlightCard from './animations/SpotlightCard';

const Experience = () => {
  const experiences = [
    {
      role: 'Website Designer Intern',
      company: 'Relib Clean Tech',
      date: 'Oct 2024 – Jan 2025',
      link: 'https://www.relibcleantech.com',
      bullets: [
        'Designed and developed a production-level company website',
        'Implemented responsive UI for mobile, tablet, and desktop screens',
        'Improved website accessibility and usability',
        'Optimized load time and performance',
        'Deployed and maintained website'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container" style={{ padding: '80px 0' }}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <SpotlightCard key={index} className="experience-card">
            <div style={{ padding: '2.5rem', textAlign: 'left' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.6rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
              <h4 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', color: 'var(--accent-color)', display: 'flex', alignItems: 'center' }}>
                {exp.company} 
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" style={{ marginLeft: '10px', color: 'var(--text-primary)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-light)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                    <i className="fa-solid fa-arrow-up-right-from-square" title="View Production Website"></i>
                  </a>
                )}
                <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginLeft: '12px' }}>| {exp.date}</span>
              </h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.8', margin: 0, fontSize: '1.05rem' }}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;
