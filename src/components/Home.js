import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000); // Time for welcome to appear after the flower section
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Flower Section with Image and Witty Line */}
      <section className="flower-section">
        <img 
         src={`${process.env.PUBLIC_URL}/crocus_watercolor-removebg-preview.png`} alt="Flower" 
         className="flower-image"
        />
        <div className="witty-line">
          I code, I design, I bloom like this flower!
        </div>
      </section>

      {/* Welcome Section with Description */}
      <section className={`welcome-section ${showWelcome ? 'visible' : ''}`}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I'm Sanjana Bamnavat, a passionate developer and designer focused on creating beautiful, intuitive, and efficient user experiences. 
          Explore my work to see how I blend design and technology to deliver innovative solutions.
        </p>
      </section>
    </div>
  );
};

export default Home;

