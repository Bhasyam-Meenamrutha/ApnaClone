import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-text">apna</span>
            </div>
            
            <div className="social-section">
              <h3 className="social-title">Follow us on social media</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={24} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={24} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="#" className="social-link">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <span className="copyright">© 2025 Apna | All rights reserved</span>
              <div className="legal-links">
                <a href="#" className="legal-link">Privacy Policy</a>
                <a href="#" className="legal-link">Terms & Conditions</a>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="app-section">
              <h3 className="app-title">Apply on the go</h3>
              <p className="app-subtitle">Get real time job updates on our App</p>
              
              <div className="app-download">
                <div className="download-button">
                  <div className="play-store-btn">
                    <div className="play-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="store-text">
                      <span className="get-it">GET IT ON</span>
                      <span className="store-name">Google Play</span>
                    </div>
                  </div>
                </div>
                
                <div className="qr-code">
                  <div className="qr-pattern">
                    <div className="qr-squares">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className={`qr-square ${Math.random() > 0.5 ? 'filled' : ''}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;