import React, { useState } from "react";
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
//import {Routes, Route, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./components/Login";
import Home from "./components/Home";
import images from 'C:/designthinking/designthink/src/assets/images.jpg';
import Contactus from "./components/Contactus";
function App() {
  return (
    <div className="App">
       <div>
        <>
        <nav className="navbar navbar-expand-lg  " >
      <div className="container-fluid  bg-muted">
        
      <a class="navbar-brand text-light" href="Home"><img src={images} alt="" width="100px" /> chetha</a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item me-3">
            <Link className="nav-link active text-light"to="Home">Home</Link>
          </li>
          <li className="nav-item me-3 ">
            <Link className="nav-link text-light" to="contactus">Contactus</Link>
          </li>
          <li className="nav-item me-3 ">
            <Link className="nav-link text-light" to="login">Login/signup</Link>
          </li>
        </ul>
      </div>
      
    </div>
     </nav>
    
      </>
    
      <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/home" element={< Home />} />
            <Route path="/contactus" element={<Contactus />} />
           <Route path="/login" element={<Login/>}/>
          </Routes>
          </div>
    </div>
  );
}

export default App;
