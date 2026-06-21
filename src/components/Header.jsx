import React, { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import { BsBriefcase } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 70;

      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div
            className="logo"
            onClick={() => scrollToSection('home')}
          >
            <span className="logo-text">Anusha</span>
            <span className="logo-highlight">Devi</span>
          </div>

          <nav className="desktop-nav">
            <a
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>

            <a
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>

            <a
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>

            <a
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </nav>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <a
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            <span className="nav-icon">
              <AiFillHome />
            </span>
            Home
          </a>

          <a
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            <span className="nav-icon">
              <IoMdPerson />
            </span>
            About
          </a>

          <a
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            <span className="nav-icon">
              <BsBriefcase />
            </span>
            Projects
          </a>

          <a
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            <span className="nav-icon">
              <MdEmail />
            </span>
            Contact
          </a>
        </div>
      </header>

      <div
        className={`overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <style>
        {`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .header-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .desktop-nav {
        display: flex;
        gap: 3rem;
        margin-left: auto;
      }

        .logo {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          font-size: 1.8rem;
          font-weight: 700;
          cursor: pointer;
          margin-right: 80px;
        }

        .logo-text {
          color: white;
        }

        .logo-highlight {
          color: #667eea;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .desktop-nav a {
          color: white;
          cursor: pointer;
          font-weight: 500;
          position: relative;
        }

        .desktop-nav a.active,
        .desktop-nav a:hover {
          color: #667eea;
        }

        .desktop-nav a.active::after,
        .desktop-nav a:hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 2px;
          background: #667eea;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1101;
          position: relative;
        }

        .hamburger span {
          width: 28px;
          height: 3px;
          background: white;
          transition: 0.3s;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 75%;
          max-width: 300px;
          height: 100vh;
          background: #0f172a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          transition: right 0.4s ease;
          z-index: 1000;
          border-left: 1px solid var(--border);
        }

        .mobile-nav.active {
          right: 0;
        }

        .mobile-nav a {
          width: 220px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: white;
          font-size: 1.4rem;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        .mobile-nav a.active,
        .mobile-nav a:hover {
          background: rgba(102,126,234,0.15);
          color: #667eea;
        }

        .nav-icon {
          font-size: 1.5rem;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          z-index: 999;
        }

        .overlay.active {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .header {
            padding: 1rem;
          }

          .logo {
            font-size: 1.3rem;
          }
        }

        @media (min-width: 769px) {
          .mobile-nav,
          .overlay {
            display: none;
          }
        }
        `}
      </style>
    </>
  );
}

export default Header;