import React from 'react';
import '../css/stickyheader.css';
import '../css/Footer.css';

export const Footer = () => {
  return (
    <section id="footer" className="contact-section">
      <div className="allcontent">
        <div className="infosections">
          <div className="leftinfo">
            <h1 className="">Let's work together!</h1>
            <p>CA.</p>
          </div>
          
          <div className="rightinfo">
            <h5>Connect with me</h5>
            <ul className="infolinks">
              <li><a href="mailto:chris.altay@gmail.com">Email</a></li>
              <hr></hr>
              <li><a href="https://github.com/ChrisAltay">GitHub</a></li>
              <hr></hr>
              <li><a href="https://www.linkedin.com/in/christopher-paredes1/">LinkedIn</a></li>
              
            </ul>
          </div>
        </div>

        <div className="footersection">
          <p>&copy; 2025 Christopher Altagracia. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
