import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p><strong>Tech:</strong> {project.tech}</p>
  </div>
);

export default ProjectCard;
