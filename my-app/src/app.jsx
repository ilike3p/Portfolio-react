import React, { useState } from "react";
import "./../src/app.scss";

// import Navigation from './components/Navigation';
import Navigation from "../src/components 2/utils/Navigation/Navigation";
import About from "../src/components 2/utils/AboutMe/Aboutme";
import Resume from "../src/components 2/utils/Resume/Resume";
import Portfolio from "./components/utils/PortfolioLists/PortfolioList.jsx";
import Contact from "../src/components 2/utils/Contact/Contact";
import Footer from "../src/components 2/utils/Footer/Footer";

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
