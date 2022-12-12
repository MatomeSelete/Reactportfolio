// import ReactDOM from "react-dom/client"; 
import React from 'react'
import {  Routes, Route } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//================= components =====================
import './App.css';
// import NavBar from './components/navBar/navbar';
import WelcomePage from './components/welcome/welcomePage.js';
import NavBar from './components/navBar/navbar';
import './components/welcome/welcomeCss.css';
import PortfolioPage from './components/portfolio/portfolio.js';
import './components/portfolio/portfoliostyle.css';
import AboutPage from './components/about/about.js';
import './components/about/aboutstyle.css';
import ContactPage from './components/contact/contacts.js';
import './components/contact/contactsstyle.css';
import ResumePage from './components/resume/resume.js';
import './components/resume/resume.css'
import Navigation from './components/navigation/navigation.js';
import './components/navigation/navigation.css'



 function App() {
    return (
<>
<NavBar/>
<div className='container'>
        <Routes>
         
            <Route path="/" element={<WelcomePage />} ></Route>
            <Route path="portfolio.js" element={<PortfolioPage />} ></Route>
            <Route path="about.js" element={<AboutPage />} ></Route>
            <Route path="contacts.js" element={<ContactPage />} ></Route>
            <Route path="navigation.js" element={<Navigation />} ></Route>
         
     
        </Routes>
        </div>
   </>

      
    );
  }

  export default App;