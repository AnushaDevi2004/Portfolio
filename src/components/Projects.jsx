import React from "react";
import { projects } from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            {project.featured && (
              <span className="featured-badge">
                ⭐ Featured Project
              </span>
            )}

            <img
              src={
                Array.isArray(project.image)
                  ? project.image[0]
                  : project.image
              }
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  Live Demo
                </a>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects {
          background: var(--bg-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          position: relative;
          background: var(--bg-secondary);
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #f59e0b;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 10;
        }

        .project-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .project-content {
          padding: 1.2rem;
        }

        .project-card h3 {
          margin-bottom: 0.8rem;
          color: var(--text-primary);
        }

        .project-card p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-stack span {
          background: rgba(102,126,234,0.15);
          color: #667eea;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .project-links a {
          flex: 1;
          text-align: center;
          padding: 12px;
          border-radius: 10px;
          font-weight: 600;
          transition: 0.3s;
        }

        .live-btn {
          background: linear-gradient(
            135deg,
            #667eea,
            #764ba2
          );
          color: ;
        }

        .github-btn {
          border: 1px solid #667eea;
          color: #667eea;
        }

        .project-links a:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-links {
            flex-direction: column;
          }

          .project-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;