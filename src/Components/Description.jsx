import React from "react";
import { Link } from "react-router-dom";
import './css/description.css'

const description = () => {
  return (
    <div className="phishdefender-container">        
    <div className="phishdefender-navbar">
        <div className="phishdefender-navbar-right">
        <Link to="/">
          <button className="phishdefender-button home-button">
            Home
          </button>
          </Link>
          <Link to="/about-us">
            <button className="phishdefender-button about-button">
              About Us
            </button>
          </Link>
        </div>
      </div>
      <div className="phishdefender-title">PhishDefender</div>
      <div className="phishdefender-text">
        A tool that can detect whether a link or site is a phishing site.
      </div>
      <div className="phishdefender-features">
        <div className="phishdefender-feature">
          <div className="phishdefender-feature-title">Real-time analysis</div>
          <div className="phishdefender-feature-text">
            Easily detect phishing links in real-time.
          </div>
        </div>
        <div className="phishdefender-feature">
          <div className="phishdefender-feature-title">Deceptive URLs</div>
          <div className="phishdefender-feature-text">
            Identifies deceptive URLs commonly associated with phishing.
          </div>
        </div>
        <div className="phishdefender-feature">
          <div className="phishdefender-feature-title">Fake login pages</div>
          <div className="phishdefender-feature-text">
            Identifies fake login pages that may attempt to trick users.
          </div>
        </div>
        <div className="phishdefender-feature">
          <div className="phishdefender-feature-title">Suspicious redirects</div>
          <div className="phishdefender-feature-text">
            Identifies suspicious redirects that may lead to malicious websites.
          </div>
        </div>
      </div>
      <div className="phishdefender-cta">
        <button className="phishdefender-button">Download</button>

      </div>
    </div>
  );
};
export default description;