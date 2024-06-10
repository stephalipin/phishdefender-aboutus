import React from "react";
import { Link } from "react-router-dom";
import './css/description.css'
import Footer from "./Footer";

const How = () => {
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
      <div className="phishdefender-title-h"><span className="sub-phish">Phish</span>Defender</div>
      <div className="h-t">HOW IT WORKS</div>
      <div className="phishdefender-text">
      <p className="o-h">Phishing is a type of cyber attack where malicious actors deceive individuals into providing sensitive information, such as usernames, passwords, and credit card details, by masquerading as a trustworthy entity in electronic communications. These attacks often occur through fraudulent emails or websites that look remarkably similar to legitimate ones, tricking users into entering their confidential information. Phishing can lead to severe consequences for users, including identity theft, financial loss, and unauthorized access to personal and corporate data, thereby compromising security and privacy.</p>

    <p className="o-h">PhishDefender addresses this issue by providing a robust solution for detecting and mitigating phishing attacks. It works by scanning the URLs of websites, scraping the content, and predicting whether the site is legitimate or a potential phishing threat. The core of PhishDefender's detection mechanism is an ensemble method utilizing algorithms such as decision tree, random forest, and gradient boosting, implemented using the scikit-learn library in Python. By combining the strengths of these algorithms, PhishDefender achieves high accuracy in identifying phishing sites. Additionally, it enhances its analysis by providing users with web information obtained from the WhoIs library, which includes details about the domain's registration and ownership. This comprehensive approach ensures that users are better protected against phishing attacks, reducing the risk of falling victim to these deceptive practices.</p>

    <p className="o-h">While PhishDefender excels in detecting potential phishing sites by analyzing website content and predicting legitimacy using advanced algorithms, there are instances where it cannot scrape a website, similar to the limitations faced by systems like ChatGPT. In such cases, PhishDefender may not provide a definitive assessment of the site's safety but can still offer valuable information about the domain using the WhoIs library. This library retrieves data about the domain's registration and ownership, which can help users make informed decisions. Despite occasional limitations in web scraping and data availability from WhoIs, PhishDefender uses all accessible information to predict the likelihood of a site being a phishing threat whenever possible.</p>
      </div>
    </div>
  );
};
export default How;