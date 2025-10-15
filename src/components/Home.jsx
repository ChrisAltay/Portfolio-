import React, { useEffect } from 'react';
import '../css/Home.css'; 
import chrisPicture from '../assets/chris1.JPG'; 
import youtubeIcon from '../assets/youtube2.png'; 
import githubIcon from '../assets/github.png'; 
import linkedinIcon from '../assets/linkedin.png'; 

export const Home = () => {

  /* Script for 'Hello' cycle in different languages */
  useEffect(() => {
    const helloLanguages = ["Hello", "Hola", "مرحبًا", "Bonjour", "Ciao", "Konnichiwa", "Salve", "Namaste"];
    let currentIndex = 0;

    function updateHello() {
      document.querySelector("#hello-span").textContent = helloLanguages[currentIndex];
      currentIndex = (currentIndex + 1) % helloLanguages.length;
    }

    // Update hello text every 2 seconds (2000 milliseconds)
    const intervalId = setInterval(updateHello, 2700);
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  /* Cursor Script */
  useEffect(() => {
    if (window.innerWidth > 768) {  // Only add the cursor dot for larger screens
      const cursorDot = document.createElement('div');
      cursorDot.classList.add('cursor-dot');
      document.body.appendChild(cursorDot);
      cursorDot.style.display = 'none'; // Initially hide the dot

      let dotX = 0, dotY = 0;
      let mouseX = 0, mouseY = 0;

      const moveCursor = () => {
        dotX += (mouseX - dotX) * 0.1; // Adjust the 0.1 to slow down the dot (lower is slower)
        dotY += (mouseY - dotY) * 0.1;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(moveCursor);
      };

      const updateCursorPosition = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const handleMouseEnter = () => {
        cursorDot.style.display = 'block'; // Show the dot
      };

      const handleMouseLeave = () => {
        cursorDot.style.display = 'none'; // Hide the dot
      };

      document.addEventListener('mousemove', updateCursorPosition);
      document.querySelector('.home-section').addEventListener('mouseenter', handleMouseEnter);
      document.querySelector('.home-section').addEventListener('mouseleave', handleMouseLeave);
      moveCursor(); // Start the animation loop

      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
        document.querySelector('.home-section').removeEventListener('mouseenter', handleMouseEnter);
        document.querySelector('.home-section').removeEventListener('mouseleave', handleMouseLeave);
        document.body.removeChild(cursorDot);
      };
    }
  }, []);


  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2><span id="hello-span">Hello</span>, I'm </h2>
        <h1>Christopher Altagracia</h1>
        <h2>Full Stack Developer based in Cranford, New Jersey <i className="fas fa-map-pin location-icon"></i>
        </h2>
      </div>

      <div className="home-image">
        <img src={chrisPicture} className="mainimage" alt="Christopher Altagracia" title="This is me"/>
        
        <div className="social-icons">
          <a href="https://www.youtube.com/channel/UCUM4Qe7JRKtYXdkAK7VIDqw" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="Youtube" className="social-icon" title="Check me out on Youtube!" />
          </a>
          <a href="https://github.com/ChrisAltay" target="_blank" rel="noopener noreferrer" title="Explore my repositories on Github!">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/christopher-paredes1/" target="_blank" rel="noopener noreferrer" title="Let's connect on LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
