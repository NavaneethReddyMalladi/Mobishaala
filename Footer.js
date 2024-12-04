import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h4>About Us</h4>
                    <p>
                        BPO Clone is a leading provider of business process outsourcing services. 
                        We deliver tailored solutions to meet your needs.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul className="social-icons">
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer">🌐 Twitter</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">🌐 LinkedIn</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">🌐 Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Subscribe to Our Newsletter</h4>
                    <form className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            aria-label="Enter your email for newsletter subscription"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 BPO Clone. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
