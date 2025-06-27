import React from 'react';
import { Lock } from 'lucide-react';
import './AfterSection.css';

const AfterSection = () => {
  return (
    <div className="after-section">
      <h2 className="section-title">After this interview, You'll get</h2>
      
      <div className="benefits-list">
        <div className="benefit-item">
          <div className="benefit-content">
            <p className="benefit-text">
              Get an Interview Score and Rating amongst all the candidates
            </p>
          </div>
        </div>
        
        <div className="benefit-item">
          <div className="benefit-content">
            <p className="benefit-text">
              Detailed Analysis and Feedback on how the interview went
            </p>
          </div>
        </div>
        
        <div className="benefit-item">
          <div className="benefit-content">
            <p className="benefit-text">
              Question wise tips to improve your answers and deliver next time
            </p>
          </div>
        </div>
      </div>
      
      <div className="privacy-notice">
        <div className="privacy-icon">
          <Lock size={20} />
        </div>
        <p className="privacy-text">
          This is a mock interview for practice purposes only. Your responses and feedback won't be shared with any recruiters.
        </p>
      </div>
      
      <div className="ai-disclaimer">
        <div className="ai-badge">
          <span className="ai-text">AI</span>
        </div>
        <p className="disclaimer-text">
          This page contains AI-generated content, which may occasionally be inaccurate or irrelevant.
        </p>
      </div>
    </div>
  );
};

export default AfterSection;