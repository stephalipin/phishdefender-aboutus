
import React from 'react';
import './css/aboutUs.css'; 
import { Link } from 'react-router-dom';
import Footer from './Footer';

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
        <h1 className='about-t'>ABOUT US</h1>
      </header>

      <div className="about-us-content">
        {/* <section className="about-us-section">
          <h2>How we started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </section> */}

        <section className="about-us-section">
          <h2>Our goals</h2>
          <p className='o-g'>
          The primary goal of PhishDefender developers is to create a robust and intelligent cybersecurity solution that proactively identifies, prevents, and mitigates phishing attacks. They aim to develop advanced algorithms and machine learning models capable of accurately detecting various phishing attempts, including email, website, and social engineering attacks. In addition to detection, PhishDefender emphasizes user education and awareness by implementing features that help users recognize phishing attempts and promote safer online behaviors through interactive training modules and real-time alerts.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Our Team</h2>
          <div className="team-members-container">
            <div className="team-member">
              <img src="Steph.png" alt="Team Member 1" />
              <h3>Stephany Joy C. Alipin</h3>
              {/* <p>Admin</p> */}
              <p>System Developer</p>
            </div>
            <div className="team-member">
              <img src="Jam.png" alt="Team Member 2" />
              <h3>Jamil A. Curato</h3>
              <div className='div-j'></div>
              {/* <p>Admin</p> */}
              <p>Technical Writer</p>
            </div>
            <div className="team-member">
              <img src="Anna.png" alt="Team Member 3" />
              <h3>Anna Marie B. Manaog</h3>
              {/* <p>Admin</p> */}
              <p>Front - end Developer</p>
            </div>
            <div className="team-member">
              <img src="Dar.png" alt="Team Member 4" />
              <h3>Darielle Roechie B. Mendoza</h3>
              {/* <p>Admin</p> */}
              <p>UI / UX Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
