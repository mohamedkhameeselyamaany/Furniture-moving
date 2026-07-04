// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const { language, darkMode, scrolled, t, toggleLanguage, toggleDarkMode } = useApp();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/services', label: t.services, hasDropdown: true },
    { path: '/blog', label: t.blog },
    { path: '/contact', label: t.contact },
  ];

  const serviceLinks = [
    { path: '/services/moving', label: t.moving },
    { path: '/services/packing', label: t.packing },
    { path: '/services/install', label: t.install },
    { path: '/services/crane', label: t.crane },
    { path: '/services/furniture', label: t.furniture },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">ي</span>
          </div>
          <div className="hidden md:block">
            <h1 className={`font-bold text-lg md:text-xl ${scrolled ? 'text-primary dark:text-white' : 'text-white'}`}>
              {language === 'ar' ? 'اليماني' : 'El Yamany'}
            </h1>
            <p className={`text-xs ${scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white/80'}`}>
              {language === 'ar' ? 'لنقل الأثاث' : 'Furniture Moving'}
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    className={`flex items-center gap-1 font-semibold transition-colors ${
                      isActive(link.path) || servicesDropdown
                        ? 'text-secondary' 
                        : scrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary' : 'text-white hover:text-secondary'
                    }`}
                  >
                    {link.label}
                    <FaChevronDown className={`transition-transform text-on-green ${servicesDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                    servicesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-secondary' 
                      : scrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary' : 'text-white hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300' : 'hover:bg-white/20 text-white'
            }`}
            title={darkMode ? (language === 'ar' ? 'تفعيل الوضع الفاتح' : 'Enable Light Mode') : (language === 'ar' ? 'تفعيل الوضع المظلم' : 'Enable Dark Mode')}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleLanguage}
            className={`px-3 py-1 rounded-full font-bold text-sm transition-colors ${
              scrolled ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-primary dark:text-white' : 'text-white'
            }`}
          >
            {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl transition-all duration-300 ${
        mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="p-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.path}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                    className="w-full text-right px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex justify-between items-center"
                  >
                    {link.label}
                    <FaChevronDown className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesDropdown && (
                    <div className="mr-4 space-y-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setMobileMenu(false)}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;