import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <header className="portfolio-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Portfolio</h1>
      </header>

      <main>
        <section className="portfolio-about">
          <h2>About Me</h2>
          <p>
            Welcome! I am a creative student working on web projects, and I love good design and interactivity.
          </p>
        </section>

        <section className="portfolio-projects">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Project 1</h3>
            <p>This is an example of a great web project.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Another project showcasing my skills.</p>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>&copy; 2024 - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Portfolio;
