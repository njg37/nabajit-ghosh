import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt Ltd',
    duration: 'Aug 2024 – Sep 2024',
    details: [
      'Developed and implemented user authentication systems with roles and permissions (admin and user) using PHP and MySQL.',
      'Enhanced profile management features, including file upload functionality and API integration for real-time data.',
      'Collaborated on front-end improvements and ensured responsive design across devices.',
      'Conducted thorough testing and prepared documentation for seamless project deployment.',
      'Gained hands-on experience with PHP, MySQL, API integration, and responsive web design.',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'CodeSpeedy',
    duration: 'Jul 2024 – Aug 2024',
    details: [
      'Developed high-quality, original tutorials on JavaScript and CSS topics.',
      'Worked as a web developer with WordPress.',
      'Ensured all content was tested and compliant with strict non-copying policies.',
      'Delivered top-tier work with effective team communication.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" data-aos="fade-up">
      <h2 className="section-title">My Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;
