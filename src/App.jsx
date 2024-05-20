import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./Components/GetStarted";
import Description from "./Components/Description";
import AboutUs from "./Components/AboutUs";

function App() {
  const handleGetStartedClick = () => {
    window.open("/description", "_self");
  };

  return (
    <Router>
      <div className="phishdefender-container">
        <Routes>
          <Route exact path="/" element={<GetStarted handleGetStartedClick={handleGetStartedClick} />} />
          <Route path="/description" element={<Description />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;