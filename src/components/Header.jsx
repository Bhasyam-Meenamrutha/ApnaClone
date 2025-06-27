import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <span className="logo-text">apna</span>
            </div>
            <nav className="nav">
              <div className="nav-item">
                <span>Jobs</span>
                <ChevronDown size={16} />
              </div>
              <div className="nav-item">
                <span>Job Prep</span>
                <span className="tag">NEW</span>
              </div>
              <div className="nav-item">
                <span>Contests</span>
                <span className="tag">NEW</span>
              </div>
              <div className="nav-item">
                <span>Degree</span>
                <span className="tag">NEW</span>
              </div>
              <div className="nav-item">
                <span>Resume Tools</span>
                <ChevronDown size={16} />
              </div>
            </nav>
          </div>
          
          <div className="header-center">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search jobs by title, company or location"
                className="search-input"
              />
            </div>
          </div>
          
          <div className="header-right">
            <button className="btn btn-outline">Employer Login</button>
            <button className="btn btn-secondary">Candidate Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;