// src/components/FloatingContact.js
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FaCommentDots, FaTimes, FaWhatsapp, FaFacebook, FaPhone } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useApp();

  const contacts = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: t.whatsapp,
      href: 'https://wa.me/201274664643',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      label: t.facebook,
      href: 'https://www.facebook.com/share/198MDWyJ6J/',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: t.call,
      href: 'tel:+201274664643',
      color: 'bg-secondary hover:bg-yellow-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className={`flex flex-col gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 md:gap-3 ${contact.color} text-white px-3 md:px-4 py-2 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-all font-bold text-sm md:text-base`}
          >
            <span className="hidden sm:inline whitespace-nowrap">{contact.label}</span>
            {contact.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl md:text-3xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-red-500 rotate-45' : 'bg-primary rotate-0'
        }`}
        title={isOpen ? 'إغلاق' : 'تواصل معنا'}
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </button>
    </div>
  );
};

export default FloatingContact;