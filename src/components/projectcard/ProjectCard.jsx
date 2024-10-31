import React from 'react'
import './ProjectCard.css';
function ProjectCard({ title, imgSrc, link, skills }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src={imgSrc} alt="" />
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">{title}</div>
            <div className="project-hover">
              <svg
                style={{ color: 'black' }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            {skills.map((skill) => (
              <span className="project-type" key={skill}>• {skill}</span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
}

export default ProjectCard;