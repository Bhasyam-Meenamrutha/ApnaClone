import React from 'react';
import { Phone, Heart, Star, MessageCircle, Share2, Copy } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-card">
              <div className="company-logo">
                <div className="icici-logo">
                  <span>i</span>
                </div>
              </div>
              <div className="hero-text">
                <h1 className="hero-title">Head of Field Sales</h1>
                <p className="hero-subtitle">at ICICI Bank</p>
              </div>
            </div>
          </div>
          
          
          <div className="hero-sidebar">
            <div className="ratings-card card">
              <h3 className="sidebar-title">Ratings & Reviews</h3>
              <div className="stats">
                <div className="stat">
                  <Phone className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-number">246</span>
                    <span className="stat-label">Preps</span>
                  </div>
                </div>
                <div className="stat">
                  <Heart className="stat-icon heart" />
                  <div className="stat-content">
                    <span className="stat-number">82%</span>
                    <span className="stat-label">Found helpful</span>
                  </div>
                </div>
                <div className="stat">
                  <Star className="stat-icon star" />
                  <div className="stat-content">
                    <span className="stat-number">81</span>
                    <span className="stat-label">Reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="interview-availability">
                <p className="availability-text">10 mins interview slot available</p>
              </div>
              
              <button className="btn btn-primary start-interview-btn">
                Start Interview
              </button>
            </div>
            
            <div className="share-card card">
              <h3 className="sidebar-title">Share with Friends</h3>
              <div className="social-icons">
                <button className="social-btn whatsapp">
                  <MessageCircle size={20} />
                </button>
                <button className="social-btn facebook">
                  <span className="fb-icon">f</span>
                </button>
                <button className="social-btn linkedin">
                  <span className="in-icon">in</span>
                </button>
                <button className="social-btn twitter">
                  <span className="x-icon">X</span>
                </button>
              </div>
              
              <div className="copy-link">
                <p className="copy-text">or copy link</p>
                <div className="copy-input-group">
                  <input
                    type="text"
                    value="https://apna.co/interview-prep/h"
                    readOnly
                    className="copy-input"
                  />
                  <button className="copy-btn">
                    <Copy size={16} />
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;