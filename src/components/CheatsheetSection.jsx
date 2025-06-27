import React from 'react';
import { Lock } from 'lucide-react';
import './CheatsheetSection.css';

const CheatsheetSection = () => {
  const cheatsheets = [
    {
      title: "Questions like 'Tell me about a time when...'",
      subtitle: "For Field Sales Executive",
      description: "In my previous role at XYZ Corp, I was tasked with expanding our market presence in a challenging territory...",
      locked: false
    },
    {
      title: "Questions focusing on managing a distributed sales team",
      subtitle: "When designing a distributed sales system...",
      description: "Focus on building strong relationships and clear communication channels. Utilize technology platforms...",
      locked: true
    },
    {
      title: "Questions like 'How would you go about...'",
      subtitle: "For Field Sales roles",
      description: "When designing a distributed sales system, I prioritize understanding the market landscape...",
      locked: true
    }
  ];

  return (
    <div className="cheatsheet-section">
      <h2 className="section-title">Personalised Interview Cheatsheets</h2>
      <p className="section-subtitle">Based on your profile</p>
      
      <div className="cheatsheet-grid">
        {cheatsheets.map((sheet, index) => (
          <div key={index} className={`cheatsheet-card card ${sheet.locked ? 'locked' : ''}`}>
            {sheet.locked && (
              <div className="lock-overlay">
                <div className="lock-icon-container">
                  <Lock size={24} className="lock-icon" />
                  <span className="locked-text">Locked</span>
                </div>
                <p className="unlock-text">
                  This will get unlocked after your interview is completed.
                </p>
              </div>
            )}
            <div className="cheatsheet-content">
              <h3 className="cheatsheet-title">{sheet.title}</h3>
              <p className="cheatsheet-subtitle">{sheet.subtitle}</p>
              <p className="cheatsheet-description">{sheet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheatsheetSection;