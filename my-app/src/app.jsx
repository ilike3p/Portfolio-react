import React, { useState } from 'react';
import './app.scss';
// import Navigation from './components/Navigation';
import Navigation from "my-app/src/components/utils/Navigation/Navigation.jsx"
import About from "my-app/src/components/utils/About/aboutme.jsx";
import Resume from 'my-app/src/components/utils/Resume/Resume.jsx';
import Portfolio from 'my-app/src/components/utils/PortfolioLists/PortfolioList.jsx';
import Contact from 'my-app/src/components/utils/Contact/Contact.jsx';
import Footer from 'my-app/src/components/utils/Footer/Footer.jsx';


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
  )
}

export default App;