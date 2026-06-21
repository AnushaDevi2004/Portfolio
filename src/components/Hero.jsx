import React from 'react';


function Hero() {
  return (
    <section id="home" className="hero">
  <div className="hero-content">
    <h1>
      Hi, I'm <span className="highlight">Anusha Devi</span>
    </h1>

    <h2>Frontend Developer</h2>

    <p>
      Frontend Developer specializing in React.js,
  JavaScript, and responsive web applications. Passionate about
  building modern user experiences and solving real-world problems.
    </p>

    <div className="buttons">
      <a href="#projects" className="cta-button">
        View Projects
      </a>

      <a
  href="/resume.pdf"
  download="Anusha Devi M Frontend Developer.pdf"
  className="resume-button"
>
  Download Resume
</a>
    </div>

    <div className="hero-stats">
      <div>
        <h3>3+</h3>
        <span>Projects</span>
      </div>

      <div>
        <h3>5+</h3>
        <span>Technologies</span>
      </div>

      <div>
        <h3>100%</h3>
        <span>Responsive</span>
      </div>
      </div>
      <div className="social-links">
  <a href="https://www.linkedin.com/in/anusha-devi-m-89b647239/">LinkedIn</a>
  <a href="https://github.com/AnushaDevi2004">GitHub</a>
  <a href="mailto:manushadevi2004@gmail.com">Email</a>
</div>
    
  </div>
  <style>
    {`
    .hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e293b 100%
  );
}

.hero-content {
  max-width: 900px;
}

.hero h1 {
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 1rem;
}

.hero h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size:  clamp(1.3rem, 5vw, 2rem);;
}

.hero p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: auto;
  margin-bottom: 2rem;
}

.highlight {
  background: linear-gradient(
    135deg,
    #667eea,
    #764ba2
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.cta-button,
.resume-button {
  padding: 14px 30px;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    #667eea,
    #764ba2
  );
  transition: 0.3s;
}

.cta-button:hover,
.resume-button:hover {
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.hero-stats div {
  text-align: center;
}

.social-links{
margin-top:20px;
display:flex;
justify-content: center;
}

.hero-stats h3 {
  color: #667eea;
  font-size: 2rem;
}

.hero-stats span {
  color: var(--text-secondary);
}

@media(max-width:768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .hero h2 {
    font-size: 1.5rem;
  }

  .hero-stats {
    gap: 20px;
  }
}
    `}
  </style>
</section>
    
    
  );
}

export default Hero;