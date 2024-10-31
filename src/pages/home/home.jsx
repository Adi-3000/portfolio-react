import React, { useEffect, useState } from 'react'
import './home.css'
import useTypewriter from '../../components/useTypewriter';

function Home() {
    const words = ["a Tech nerd", "Enthusiastic", "gamer", "web developer", "android developer"];
    const animatedText = useTypewriter(words, 2000);
  
    return (
      <div className="home">
        <div className="card">
          <img src="public/pictures/profile.png" alt="Profile" />
        </div>
        <div className="text">
          <h1>Hi, I am <span className="name">Aaditya Raj</span></h1>
          <h1>I am {animatedText}</h1>
        </div>
      </div>
    );
  }
  
  export default Home;