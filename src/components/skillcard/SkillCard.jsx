import React from 'react';
import './SkillCard.css';

function SkillCard({ skillName, percentage, imageSrc, learning }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={skillName} />
        </div>
        <div className="flip-card-back">
          <p className="title">{skillName}</p>
          <p>{percentage} {learning && 'and learning'}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
