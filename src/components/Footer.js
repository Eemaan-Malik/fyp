import React from 'react';
import '../index.css'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = ({ setFormType }) => { // Accept setFormType as a prop
  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    const email = e.target.email.value;
    if (email) {
      // Add your subscription logic here (e.g., send email to the server)
      console.log(`Subscribed with email: ${email}`);
      e.target.reset(); // Reset the form
    } else {
      alert('Please enter a valid email address.'); // Simple validation alert
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <form onSubmit={handleNewsletterSubmit}>
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Architext. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
