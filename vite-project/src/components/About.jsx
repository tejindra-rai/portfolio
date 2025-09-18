import React from "react";
import { FaAward, FaUserGraduate } from "react-icons/fa";
import "./CSS/About.css";

const About = React.memo(() => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/myself.jpg"
            alt="Tejindra Rai - IoT Developer and UI/UX Designer"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" aria-hidden="true" />
              <h3>Experience</h3>
              <p>2+ years <br /> Frontend Development</p>
            </div>

            <div className="about-card">
              <FaUserGraduate className="about-icon" aria-hidden="true" />
              <h3>Education</h3>
              <p>Studying B.Sc.in <br /> Sunway College Kathmandu</p>
            </div>
          </div>

          <p className="about-text">
            I'm Tejindra Rai, an innovative IoT Developer and UI/UX Designer based in Kapan, Kathmandu.
            With over 2 years of experience in frontend development, I specialize in creating intelligent
            automation solutions and user-centered designs. I'm passionate about bridging the gap between
            technology and user experience, developing projects like IoT-based smart vending machines and
            automated systems. Currently pursuing my Bachelor's degree at Sunway College Kathmandu,
            I combine academic knowledge with practical skills in Arduino, circuit design, and modern
            web technologies to create meaningful solutions for real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;