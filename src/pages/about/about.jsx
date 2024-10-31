import React, { useEffect, useState } from 'react';
import './about.css';
import Skills from '../Skills/Skills';

function About() {
  const [text, setText] = useState('');
  const fullText = "Hii,I am Aaditya and i am a developer,Currently persuing BE in CSE department and looking for an opportunity to grow and learn new things while putting it to work in real world.";
  const typingSpeed = 50; 

  useEffect(() => {
    let currentChar = 0;
    const typeEffect = () => {
      if (currentChar <= fullText.length-2) {
        setText((prev) => prev + fullText[currentChar]);
        currentChar++;
        setTimeout(typeEffect, typingSpeed);
      }
    };

    typeEffect();
  }, []);

  return (
    <div className="about" id="about">
      
      <section className="content">
        <div id="typedtext">
          <span className="typing-animation">{text}</span>
        </div>
      </section>
      <a href="#skills">
        <section>
          <div className="scroll"></div>
        </section>
        
      </a>
      <div id='skills'>
      <Skills/>
      </div>
    </div>
  );
}

export default About;
