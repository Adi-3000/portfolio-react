import './Skills.css';
import SkillCard from '../../components/skillcard/SkillCard';

function Skills() {
  const skillData = [
      { skillName: "Mongo", percentage: "85%", imageSrc: "/pictures/mongo.png" },
      { skillName: "Express", percentage: "75%", imageSrc: "/pictures/experss.png" },
      { skillName: "React", percentage: "90%", imageSrc: "/pictures/react.png" },
      { skillName: "Node", percentage: "65%", imageSrc: "/pictures/node.png" },
    { skillName: "C++", percentage: "85%", imageSrc: "/pictures/cpp.png" },
    { skillName: "Java", percentage: "68%", imageSrc: "/pictures/java.png" },
    { skillName: "Python", percentage: "57%", imageSrc: "/pictures/python.png" },
    { skillName: "PHP", percentage: "63%", imageSrc: "/pictures/php.png" },
    { skillName: "HTML", percentage: "85%", imageSrc: "/pictures/html.png" },
    { skillName: "CSS", percentage: "82%", imageSrc: "/pictures/css.png" },
    { skillName: "JavaScript", percentage: "72%", imageSrc: "/pictures/js.png" },
    { skillName: "Bootstrap", percentage: "76%", imageSrc: "/pictures/bootstrap.png" },
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
