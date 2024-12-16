import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Content Overlay */}
      <div className="about-overlay">
        <div className="about-text">
          <h2>Discover Unforgettable Events</h2>
          <p>
            Welcome to <strong>Tikiti</strong>, your ultimate destination for exploring and purchasing tickets to the best events in town. Our mission is to bring people closer to the experiences they love with a platform that's intuitive, fast, and secure.
          </p>
          <p>
            From electrifying concerts to cultural festivals, we ensure every moment is unforgettable. Discover, book, and enjoy amazing events effortlessly with Tikiti.
          </p>
          <a href="/learn-more" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
