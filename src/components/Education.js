import React from 'react';
import './Education.css';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';

const educationDetails = [
  {
    degree: 'B.Tech',
    institution: 'Bengal College of Engineering and Technology, MAKAUT University',
    field: 'Computer Science and Engineering',
    duration: '2021-2025',
    icon: <FaGraduationCap />,
  },
  {
    degree: '12th',
    institution: 'Kamalpur Class XII School, TBSE, Tripura',
    field: 'Science Stream',
    duration: '2020-2021',
    icon: <FaSchool />,
  },
  {
    degree: '10th',
    institution: 'Kamalpur Madrassa Class XII School, TBSE, Tripura',
    field: 'General Study',
    duration: '2018-2019',
    icon: <FaSchool />,
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="education-container">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-card" data-aos="fade-up" style={{ '--delay': `${index * 0.3}s` }}>
            <div className="icon-circle">{edu.icon}</div>
            <div className="education-info">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="field">{edu.field}</p>
              <p className="duration">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="background-effect"></div>
    </section>
  );
};

export default Education;
