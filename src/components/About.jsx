import React, { useEffect } from 'react';
import image1 from '../assets/CKGrad.JPG';
import image2 from '../assets/Chris.JPG';
import image3 from '../assets/ChrisGrad.JPG';
import image4 from '../assets/ChrisNSetup.jpg';
import image5 from '../assets/CKristyBithday.JPEG';
import image6 from '../assets/ChrisChipotle.JPG';
import image7 from '../assets/Car.PNG';
import image8 from '../assets/ChrisTree.JPEG';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/stickyheader.css';
import '../css/About.css'; 

export const About = () => {


  return (
    <section id="about" className="about-section">
      <h1 className="sticky-header">About Me</h1>
      <div className="about-content">
        <div className="about-left">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            showStatus={false}
          >
            <div >
              <img src={image1} alt="chris and girlfriend graduation" />
            </div>
            <div >
              <img src={image2} alt="image of chris" />
            </div>
            <div>
              <img src={image3} alt="chris post-graduation" />
            </div>
            <div>
              <img src={image4} alt="chris's coding setup" />
            </div>
            <div>
              <img src={image5} alt="chris and girlfriend birthday celebration" />
            </div>
            <div>
              <img src={image6} alt="image of chris" />
            </div>
            <div>
              <img src={image7} alt="chris's car which he loves" />
            </div>
            <div>
              <img src={image8} alt="image of chris" />
            </div>
          </Carousel>
        </div>



        <div className="about-right">
          
        <div className="typing-effect-container">
        <p className="typing-effect">Get to know me!</p>
        </div>

          <p>
          I'm Christopher Altagracia, a Web Developer with a passion for creating intuitive and dynamic websites. 
          I graduated from Kean University with a Bachelor's degree and am now pursuing a Master’s degree in Information Systems.
           During my undergraduate studies, I tutored students as a Code Samurai Tutor and conducted research on Large Language Models (LLM) vulnerabilities, 
           which was awarded top 10 articles, presented and published at ISNCC 2024. Currently, I’m a graduate assistant, tutoring students and working as a web developer 
           for Kean's ACM (Association for Computing Machinery) club. My passion for web development keeps me engaged in continuous learning 
           and skill-building through various projects.  I am eager to leverage my expertise and enthusiastic to make a significant impact in the tech industry.
          </p>
        
          <hr />

          <div className="skills-section">
            <h4>Core Technical Skills:</h4>
            <div className="skills-list">
              <p>
                <span className="skill-item">HTML</span>
                <span className="skill-item">CSS</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">React</span>
                <span className="skill-item">Node.js</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">Bootstrap</span>
                <span className="skill-item">Tailwind CSS</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">Ampps</span>
                <span className="skill-item">Eclipse</span>
                <span className="skill-item">VS Code</span>
                <span className="skill-item">MobaXterm</span>
                <span className="skill-item">Filezilla</span>
                <span className="skill-item">Linux</span>
                <span className="skill-item">PHP</span>
                <span className="skill-item">Google Colab</span>
                <span className="skill-item">OBS Studio</span>
                <span className="skill-item">Google Sheets</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">Github Pages</span>
                <span className="skill-item">Vercel</span>

              </p>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};