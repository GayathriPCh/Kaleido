// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BGImage from './BG.gif'; // Import the background image

function HomePage() {
  const homePageStyle = {
    backgroundImage: `url(${BGImage})`, // Reference the imported background image directly
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Set text color to white
    fontFamily: 'Arial, sans-serif', // Specify a custom font
  };

  const boxStyle = {
    width: '300px',
    height: '100px',
    borderRadius: '10px',
    background: 'linear-gradient(45deg, #4A148C, #9C27B0)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // Add glow effect
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white', // Set text color to white
  };

  return (
    <div style={homePageStyle}>
      
      {/* Box 1: What-If */}
      <Link to="/color-swap" style={linkStyle}>
        <div style={boxStyle}>
          <span style={{ fontFamily: 'Courier New, monospace' }}>What-If</span> {/* Use a different font */}
        </div>
      </Link>
      
      {/* Box 2: Historical Palettes */}
      <Link to="/palettes" style={linkStyle}>
        <div style={boxStyle}>
          <span style={{ fontFamily: 'Courier New, monospace' }}>Historical Palettes</span> {/* Use a different font */}
        </div>
      </Link>
      
      {/* Box 3: Symbolism */}
      <Link to="/symbolism" style={linkStyle}>
        <div style={boxStyle}>
          <span style={{ fontFamily: 'Courier New, monospace' }}>Symbolism</span> {/* Use a different font */}
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
