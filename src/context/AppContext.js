// src/context/AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContext.Provider value={{ 
      language, 
      darkMode, 
      scrolled,
      t, 
      toggleLanguage, 
      toggleDarkMode 
    }}>
      {children}
    </AppContext.Provider>
  );
};