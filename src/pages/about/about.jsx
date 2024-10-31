import React, { useEffect, useState } from 'react';
import './about.css';
import Skills from '../Skills/Skills';

function About() {
  const [text, setText] = useState('');
  const fullText = "Hii,I am Aaditya and i am a full stack web developer,finished BE in CSE department, I like learing new things and putting it to real world use, looking for an opportunity to grow and learn new things.";
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
