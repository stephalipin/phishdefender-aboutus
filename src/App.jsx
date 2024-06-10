import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./Components/GetStarted";
import Description from "./Components/Description";
import AboutUs from "./Components/AboutUs";
import How from "./Components/How";
import icon from './Components/Assets/icon2.png';
import { Helmet } from 'react-helmet';
import Footer from "./Components/Footer";

function App() {

  return (
    <Router>
      <div className="phishdefender-container">
          <Helmet>
            <title>About Us</title>
            <link rel="icon" type="png" href={icon} sizes="32x32" />
          </Helmet>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route path="/how-it-works" element={<How/>}/>
          <Route path="/description" element={<Description />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;