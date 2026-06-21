import  { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message sent successfully! 🎉");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            I'm actively looking for Frontend Developer opportunities.
            Feel free to reach out for collaborations, projects, or job
            opportunities.
          </p>

          <div className="info-item">
            <FaEnvelope />
            <span>manushadevi2004@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Tamil Nadu, India</span>
          </div>

          <div className="availability">
  <h4>Available For</h4>

  <p>✔ Frontend Developer Roles</p>
  <p>✔ React Developer Roles</p>
  <p>✔ Mern Stack Developer Roles</p>
</div>

          <div className="social-links">
            <a
              href="https://github.com/AnushaDevi2004"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/anusha-devi-m-89b647239/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {status && (
            <p className="status-message">
              {status}
            </p>
          )}
        </form>
      </div>

      <style>
        {`
        .contact {
          background: var(--bg-secondary);
          border-radius: 20px;
          padding: 4rem 2rem;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .contact-info p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .info-item svg {
          color: #667eea;
          font-size: 1.2rem;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 2rem;
        }

        .social-links a {
          font-size: 1.8rem;
          color: #667eea;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          transform: translateY(-4px);
        }

        .contact form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

       .contact input,
.contact textarea {
  width: 100%;
  padding: 14px 120px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
}
        .contact input:focus,
        .contact textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }

        .contact button {
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 100%
          );
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102,126,234,0.3);
        }

        .status-message {
          text-align: center;
          color: #667eea;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-info {
            text-align: center;
          }

          .info-item {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
        `}
      </style>
    </section>
  );
}

export default Contact;