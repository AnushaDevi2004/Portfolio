
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-section">
            <h3>Anusha Devi</h3>
            <p>
              Frontend Developer passionate about building
              responsive, user-friendly, and modern web applications.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>

            <div className="social-links">
              <a
                href="https://github.com/AnushaDevi2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/anusha-devi-m-89b647239/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="manushadevi2004@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
  © {currentYear} Anusha Devi | Built with React.js ❤️
</p>

          <button
            className="top-button"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <style>
        {`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 3rem 2rem 1.5rem;
          margin-top: 3rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .footer-section h4 {
          margin-bottom: 1rem;
        }

        .footer-section p {
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 10px;
        }

        .footer-section a {
          color: var(--text-secondary);
          transition: 0.3s;
        }

        .footer-section a:hover {
          color: #667eea;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .social-links a {
          font-size: 1.5rem;
          color: #667eea;
          transition: 0.3s;
        }

        .social-links a:hover {
          transform: translateY(-4px);
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
           gap: 20px;
          flex-wrap: wrap;
        }

        .footer-bottom p {
          color: var(--text-secondary);
        }

        .top-button {
          background: linear-gradient(
            135deg,
            #667eea,
            #764ba2
          );
          border: none;
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }

        .top-button:hover {
          transform: translateY(-3px);
        }

        @media(max-width:768px){
          .footer-content{
            text-align:center;
          }

          .social-links{
            justify-content:center;
          }

          .footer-bottom{
            flex-direction:column;
            gap:15px;
          }
        }
        `}
      </style>
    </footer>
  );
}

export default Footer;