import React from 'react';
import ProfileImage from '../assets/ProfileImage.jpeg';

function About() {
  const skills = [
    'React',
    'JavaScript',
    'HTML/CSS',
    'Node.js',
    'Bootstrap',
    'MongoDB',
    'PHP',
    'Git & GitHub',
    'Responsive Design',
    'REST APIs',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="image-section">
            <img src={ProfileImage} alt="Anusha Devi" />

            <div className="stats">
              <div className="stat-card">
                <h3>3+</h3>
                <p>Projects</p>
              </div>

              <div className="stat-card">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Frontend Developer</h3>

            <p>
              Hi! I'm Anusha Devi, a passionate Frontend Developer who enjoys
              creating modern, responsive, and user-friendly web applications.
            </p>

            <p>
              I specialize in React, JavaScript, HTML, CSS, and Bootstrap.
              Currently, I'm exploring full-stack development and building
              projects that solve real-world problems.
            </p>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="education">
              <h3>Education</h3>

              <div className="education-card">
                <h4>Master of Computer Applications</h4>
                <p>Nesamony Memorial Christian College</p>
                <span>2024 - 2026</span>
              </div>

              <div className="education-card">
                <h4>Bachelor of Computer Science</h4>
                <p>Nesamony Memorial Christian College</p>
                <span>2021 - 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background: var(--bg-secondary);
          border-radius: 20px;
          margin: 2rem auto;
          padding: 4rem 2rem;
        }

        .about-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

        .image-section {
  flex: 1;
  min-width: 280px;
  text-align: center;
}

        .image-section img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid var(--primary);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .stats {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          justify-content: center;
        }

        .stat-card {
          background: var(--bg-primary);
          padding: 1rem;
          border-radius: 12px;
          min-width: 110px;
        }

        .stat-card h3 {
          color: var(--primary);
          font-size: 1.5rem;
        }

        .about-text {
          flex: 1;
          min-width: 280px;
        }

        .about-text h3 {
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .about-text p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .skill-tag {
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 100%
          );
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.9rem;
          transition: 0.3s;
        }

        .skill-tag:hover {
          transform: translateY(-3px);
        }

        .education {
          margin-top: 2rem;
        }

        .education-card {
          background: var(--bg-primary);
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1rem;
          border-left: 4px solid var(--primary);
        }

        .education-card h4 {
          margin-bottom: 0.5rem;
        }

        .education-card p {
          margin-bottom: 0.3rem;
        }

        .education-card span {
          color: var(--primary);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            text-align: center;
          }

          .image-section img {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}

export default About;