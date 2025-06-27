import React from 'react';
import AboutSection from './AboutSection.jsx';
import CheatsheetSection from './CheatsheetSection.jsx';
import PrepareSection from './PrepareSection.jsx';
import AfterSection from './AfterSection.jsx';
import './InterviewContent.css';

const InterviewContent = () => {
  return (
    <section className="interview-content">
      <div className="container">
        <div className="content-wrapper">
          <AboutSection />
          <CheatsheetSection />
          <PrepareSection />
          <AfterSection />
        </div>
      </div>
    </section>
  );
};

export default InterviewContent;