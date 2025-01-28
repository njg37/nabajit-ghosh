import React from 'react';
import './Experience.css';
import { FaCertificate } from 'react-icons/fa';

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
    certificateLink: 'https://drive.google.com/file/d/1Qtl9eHAnuE6DQQqgli3q0hdabOUhUcro/view?usp=sharing',
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
    certificateLink: 'https://drive.google.com/file/d/1rlD6u3iUD9rDg1RPnONtEpVCv3CJNSuZ/view?usp=sharing',
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
              <a href={exp.certificateLink} className="certificate-button" target="_blank" rel="noopener noreferrer">
                <FaCertificate className="certificate-icon" /> View Certificate
              </a>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;
