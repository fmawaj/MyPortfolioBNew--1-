
import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif'; 

export default function Layout() {
  return (
    <>
     
      <div style={{ position: 'relative', width: '100px', height: '100px', margin: '20px auto' }}>
       
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="50" fill="yellow" />
        </svg>
     
        <img
          src={football1}
          alt="football"
          style={{
            position: 'absolute',
            top: '10%', 
            left: '10%',
            width: '80%', 
            height: '80%' 
          }}
        />
      </div>

      <h1>My Portfolio</h1>
      
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/education">Education</Link> | 
        <Link to="/project">Project</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      <br/>

      <hr />
    </>
  );
}




