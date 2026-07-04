// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import QuickContactForm from '../components/QuickContactForm';
import {
  FaTruck, FaBox, FaTools, FaArrowUp, FaCouch,
  FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight,
  FaWhatsapp, FaPhone
} from 'react-icons/fa';

const Home = () => {
  const { t, language } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroStats = [
    { number: '15+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
    { number: '5000+', label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients' },
    { number: '100%', label: language === 'ar' ? 'ضمان الأمان' : 'Safety Guarantee' },
  ];

  const services = [
    {
      icon: <FaTruck />,
      title: t.moving,
      desc: language === 'ar' 
        ? 'نقل آمن وسريع لجميع أنواع الأثاث مع ضمان كامل'
        : 'Safe and fast moving for all types of furniture with full guarantee',
      path: '/services/moving',
      color: 'bg-blue-500',
    },
    {
      icon: <FaBox />,
      title: t.packing,
      desc: language === 'ar'
        ? 'تغليف احترافي بأحدث المواد لحماية ممتلكاتك'
        : 'Professional packing with latest materials to protect your belongings',
      path: '/services/packing',
      color: 'bg-green-500',
    },
    {
      icon: <FaTools />,
      title: t.install,
      desc: language === 'ar'
        ? 'فك وتركيب جميع أنواع الأثاث بأيدي فنيين متخصصين'
        : 'Assembly and disassembly of all furniture types by specialized technicians',
      path: '/services/install',
      color: 'bg-orange-500',
    },
    {
      icon: <FaArrowUp />,
      title: t.crane,
      desc: language === 'ar'
        ? 'ونش رفع متخصص للأدوار العالية والأثاث الثقيل'
        : 'Specialized crane lifting for high floors and heavy furniture',
      path: '/services/crane',
      color: 'bg-red-500',
    },
    {
      icon: <FaCouch />,
      title: t.furniture,
      desc: language === 'ar'
        ? 'نقل الموبيليات بعناية فائقة مع التغليف المناسب'
        : 'Moving furniture with extreme care and proper packaging',
      path: '/services/furniture',
      color: 'bg-purple-500',
    },
  ];

const galleryImages = [
  {
    id: 1,
    title: language === 'ar' ? 'نقل أثاث منزلي' : 'Home Moving',
    desc: language === 'ar' ? 'نقل آمن وسريع للأثاث المنزلي' : 'Safe and fast home moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-1.jpg`
  },
  {
    id: 2, 
    title: language === 'ar' ? 'نقل أثاث منزلي' : 'Home Moving',
    desc: language === 'ar' ? 'نقل آمن وسريع للأثاث المنزلي' : 'Safe and fast home moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-2.jpg`
  },
  {
    id: 3,
    title: language === 'ar' ? 'نقل أثاث منزلي' : 'Home Moving',
    desc: language === 'ar' ? 'نقل آمن وسريع للأثاث المنزلي' : 'Safe and fast home moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-3.jpg`
  },
  {
    id: 4,
    title: language === 'ar' ? 'نقل أثاث منزلي' : 'Home Moving',
    desc: language === 'ar' ? 'نقل آمن وسريع للأثاث المنزلي' : 'Safe and fast home moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-4.jpg`
  },
  {
    id: 5,
    title: language === 'ar' ? 'تغليف شامل' : 'Full Packing Service',
    desc: language === 'ar' ? 'خدمة تغليف كاملة قبل النقل' : 'Complete packing before moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-5.jpg`
  },
  {
    id: 6,
    title: language === 'ar' ? 'تغليف شامل' : 'Full Packing Service',
    desc: language === 'ar' ? 'خدمة تغليف كاملة قبل النقل' : 'Complete packing before moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-6.jpg`
  },
  {
    id: 7,
    title: language === 'ar' ? 'تغليف شامل' : 'Full Packing Service',
    desc: language === 'ar' ? 'خدمة تغليف كاملة قبل النقل' : 'Complete packing before moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-7.jpg`
  },
  {
    id: 8,
    title: language === 'ar' ? 'تغليف شامل' : 'Full Packing Service',
    desc: language === 'ar' ? 'خدمة تغليف كاملة قبل النقل' : 'Complete packing before moving',
    image: `${process.env.PUBLIC_URL}/images/gallery-8.jpg`
  },
  {
    id: 9,
    title: language === 'ar' ? 'فك وتركيب العفش والمكيفات' : 'Furniture & AC Dismantling and Installation',
    desc: language === 'ar' ? 'فك وتركيب العفش والمكيفات بواسطة فنيين متخصصين' : 'Professional furniture and air conditioner dismantling and installation',
    image: `${process.env.PUBLIC_URL}/images/gallery-9.jpg`
  },
  {
    id: 10,
    title: language === 'ar' ? 'فك وتركيب العفش والمكيفات' : 'Furniture & AC Dismantling and Installation',
    desc: language === 'ar' ? 'فك وتركيب العفش والمكيفات بواسطة فنيين متخصصين' : 'Professional furniture and air conditioner dismantling and installation',
    image: `${process.env.PUBLIC_URL}/images/gallery-10.jpg`
  },
  {
    id: 11,
    title: language === 'ar' ? 'فك وتركيب العفش والمكيفات' : 'Furniture & AC Dismantling and Installation',
    desc: language === 'ar' ? 'فك وتركيب العفش والمكيفات بواسطة فنيين متخصصين' : 'Professional furniture and air conditioner dismantling and installation',
    image: `${process.env.PUBLIC_URL}/images/gallery-11.jpg`
  },
  {
    id: 12,
    title: language === 'ar' ? 'فك وتركيب العفش والمكيفات' : 'Furniture & AC Dismantling and Installation',
    desc: language === 'ar' ? 'فك وتركيب العفش والمكيفات بواسطة فنيين متخصصين' : 'Professional furniture and air conditioner dismantling and installation',
    image: `${process.env.PUBLIC_URL}/images/gallery-12.jpg`
  },
  {
    id: 13,
    title: language === 'ar' ? 'رفع الأثاث بالونش' : 'Furniture Lifting by Crane',
    desc: language === 'ar' ? 'رفع وإنزال الأثاث بأمان باستخدام ونش حديث' : 'Safe furniture lifting using a modern crane',
    image: `${process.env.PUBLIC_URL}/images/gallery-13.jpg`
  },
  {
    id: 14,
    title: language === 'ar' ? 'رفع الأثاث بالونش' : 'Furniture Lifting by Crane',
    desc: language === 'ar' ? 'رفع وإنزال الأثاث بأمان باستخدام ونش حديث' : 'Safe furniture lifting using a modern crane',
    image: `${process.env.PUBLIC_URL}/images/gallery-14.jpg`
  },
  {
    id: 15,
    title: language === 'ar' ? 'رفع الأثاث بالونش' : 'Furniture Lifting by Crane',
    desc: language === 'ar' ? 'رفع وإنزال الأثاث بأمان باستخدام ونش حديث' : 'Safe furniture lifting using a modern crane',
    image: `${process.env.PUBLIC_URL}/images/gallery-15.jpg`
  },
  {
    id: 16,
    title: language === 'ar' ? 'رفع الأثاث بالونش' : 'Furniture Lifting by Crane',
    desc: language === 'ar' ? 'رفع وإنزال الأثاث بأمان باستخدام ونش حديث' : 'Safe furniture lifting using a modern crane',
    image: `${process.env.PUBLIC_URL}/images/gallery-16.jpg`
  },
  {
    id: 17,
    title: language === 'ar' ? 'نقل الموبيليات وجميع أنواع الأثاث' : 'Furniture moving and all types of furniture',
    desc: language === 'ar' ? 'خدمات نقل احترافية لجميع أنواع الموبيليات والأثاث للمنازل والشركات' : 'Professional moving services for all types of furniture for homes and businesses',
    image: `${process.env.PUBLIC_URL}/images/gallery-17.jpg`
  },
  {
    id: 18,
    title: language === 'ar' ? 'نقل الموبيليات وجميع أنواع الأثاث' : 'Furniture moving and all types of furniture',
    desc: language === 'ar' ? 'خدمات نقل احترافية لجميع أنواع الموبيليات والأثاث للمنازل والشركات' : 'Professional moving services for all types of furniture for homes and businesses',
    image: `${process.env.PUBLIC_URL}/images/gallery-18.jpg`
  },
  {
    id: 19,
    title: language === 'ar' ? 'نقل الموبيليات وجميع أنواع الأثاث' : 'Furniture moving and all types of furniture',
    desc: language === 'ar' ? 'خدمات نقل احترافية لجميع أنواع الموبيليات والأثاث للمنازل والشركات' : 'Professional moving services for all types of furniture for homes and businesses',
    image: `${process.env.PUBLIC_URL}/images/gallery-19.jpg`
  },
  {
    id: 20,
    title: language === 'ar' ? 'نقل الموبيليات وجميع أنواع الأثاث' : 'Furniture moving and all types of furniture',
    desc: language === 'ar' ? 'خدمات نقل احترافية لجميع أنواع الموبيليات والأثاث للمنازل والشركات' : 'Professional moving services for all types of furniture for homes and businesses',
    image: `${process.env.PUBLIC_URL}/images/gallery-20.jpg`
  }
];
  // }));

  const testimonials = [
    {
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed',
      role: language === 'ar' ? 'مهندس' : 'Engineer',
      text: language === 'ar' 
        ? 'خدمة ممتازة! الفريق كان محترف جداً والأثاث وصل سليم 100%. أنصح الجميع بالتعامل معهم.'
        : 'Excellent service! The team was very professional and the furniture arrived 100% intact.',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'سارة علي' : 'Sara Ali',
      role: language === 'ar' ? 'طبيبة' : 'Doctor',
      text: language === 'ar'
        ? 'أسرع شركة نقل أثاث تعاملت معاها. التغليف كان ممتاز والأسعار مناسبة جداً.'
        : 'The fastest furniture moving company I have dealt with. Excellent packing and very reasonable prices.',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'خالد عبدالله' : 'Khaled Abdullah',
      role: language === 'ar' ? 'رجل أعمال' : 'Businessman',
      text: language === 'ar'
        ? 'نقلوا مكتبي كاملاً في يوم واحد بدون أي خسارة. فريق محترف ومنظم.'
        : 'They moved my entire office in one day without any loss. Professional and organized team.',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'نورا حسن' : 'Noura Hassan',
      role: language === 'ar' ? 'مصممة' : 'Designer',
      text: language === 'ar'
        ? 'الونش رفع أثاثي للدور الـ12 بسهولة. شغل نظيف ومحترف.'
        : 'The crane lifted my furniture to the 12th floor easily. Clean and professional work.',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'أحمد السيد' : 'Ahmed Al-Sayed',
      role: language === 'ar' ? 'مدير شركة' : 'Company Manager',
      text: language === 'ar'
        ? 'نقلوا مكتبي بالكامل في يوم واحد. التنظيم ممتاز والفريق محترف جداً.'
        : 'They moved my entire office in one day. Excellent organization and very professional team.',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'فاطمة محمود' : 'Fatma Mahmoud',
      role: language === 'ar' ? 'ربة منزل' : 'Housewife',
      text: language === 'ar'
        ? 'التغليف كان مذهل! كل قطعة وصلت سليمة بدون أي خدوش. شكراً للفريق الرائع.'
        : 'The packing was amazing! Every piece arrived intact without any scratches. Thank you to the wonderful team.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
          <img 
            src={`${process.env.PUBLIC_URL}/images/homepage.jpg`}
            alt="Moving Service" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-secondary font-semibold text-on-green">
                  {language === 'ar' ? '✨ خدمة متميزة منذ 2009' : '✨ Premium Service Since 2009'}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-on-green">{t.heroTitle}</h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl font-semibold">{t.heroDesc}</p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                  <FaWhatsapp />{t.contactBtn}
                </a>
                <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">{t.orderBtn}</Link>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" alt="Moving" className="w-full h-48 object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                <img src={`${process.env.PUBLIC_URL}/images/imgres.jpg`} alt="Packing" className="w-full h-64 object-cover" />                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" alt="Furniture" className="w-full h-64 object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                    <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400" alt="Service" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-light dark:fill-dark"></path>
          </svg>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-light dark:bg-dark fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary/20 rounded-2xl"></div>
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" alt="About Us" className="relative rounded-2xl shadow-xl w-full h-96 object-cover" />
            </div>
            <div>
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">{language === 'ar' ? 'من نحن' : 'About Us'}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3 mb-6">
                {language === 'ar' ? 'شركة اليماني... خبرة وثقة في نقل الأثاث' : 'Al Yamany Company... Experience and Trust in Furniture Moving'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {language === 'ar'
                  ? 'نحن شركة متخصصة في نقل الأثاث منذ أكثر من 15 عاماً. نقدم خدمات شاملة تشمل النقل، الفك والتركيب، التغليف، والرفع بالونش.'
                  : 'We are a specialized furniture moving company for more than 15 years. We offer comprehensive services including moving, assembly and disassembly, packing, and crane lifting.'}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <FaTools />, text: language === 'ar' ? 'فنيين متخصصين' : 'Specialized Technicians' },
                  { icon: <FaTruck />, text: language === 'ar' ? 'معدات حديثة' : 'Modern Equipment' },
                  { icon: <FaArrowUp />, text: language === 'ar' ? 'ونش رفع' : 'Crane Lifting' },
                  { icon: <FaStar />, text: language === 'ar' ? 'خبرة 15+ سنة' : '15+ Years Experience' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">{item.icon}</div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-block">{language === 'ar' ? 'اعرف أكثر عنا' : 'Learn More About Us'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3">
              {language === 'ar' ? 'نقدم لك كل ما تحتاجه لنقل آمن' : 'We Offer Everything You Need for Safe Moving'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.path} className="card group p-8 text-center hover:border-secondary border-2 border-transparent">
                <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 transform group-hover:rotate-12 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.desc}</p>
                <span className="text-secondary font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                  {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  {language === 'ar' ? <FaChevronLeft /> : <FaChevronRight />}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">{language === 'ar' ? 'معرض الأعمال' : 'Portfolio'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3">
              {language === 'ar' ? 'شاهد بعض من أعمالنا' : 'See Some of Our Work'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img) => (
              <div key={img.id} className="group overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                <div className="relative aspect-square overflow-hidden">
              
              <img
  src={img.image}
  alt={img.title}
  onError={(e) => e.currentTarget.src = `https://picsum.photos/400/400?random=${img.id}`}
  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
/>     
                </div>
                <div className="p-4 md:p-5">
                  <h4 className="text-primary dark:text-white font-bold text-base md:text-lg leading-tight">{img.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base leading-relaxed">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary dark:bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">{language === 'ar' ? 'آراء العملاء' : 'Testimonials'}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              {language === 'ar' ? 'ماذا يقول عملاؤنا عنا؟' : 'What Do Our Clients Say About Us?'}
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${language === 'ar' ? '' : '-'}${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center">
                      <FaQuoteLeft className="text-4xl text-secondary mx-auto mb-6" />
                      <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">"{testimonial.text}"</p>
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} className="text-secondary" />)}
                      </div>
                      <h4 className="font-bold text-xl">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                {language === 'ar' ? <FaChevronRight /> : <FaChevronLeft />}
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-secondary' : 'bg-white/30'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                {language === 'ar' ? <FaChevronLeft /> : <FaChevronRight />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{language === 'ar' ? 'جاهز للنقل؟' : 'Ready to Move?'}</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'تواصل معنا الآن واحصل على عرض سعر مجاني لنقل أثاثك بأمان' : 'Contact us now and get a free quote for moving your furniture safely'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <FaWhatsapp size={20} />{language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
            </a>
            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors">
              {language === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Quick Contact Form */}
      <section className="section-padding bg-secondary dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'ar' ? 'احصل على عرض سعر مجاني الآن!' : 'Get a Free Quote Now!'}
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                {language === 'ar' 
                  ? 'تواصل معنا للحصول على عرض سعر مجاني وبدون التزام. نحن هنا لمساعدتك في نقل أثاثك بأمان.'
                  : 'Contact us for a free and no-obligation quote. We are here to help you move your furniture safely.'
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <FaWhatsapp /> {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                </a>
                <a href="tel:+201274664643" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                  <FaPhone /> {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-6 text-center">
                {language === 'ar' ? 'اطلب عرض سعر سريع' : 'Quick Quote Request'}
              </h3>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;