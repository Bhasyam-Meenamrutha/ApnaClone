import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './PrepareSection.css';

const PrepareSection = () => {
  const [activeTab, setActiveTab] = useState('Technical');
  const [expandedQuestion, setExpandedQuestion] = useState(0);

  const tabs = ['Technical', 'Behavioural', 'Mission-vision'];
  
  const questions = [
    {
      question: "How do you drive sales in a competitive market?",
      answer: "I analyze market trends and customer needs to tailor sales strategies. Building strong client relationships and leveraging team strengths are key to outperforming competitors."
    },
    {
      question: "What CRM tools have you used effectively?",
      answer: "I have extensively used Salesforce and Zoho CRM to track sales pipelines and customer interactions. These tools help optimize sales processes and improve customer engagement."
    },
    {
      question: "How do you manage a large sales team?",
      answer: "I set clear goals, conduct regular training, and foster open communication. Empowering team members with resources and feedback drives performance and morale."
    },
    {
      question: "Explain your approach to sales forecasting.",
      answer: "I combine historical data analysis with market insights to create accurate forecasts. Regular updates and adjustments ensure targets remain realistic and achievable."
    }
  ];

  return (
    <div className="prepare-section">
      <h2 className="section-title">Prepare for the Interview</h2>
      
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="questions-list">
        {questions.map((item, index) => (
          <div key={index} className="question-item">
            <button
              className="question-header"
              onClick={() => setExpandedQuestion(expandedQuestion === index ? -1 : index)}
            >
              <span className="question-text">Q. {item.question}</span>
              {expandedQuestion === index ? (
                <ChevronUp className="chevron" />
              ) : (
                <ChevronDown className="chevron" />
              )}
            </button>
            {expandedQuestion === index && (
              <div className="question-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepareSection;