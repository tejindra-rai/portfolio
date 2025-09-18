import React, { useState, useEffect } from 'react';
import './CSS/Projects.css';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const projects = [
  { 
    title: "Elegance Fashion Hub", 
    desc: "Modern e-commerce fashion platform design with responsive layouts and contemporary UI/UX principles.", 
    link: "https://www.figma.com/proto/KxCJyE1QqlZcqr05zUG5cs/Tejindra_Rai?node-id=285-2460&t=QjrMJDVdhWW5vwW6-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A22",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    status: "Completed"
  },
  { 
    title: "Kamakhya Smart Vending", 
    desc: "IoT-powered sanitary pad vending machine with smart inventory management and cashless payments.", 
    link: "https://kamakhya.netlify.app/",
    tech: ["IoT", "Arduino", "Web Development"],
    status: "Completed"
  },
  { 
    title: "Intelligent Window System", 
    desc: "Automated IoT window system that responds to weather conditions and air quality monitoring.", 
    link: "https://www.tinkercad.com/things/i27tbKj30go-smart-window",
    tech: ["Arduino", "IoT Sensors", "TinkerCAD"],
    status: "Completed"
  },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (link) => {
    if (link === "#") {
      alert("Project details coming soon!");
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const getStatusColor = (status) => {
    return status === "Completed" ? "status-completed" : "status-progress";
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent works and projects I've been involved in
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`project-card ${visibleCards.includes(i) ? 'animate-in' : ''}`}
              data-index={i}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.desc}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-actions">
                <button 
                  className="project-link"
                  onClick={() => handleProjectClick(project.link)}
                >
                  <span>View Project</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <p>More projects coming soon...</p>
          <button className="btn-more-projects">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;