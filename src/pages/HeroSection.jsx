import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <h2 className="hero-heading">
          Delicious <span>Foods</span>
        </h2>
        <div className="hero-image-container">
          <img src="/hero1.png" alt="hero1" className="hero-image" />
          <img src="/hero2.png" alt="hero2" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
