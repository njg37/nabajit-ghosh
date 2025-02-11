import React, { useState } from 'react';
import './Certificate.css';
import JavaCertificateCtshort from "../images/JavaCertificateCutshort.jpg";
import PythonCertificateCtshort from "../images/PythonCertificateCutshort.jpg";
import JavascriptCertificateCtshort from "../images/JavascriptCertificateCutshort.jpg";
import DataStructuresCertificateCtshort from "../images/DataStructuresCertificateCutshort.jpg";
import WiproTalentNextJavaFullStackCertification from "../images/WiproTalentNextJavaFullStackCertification.png";

const Certificate = () => {
  const [showWiproCertificate, setShowWiproCertificate] = useState(false);
  const [enlargedCard, setEnlargedCard] = useState(null);

  const certificates = [
    {
      id: 1,
      image: JavaCertificateCtshort,
      title: "Java Advanced Skill Certification – Cutshort",
      description: "This certificate validates my advanced proficiency in Java, as assessed through Cutshort's skill evaluation test. It demonstrates my expertise in Java programming, problem-solving, and coding proficiency.",
      link: "https://cutshort.io/certificate/111326",
      type: 'cutshort',
    },
    {
      id: 2,
      image: PythonCertificateCtshort,
      title: "Python Advanced Skill Certification – Cutshort",
      description: "This certificate validates my advanced proficiency in Python, as assessed through Cutshort's skill evaluation test. It demonstrates my expertise in Python programming, problem-solving, and coding proficiency.",
      link: "https://cutshort.io/certificate/111424",
      type: 'cutshort',
    },
    {
      id: 3,
      image: JavascriptCertificateCtshort,
      title: "JavaScript Advanced Skill Certification – Cutshort",
      description: "This certificate validates my advanced proficiency in JavaScript, as assessed through Cutshort's skill evaluation test. It demonstrates my expertise in Java programming, problem-solving, and coding proficiency.",
      link: "https://cutshort.io/certificate/111376",
      type: 'cutshort',
    },
    {
      id: 4,
      image: DataStructuresCertificateCtshort,
      title: "Data Structures Advanced Skill Certification – Cutshort",
      description: "This certificate validates my advanced proficiency in Data Structures, covering algorithms, complexity analysis, and problem-solving techniques, as assessed through Cutshort's skill evaluation test.",
      link: "https://cutshort.io/certificate/111318",
      type: 'cutshort',
    }
  ];

  const toggleEnlargeCard = (id) => {
    setEnlargedCard(enlargedCard === id ? null : id);
  };

  const openWiproModal = (e) => {
    e.stopPropagation(); // Prevent card click from triggering
    setShowWiproCertificate(true);
  };

  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <h2 className="certificate-title">My Certificates</h2>
        <div className="certificate-list">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`certificate-item ${cert.type}-card ${enlargedCard === cert.id ? 'enlarged-card' : ''}`}
            >
              <div className="certificate-inner">
                <div className="certificate-front">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-image"
                  />
                </div>
                <div className="certificate-back">
                  <h3 className="certificate-name">{cert.title}</h3>
                  <p className="certificate-description">{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="verify-button">Verify</a>
                </div>
              </div>
            </div>
          ))}

          {/* Wipro Certificate */}
          <div
            className={`certificate-item wipro-card ${enlargedCard === 'wipro' ? 'enlarged-card' : ''}`}
          >
            <div className="certificate-inner">
              <div className="certificate-front">
                <img
                  src={WiproTalentNextJavaFullStackCertification}
                  alt="Wipro TalentNext – Java Full Stack Certification"
                  className="certificate-image"
                />
              </div>
              <div className="certificate-back">
                <h3 className="certificate-name">Wipro TalentNext – Java Full Stack Certification</h3>
                <p className="certificate-description">This certificate validates my proficiency in Java Full Stack Development, covering core Java, front-end technologies, databases, and full-stack application development through the Wipro TalentNext Digital Skills Readiness Program</p>
                <button className="verify-button" onClick={openWiproModal}>Verify</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Wipro Certificate */}
      {showWiproCertificate && (
        <div className="modal" onClick={() => setShowWiproCertificate(false)}>
          <div className="modal-content">
            <img src={WiproTalentNextJavaFullStackCertification} alt="Wipro Full Certificate" className="full-certificate" />
            <button className="close-button" onClick={() => setShowWiproCertificate(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
