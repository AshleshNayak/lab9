import React from 'react'; 
import { Routes, Route, NavLink } from 'react-router-dom'; 
import Home from './Home.jsx'; 
import About from './About.jsx'; 
import Contact from './Contact.jsx'; 
import './App.css';
function App() { 
const linkStyle = ({ isActive }) => ({
  margin: '0 10px', 
  textDecoration: 'none', 
  color: isActive ? 'blue' : 'black', 
  fontWeight: isActive ? 'bold' : 'normal' 
}); 
return ( 
  <div> 
    <nav> 
        <NavLink to="/" style={linkStyle} end>Home</NavLink> 
        <NavLink to="/about" style={linkStyle}>About</NavLink> 
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink> 
        </nav> 
      <hr />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </div> 
  ); 
} 
export default App; 
