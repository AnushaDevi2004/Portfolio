import React from "react";

function Skills() {
  const frontend = ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"];
  const backend = ["Node.js", "Express.js","PHP","Python"];
  const database = ["MongoDB", "MySQL"];
  const tools = ["Git", "GitHub", "VS Code", "Postman"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          {frontend.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          {backend.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          {database.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          {tools.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          padding: 5rem 2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
          gap: 2rem;
        }

        .skill-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid var(--border);
        }

        .skill-card:hover{
          transform: translateY(-8px);
        }

        .skill-card h3 {
          color: #667eea;
          margin-bottom: 1rem;
        }

        .skill-card span {
          display: inline-block;
          margin: 5px;
          padding: 8px 14px;
          border-radius: 20px;
          background: rgba(102,126,234,.15);
          color: #667eea;
        }
      `}</style>
    </section>
  );
}

export default Skills;