
import React from 'react';
import './css/aboutUs.css'; 
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    
    <div className="about-us-container">
            <div className="phishdefender-navbar">
        <div className="phishdefender-navbar-right">
          <Link to="/">
          <button className="phishdefender-button home-button">
            Home
          </button>
          </Link>
          <button className="phishdefender-button download-button">
            Download
          </button>
        </div>
      </div>
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>

      <div className="about-us-content">
        <section className="about-us-section">
          <h2>How we started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Our goals</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Our Team</h2>
          <div className="team-members-container">
            <div className="team-member">
              <img src="member1.png" alt="Team Member 1" />
              <h3>Stephany Joy C. Alipin</h3>
              <p>Admin</p>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src="member1.png" alt="Team Member 2" />
              <h3>Jamil A. Curato</h3>
              <p>Admin</p>
              <p>Technical Writer</p>
            </div>
            <div className="team-member">
              <img src="member1.png" alt="Team Member 3" />
              <h3>Anna Marie B. Manaog</h3>
              <p>Admin</p>
              <p>Front - end Developer</p>
            </div>
            <div className="team-member">
              <img src="member1.png" alt="Team Member 4" />
              <h3>Darielle Roechie B. Mendoza</h3>
              <p>Admin</p>
              <p>UI / UX Designer</p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AboutUs;
