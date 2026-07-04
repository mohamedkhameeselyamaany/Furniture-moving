// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

const ScrollToTop = () => {
  const { language } = useApp();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 md:bottom-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-secondary text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } ${language === 'ar' ? 'right-6' : 'left-6'}`}
      title={language === 'ar' ? 'اذهب للأعلى' : 'Go to Top'}
    >
      <FaArrowUp className="text-lg md:text-xl" />
    </button>
  );
};

export default ScrollToTop;