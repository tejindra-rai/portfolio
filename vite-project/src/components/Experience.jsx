import React, { useState, useEffect } from 'react';
import './CSS/Experience.css';

const Experience = () => {
  const [visibleSection, setVisibleSection] = useState('');

  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "SASS", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
    { name: "TypeScript", level: "Basic" },
    { name: "Material UI", level: "Intermediate" }
  ];

  const backendSkills = [
    { name: "PostgreSQL", level: "Basic" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "MongoDB", level: "Basic" },
    { name: "Python", level: "Basic" }
  ];

  const experiences = [
    {
      year: "2023-Present",
      role: "Full-Stack Developer",
      company: "Freelance",
      description: "Building responsive web applications using React, Node.js, and modern development practices. Collaborating with clients to deliver high-quality digital solutions that meet business requirements.",
      achievements: ["15+ successful projects completed", "100% client satisfaction rate", "Modern tech stack expertise", "Agile development methodology"]
    },
    {
      year: "2022-2023",
      role: "Frontend Developer",
      company: "Learning & Projects",
      description: "Focused on mastering React ecosystem, modern CSS frameworks, and JavaScript fundamentals. Built multiple personal projects to strengthen problem-solving skills and UI/UX design capabilities.",
      achievements: ["React.js certification earned", "8 major projects completed", "Responsive design mastery", "Version control proficiency"]
    },
    {
      year: "2021-2022",
      role: "Web Development Student",
      company: "Self-Taught",
      description: "Started journey in web development by learning HTML, CSS, and JavaScript basics. Built foundation knowledge through online courses, documentation reading, and hands-on practice projects.",
      achievements: ["HTML/CSS mastery", "JavaScript fundamentals", "First portfolio website", "Problem-solving mindset"]
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree",
      institution: "University of Technology",
      duration: "2019-2023",
      icon: "🎓"
    },
    {
      degree: "Web Development Certification",
      institution: "Online Learning Platform",
      duration: "2021-2022",
      icon: "💻"
    },
    {
      degree: "React Specialist Course",
      institution: "Tech Academy",
      duration: "2022",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) observer.observe(experienceSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="experience-container">
        {/* Header */}
        <div className="experience-header">
          <p className="subtitle">Explore My</p>
          <h2>Experience</h2>
          <p>Technical skills and professional journey in web development</p>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {/* Frontend Development */}
          <div className="skill-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-check"></div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill-category">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-check"></div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="experience-cta">
          <div className="cta-content">
            <h3>Ready to Collaborate?</h3>
            <p>Let's discuss how my experience can contribute to your next project!</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-primary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact Me
              </a>
              <a href="#projects" className="cta-secondary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;