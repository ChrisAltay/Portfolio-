import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import portfolio from '../assets/portfolio.png';
import ACM from '../assets/ACM.png';
import logiclounge from '../assets/logiclounge.png';
import shoppingsystem from '../assets/DatabaseShop2.png';
import moviemax from '../assets/moviemax.png';
import MM from '../assets/MealMatch.png'
import '../css/stickyheader.css';
import '../css/Projects.css';

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      offset: 200, // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing function to use for animation
      delay: 100, // Delay in milliseconds before the animation starts
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h1 className="sticky-header">Projects</h1>
      <p className="ProjP1">Each project is a unique blend of skillful development and inventive design.</p>
      
      <div className="projects-grid">
        
        <div className="project-item" data-aos="fade-up">
          <div className="project-description">
            <h2>Portfolio</h2>
            <p>Explore my portfolio to see a showcase of my skills in web development, featuring handpicked projects that highlight my expertise in crafting user-centric designs and 
              innovative solutions. Showcasing an interactive interface to demonstrate my technical proficiency and creativity, offering visitors a firsthand experience of my professional journey in technology.</p>
            <p>HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;Node.js&nbsp;&nbsp;&nbsp;Bootstrap</p>
            <div className="project-icons">
              <a href="https://github.com/ChrisAltay" target="_blank" className="icon1">
                <i className="fab fa-github">Code</i>
              </a>
              <a href="https://chrisaltay.com" target="_blank" className="icon">
                <i className="fas fa-download">Live Demo</i>
              </a>
            </div>
          </div>
          <img src={portfolio} alt="Portfolio image" title="Fun fact: You are looking at my portfolio right now"/>
        </div>

        <div className="project-item" data-aos="fade-up">
          <img src={logiclounge} alt="Project 2 image" />
          <div className="project-description">
            <h2>Logic Lounge</h2>
            <p>Logic Lounge is an innovative open-source Chat platform tailored to programmers worldwide to come together, network, 
            calloborate and help one another.</p>
            <p>HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;SQL&nbsp;&nbsp;&nbsp;MySQL&nbsp;&nbsp;&nbsp;PHP</p>
            <div className="project-icons">
              <a href="https://github.com/ChrisAltay" target="_blank" className="icon1">
                <i className="fab fa-github">Code</i>
              </a>
              <a href="https://project2demo.netlify.app" target="_blank" className="icon">
                <i className="fas fa-download">Live Demo</i>
              </a>
            </div>
          </div>
        </div>

        <div className="project-item" data-aos="fade-up">
          <div className="project-description">
            <h2>Shopping System </h2>
            <p>Created a website which allowed users to log in, log out, search,
               add, update and delete orders. This website is connected to a database.</p>
            <p>HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;SQL&nbsp;&nbsp;&nbsp;MySQL&nbsp;&nbsp;&nbsp;PHP</p>
            <div className="project-icons">
              <a href="https://github.com/ChrisAltay" target="_blank" className="icon1">
                <i className="fab fa-github">Code</i>
              </a>
              <a href="https://project3demo.netlify.app" target="_blank" className="icon">
                <i className="fas fa-download">Live Demo</i>
              </a>
            </div>
          </div>
          <img src={shoppingsystem} alt="Project 3 image" className="sis" />
        </div>

        <div className="project-item" data-aos="fade-up">
          <img src={moviemax} alt="Project 4 image" />
          <div className="project-description">
            <h2>MovieMax</h2>
            <p>Open-Source Movie Website inspired by Netflix tailored to all ages.
               Browse a variety of movie genres and selections with ease!</p>
            <p>Angular&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;TypeScript&nbsp;&nbsp;&nbsp;TMDB</p>
            <div className="project-icons">
              <a href="https://github.com/ChrisAltay" target="_blank" className="icon1">
                <i className="fab fa-github">Code</i>
              </a>
              <a href="https://moviemax-eta.vercel.app/" target="_blank" className="icon">
                <i className="fas fa-download">Live Demo</i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="project-item" data-aos="fade-up">
          <div className="project-description">
            <h2>Kean ACM Site</h2>
            <p>As Lead Developer for Kean University's ACM Club Website, I designed 
              and implemented a responsive, user-friendly platform that provides 
              ACM student members with essential resources and tools. This custom-domain 
              website serves as a hub for academic growth, offering easy access to events 
              that provide internships, REU programs, mentorship, and more, supporting 
              students in advancing their knowledge and involvement in computing fields.</p>
            <p>HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;JavaScript</p>
            <div className="project-icons">
              <a href="https://github.com/ChrisAltay" target="_blank" className="icon1">
                <i className="fab fa-github">Code</i>
              </a>
              <a href="https://keanacm.club/" target="_blank" className="icon">
                <i className="fas fa-download">Live Demo</i>
              </a>
            </div>
          </div>
          <img src={ACM} alt="Project 5 image" />
        </div>

        <div className="project-item" data-aos="fade-up">
          <div className="project-description">
            <h2>MealMatch</h2>
            <p>As project manager, UI/UX designer, and frontend developer, I led a team to build a responsive recipe web app using Agile methodology.
              I handled all documentation, task allocation, and end-to-end UI/UX design. I implemented mobile-friendly front-end code with Tailwind CSS
              and JavaScript, ensuring an intuitive experience. The project emphasized clean design, team coordination, and real-world functionality 
              using API data and secure user features.
            </p>
            <p>HTML&nbsp;&nbsp;&nbsp;TailwindCSS&nbsp;&nbsp;&nbsp;JavaScript&nbsp;MySQL&nbsp;PHP&nbsp;TheMealDB API</p>
            <div className="project-icons">
              <a href="https://github.com/ChrisAltay/MealMatch.git" target="_blank" className="icon1">
                <i className="fab fa-github">Code</i>
              </a>
              <a href="http://project.adamspencer.me/index.php" target="_blank" className="icon">
                <i className="fas fa-download">Live Demo</i>
              </a>
            </div>
          </div>
          <img src={MM} alt="Project 5 image" />
        </div>

      </div>
    </section>
  );
};
