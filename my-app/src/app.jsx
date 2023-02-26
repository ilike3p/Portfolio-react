import React, { useState } from "react";
import "./app.scss";

// import Navigation from './components/Navigation';
import Navigation from "../../my-app/src/components/utils/Navigation/Navigation.jsx.js.js";
import About from "../../my-app/src/components/utils/About/aboutme.jsx.js.js";
import Resume from "./components/utils/Resume/Resume.jsx";
import Portfolio from "./components/utils/PortfolioLists/PortfolioList.jsx";
import Contact from "./components/utils/Contact/Contact.jsx";
import Footer from "./components/utils/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navigation></Navigation>
      <div className="sections">
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
