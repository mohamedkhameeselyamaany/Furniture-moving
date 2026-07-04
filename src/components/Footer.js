// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaPhone, FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { t, language } = useApp();

  const quickLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/services', label: t.services },
    { path: '/blog', label: t.blog },
    { path: '/contact', label: t.contact },
  ];

  const services = [
    { path: '/services/moving', label: t.moving },
    { path: '/services/packing', label: t.packing },
    { path: '/services/install', label: t.install },
    { path: '/services/crane', label: t.crane },
    { path: '/services/furniture', label: t.furniture },
  ];

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">ي</span>
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl">{language === 'ar' ? 'اليماني' : 'El Yamany'}</h3>
                <p className="text-xs md:text-sm text-gray-300">{language === 'ar' ? 'لنقل الأثاث' : 'Furniture Moving'}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              {language === 'ar' 
                ? 'نحن شركة متخصصة في نقل الأثاث بأعلى معايير الجودة والأمان. نضمن لك تجربة نقل سلسة وآمنة.'
                : 'We are a specialized furniture moving company with the highest quality and safety standards.'}
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm md:text-base">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/share/198MDWyJ6J/" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm md:text-base">
                <FaFacebook />
              </a>
              <a href="tel:+201274664643"
                 className="w-9 h-9 md:w-10 md:h-10 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform text-sm md:text-base">
                <FaPhone />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 border-b-2 border-secondary pb-2 inline-block">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 border-b-2 border-secondary pb-2 inline-block">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 border-b-2 border-secondary pb-2 inline-block">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <FaPhone className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{language === 'ar' ? 'هاتف' : 'Phone'}</p>
                  <a href="tel:+201274664643" className="text-gray-300 hover:text-white">+20 127 466 4643</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/201274664643" className="text-gray-300 hover:text-white">+20 127 466 4643</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:khameesmohamed942@gmail.com" className="text-gray-300 hover:text-white">khameesmohamed942@gmail.com </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{language === 'ar' ? 'العنوان' : 'Address'}</p>
                  <p className="text-gray-300">{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;