import React from 'react';
import profilePic from './assets/profile.jpg'; 
import resume from './assets/resume.pdf'; 
import '../src/index.css';
import '../src/about.css';

export default function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src={profilePic} alt="Profile of Fatima Mawaj" className="profile-pic" />
            <h2>Fatima Mawaj</h2>
            <p>
                I am a passionate web designer committed to creating visually appealing and user-friendly websites.
                With experience in HTML, CSS, and JavaScript, I strive to enhance the user experience through effective design and innovative solutions.
            </p>
            <p>
                My mission is to create engaging and intuitive digital experiences that empower users and enhance their interaction with the web.
            </p>
            <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="btn">Download My Resume</button>
            </a>
        </div>
    );
}
