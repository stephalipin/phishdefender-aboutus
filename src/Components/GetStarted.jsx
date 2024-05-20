import React from 'react';
import './css/get-started.css';
import logoImage from './Assets/Icon.png';
import { Link } from 'react-router-dom';

const GetStarted = ({ handleGetStartedClick }) => {
  return (
    <div className="phishdefender-container">
      <div className="phishdefender-navbar">
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
        <h1 className="phishdefender-title">PhishDefender</h1>
          <p className="phishdefender-description">
            Protect yourself from unsafe websites and browse with peace of mind with
            PhishDefender.
          </p>
          <div className="phishdefender-button-container">
            <button className="phishdefender-button get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
        <div className="phishdefender-content-container">
          <img src="Icon.png" alt="PhishDefender" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
