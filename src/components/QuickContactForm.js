// src/components/QuickContactForm.js
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const QuickContactForm = () => {
  const { language } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_3ls0d8o',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_duxr486',
        {
          ...formData,
          message: `${language === 'ar' ? 'طلب عرض سعر سريع' : 'Quick Quote Request'} - ${formData.serviceType}`,
          from: language === 'ar' ? 'الصفحة الرئيسية' : 'Home Page'
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'ON-m9UiHGTUiTbWw-'
      );
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', serviceType: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(language === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: '', label: language === 'ar' ? 'اختر الخدمة' : 'Select Service' },
    { value: 'moving', label: language === 'ar' ? 'نقل أثاث' : 'Moving' },
    { value: 'packing', label: language === 'ar' ? 'تغليف' : 'Packing' },
    { value: 'install', label: language === 'ar' ? 'فك وتركيب' : 'Installation' },
    { value: 'crane', label: language === 'ar' ? 'ونش' : 'Crane' },
    { value: 'furniture', label: language === 'ar' ? 'أثاث' : 'Furniture' },
  ];

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
        <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
          {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {language === 'ar' ? 'سنتواصل معك قريباً' : 'We will contact you soon'}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-secondary hover:text-primary transition-colors text-sm font-medium"
        >
          {language === 'ar' ? 'إرسال طلب آخر' : 'Send Another Request'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitError && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
          <div className="flex items-center gap-2">
            <FaExclamationTriangle className="text-red-500 text-sm flex-shrink-0" />
            <p className="text-red-700 dark:text-red-300 text-sm">{submitError}</p>
          </div>
        </div>
      )}

      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm"
        />
      </div>

      <div>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {isSubmitting ? (
          <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
        ) : (
          <>
            <FaPaperPlane /> {language === 'ar' ? 'اطلب عرض سعر' : 'Get Quote'}
          </>
        )}
      </button>
    </form>
  );
};

export default QuickContactForm;