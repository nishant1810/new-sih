import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import './Header.css'; // Import CSS

const Header = () => {
  const { t, i18n } = useTranslation(); // For translations
  

  
 

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <nav className="header-container">
        <div className="logo-container">
          
          <img 
            src="./logo.png" 
            alt={t('logo_secondary')}
            className="right-logo"
          />
        </div>

        <div className="search-and-buttons">
          <div className="search-bar">
            <input
              type="text"
              placeholder={t('Enter scheme name to search...')}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>

          

          <div className="language-switch">
            <i className="fas fa-language"></i>
            <span onClick={() => handleLanguageChange('en')} className="language-option">Eng</span>
            <span onClick={() => handleLanguageChange('hi')} className="language-option">हिंदी</span>
          </div>


         
        </div>
        <button className="sign-in-button">
            {t('Sign In')} <i className="fas fa-arrow-right"></i>
          </button>
      </nav>
    </header>
  );
};

export default Header;
