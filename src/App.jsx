import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import InterviewContent from './components/InterviewContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <InterviewContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;