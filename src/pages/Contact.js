
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FaPhone, FaWhatsapp, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { language, t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    from: '',
    to: '',
    message: '',
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
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'ON-m9UiHGTUiTbWw-'
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: '', from: '', to: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(language === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: '', label: language === 'ar' ? 'اختر نوع الخدمة' : 'Select Service Type' },
    { value: 'moving', label: t.moving },
    { value: 'packing', label: t.packing },
    { value: 'install', label: t.install },
    { value: 'crane', label: t.crane },
    { value: 'furniture', label: t.furniture },
    { value: 'other', label: language === 'ar' ? 'أخرى' : 'Other' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' ? 'نحن هنا لمساعدتك. تواصل معنا للحصول على عرض سعر مجاني' : 'We are here to help. Contact us for a free quote'}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaPhone />
              </div>
              <h3 className="font-bold text-primary dark:text-white mb-2 text-sm md:text-base">{language === 'ar' ? 'هاتف' : 'Phone'}</h3>
              <a href="tel:+201274664643" className="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors text-xs md:text-sm">+20 1274664643</a>
            </div>
            <div className="card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaWhatsapp />
              </div>
              <h3 className="font-bold text-primary dark:text-white mb-2 text-sm md:text-base">WhatsApp</h3>
              <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors text-xs md:text-sm">+20 127 466 4643</a>
            </div>
            <div className="card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaFacebook />
              </div>
              <h3 className="font-bold text-primary dark:text-white mb-2 text-sm md:text-base">Facebook</h3>
              <a href="https://www.facebook.com/share/198MDWyJ6J/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors text-xs md:text-sm">Al Yamany Moving</a>
            </div>
            <div className="card p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-bold text-primary dark:text-white mb-2 text-sm md:text-base">{language === 'ar' ? 'العنوان' : 'Address'}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6 md:mb-8">
                {language === 'ar' ? 'نموذج التواصل' : 'Contact Form'}
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                    {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {language === 'ar' ? 'سنقوم بالتواصل معك في أقرب وقت' : 'We will contact you as soon as possible'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    {language === 'ar' ? 'إرسال رسالة جديدة' : 'Send New Message'}
                  </button>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl">
                      <div className="flex items-center gap-3">
                        <FaExclamationTriangle className="text-red-500 text-xl flex-shrink-0" />
                        <p className="text-red-700 dark:text-red-300 font-medium">{submitError}</p>
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.name} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm md:text-base"
                      placeholder={language === 'ar' ? 'اكتب اسمك' : 'Enter your name'}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.email} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm md:text-base"
                        placeholder={language === 'ar' ? 'اكتب إيميلك' : 'Enter your email'}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.phone} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm md:text-base"
                        placeholder={language === 'ar' ? 'اكتب رقم تليفونك' : 'Enter your phone'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.serviceType} *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm md:text-base"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.from}</label>
                      <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm md:text-base"
                        placeholder={language === 'ar' ? 'من أين؟' : 'From where?'}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.to}</label>
                      <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-sm md:text-base"
                        placeholder={language === 'ar' ? 'إلى أين؟' : 'To where?'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">{t.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none text-sm md:text-base"
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                      <>
                        <FaPaperPlane /> {t.send}
                      </>
                    )}
                  </button>
                </form>
                </>
              )}
            </div>

            {/* Map & Social */}
            <div className="space-y-6 md:space-y-8">
              <div className="card p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4 md:mb-6">
                  {language === 'ar' ? 'موقعنا' : 'Our Location'}
                </h3>
                <div className="rounded-xl overflow-hidden h-64 md:h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d31.235678901234567!3d30.044444444444444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMTQuNSJF!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4 md:mb-6">
                  {language === 'ar' ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg md:text-xl">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">WhatsApp</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">+20 127 466 4643</p>
                    </div>
                  </a>
                  <a href="tel:+201274664643" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg md:text-xl">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">{language === 'ar' ? 'اتصال' : 'Call'}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">+20 127 466 4643</p>
                    </div>
                  </a>
                  <a href="mailto:info@alyamany.com" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg md:text-xl">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">khameesmohamed942@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;