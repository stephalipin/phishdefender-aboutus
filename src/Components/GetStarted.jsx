import React from 'react';
import './css/get-started.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

const GetStarted = () => {

  const navigate = useNavigate();

  const handleGetStartedClick = (path) => {
    navigate(path);
  };

  return (
    <div className="phishdefender-container">
      <div className="phishdefender-navbar-g">
        <div className="phishdefender-navbar-right">
          <button className="phishdefender-button download-button">
            Download
          </button>
          <Link to="/about-us">
            <button className="phishdefender-button about-button">
              About Us
            </button>
          </Link>
        </div>
      </div>
      <div className="phishdefender-body">
        <div className="phishdefender-image-container">
          <div className="title-n">
            <p className="phishdefender-title-home"><span className='Phish'>Phish</span>Defender</p>
            <p className='sub'>Phishing Website Detector Extension <p>for Google Chrome</p></p>
          </div>
          <p className="phishdefender-description">
            Protect yourself from unsafe websites and browse with peace of mind with
            PhishDefender.
          </p>
          <ul className='check-list'>
            <li className="check-1">
                <FaCheck className='check'/>
                <p className='check-t'>Secured</p>
            </li>
            <li className="check-1">
                <FaCheck className='check'/>
                <p className='check-t'>Efficient</p>
            </li>
            <li className="check-1">
                <FaCheck className='check'/>
                <p className='check-t'>Safe Browsing</p>
            </li>
        </ul>
          <div className="phishdefender-button-container">
            <button className="phishdefender-button get-started-button" onClick={() => handleGetStartedClick('/description')}>
              Get Started
            </button>
            <button className="phishdefender-button get-started-button" onClick={() => handleGetStartedClick('/how-it-works')}>
              How it works
            </button>
          </div>
        </div>
        <div className="phishdefender-content-container">
          <img className='logo' src="newLogo.png" alt="PhishDefender" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
