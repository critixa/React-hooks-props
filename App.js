import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link}from "react-router-dom"
import Personal from './components/Personal';  
import SmallBusiness from './components/SmallBusiness';   
import AboutUs from './components/AboutUs';  
import Password1 from './components/Password1';
import './App.css';  

export default function App(){
  return(

    <Router>
      <div className="main">
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/Personal">Personal</Link></li>
            <li><Link to="/SmallBusiness">SmallBusiness</Link></li>
            <li><Link to="/AboutUs">AboutUs</Link></li>
            <li><Link to="/Password1">Password1</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/Personal" element={<Personal/>}/>
        <Route path="/SmallBusiness"element={<SmallBusiness/>}/>
        <Route path="/AboutUs"element={<AboutUs/>}/>
        <Route path="/Password1"element={<Password1/>}/>
      </Routes>
    <div classname="main1">
      
    </div>
    

      </div>
      </Router>
      
  );
}