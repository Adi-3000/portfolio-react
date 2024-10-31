import React from 'react';
import './Skills.css';
import SkillCard from '../../components/skillcard/SkillCard';

function Skills() {
  const skillData = [
      { skillName: "Mongo", percentage: "85%", imageSrc: "public/pictures/mongo.png" },
      { skillName: "Express", percentage: "75%", imageSrc: "public/pictures/experss.png" },
      { skillName: "React", percentage: "90%", imageSrc: "public/pictures/react.png" },
      { skillName: "Node", percentage: "65%", imageSrc: "public/pictures/node.png" },
    { skillName: "C++", percentage: "85%", imageSrc: "public/pictures/cpp.png" },
    { skillName: "Java", percentage: "68%", imageSrc: "public/pictures/java.png" },
    { skillName: "Python", percentage: "57%", imageSrc: "public/pictures/python.png" },
    { skillName: "PHP", percentage: "63%", imageSrc: "public/pictures/php.png" },
    { skillName: "HTML", percentage: "85%", imageSrc: "public/pictures/html.png" },
    { skillName: "CSS", percentage: "82%", imageSrc: "public/pictures/css.png" },
    { skillName: "JavaScript", percentage: "72%", imageSrc: "public/pictures/js.png" },
    { skillName: "Bootstrap", percentage: "76%", imageSrc: "public/pictures/bootstrap.png" },
  ];

  return (
    <div className="skills" id="skills">
      <section className="sktitle">
        Skills
        <section className="underline"></section>
      </section>
      <section className="skillset">
        {skillData.map((skill, index) => (
          <SkillCard 
            key={index}
            skillName={skill.skillName}
            percentage={skill.percentage}
            imageSrc={skill.imageSrc}
            learning={skill.learning}
          />
        ))}
      </section>
    </div>
  );
}

export default Skills;
