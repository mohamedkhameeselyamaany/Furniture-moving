// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaTruck, FaBox, FaTools, FaArrowUp, FaCouch, FaChevronLeft } from 'react-icons/fa';

const Services = () => {
  const { language } = useApp();

  const services = [
    {
      icon: <FaTruck />, title: language === 'ar' ? 'نقل الأثاث' : 'Furniture Moving', path: '/services/moving',
      desc: language === 'ar' ? 'نقل آمن وسريع لجميع أنواع الأثاث المنزلي والمكتبي مع ضمان كامل.' : 'Safe and fast moving for all types of home and office furniture with full guarantee.',
      features: [
        language === 'ar' ? 'سيارات مغلقة ومجهزة' : 'Closed and equipped vehicles',
        language === 'ar' ? 'فريق مدرب على التعامل مع جميع أنواع الأثاث' : 'Team trained to handle all types of furniture',
        language === 'ar' ? 'تأمين شامل على المنقولات' : 'Comprehensive insurance on movables',
        language === 'ar' ? 'خدمة 24 ساعة' : '24-hour service',
      ],
      image: '/images/about-us1.jpg',
    },
    {
      icon: <FaBox />, title: language === 'ar' ? 'تغليف الأثاث' : 'Furniture Packing', path: '/services/packing',
      desc: language === 'ar' ? 'تغليف احترافي بأحدث المواد لحماية ممتلكاتك من الخدوش والكسر.' : 'Professional packing with latest materials to protect your belongings from scratches and breakage.',
      features: [
        language === 'ar' ? 'مواد تغليف عالية الجودة' : 'High quality packing materials',
        language === 'ar' ? 'تغليف خاص للأشياء الزجاجية' : 'Special packing for glass items',
        language === 'ar' ? 'تغليف مخصص للأجهزة الإلكترونية' : 'Custom packing for electronic devices',
        language === 'ar' ? 'فك وتركيب التغليف' : 'Packing assembly and disassembly',
      ],
      image: '/images/imgres.jpg',
    },
    {
      icon: <FaTools />, title: language === 'ar' ? 'فك وتركيب' : 'Assembly & Disassembly', path: '/services/install',
      desc: language === 'ar' ? 'فك وتركيب جميع أنواع الأثاث بأيدي فنيين متخصصين ومدربين.' : 'Assembly and disassembly of all types of furniture by specialized technicians trained to the highest level.',
      features: [
        language === 'ar' ? 'فنيين متخصصين في فك وتركيب الأثاث' : 'Specialized technicians in furniture assembly',
        language === 'ar' ? 'أدوات حديثة ومتخصصة' : 'Modern and specialized tools',
        language === 'ar' ? 'تركيب في المكان الجديد' : 'Installation in the new place',
        language === 'ar' ? 'ضمان على التركيب' : 'Guarantee on installation',
      ],
      image:  '/images/fak.jpg',
    },
    {
      icon: <FaArrowUp />, title: language === 'ar' ? 'ونش رفع' : 'Crane Lifting', path: '/services/crane',
      desc: language === 'ar' ? 'ونش رفع متخصص للأدوار العالية والأثاث الثقيل.' : 'Specialized crane lifting for high floors and heavy furniture.',
      features: [
        language === 'ar' ? 'ونش هيدروليك حديث' : 'Modern hydraulic crane',
        language === 'ar' ? 'رفع آمن للأدوار العالية' : 'Safe lifting for high floors',
        language === 'ar' ? 'تأمين على العملية' : 'Insurance on the process',
        language === 'ar' ? 'فريق متخصص في التشغيل' : 'Specialized operating team',
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    },
    {
      icon: <FaCouch />, title: language === 'ar' ? 'نقل موبيليات' : 'Furniture Transport', path: '/services/furniture',
      desc: language === 'ar' ? 'نقل الموبيليات بعناية فائقة مع التغليف المناسب.' : 'Moving furniture with extreme care and proper packaging.',
      features: [
        language === 'ar' ? 'تغليف خاص للموبيليا' : 'Special wrapping for furniture',
        language === 'ar' ? 'نقل بسيارات مغلقة' : 'Moving in closed vehicles',
        language === 'ar' ? 'ترتيب في المكان الجديد' : 'Arrangement in the new place',
        language === 'ar' ? 'تنظيف بعد التركيب' : 'Cleaning after installation',
      ],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' ? 'نقدم مجموعة شاملة من خدمات نقل الأثاث بأعلى معايير الجودة' : 'We offer a comprehensive range of furniture moving services with the highest quality standards'}
          </p>
        </div>
      </section>

      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <div key={index} className={`card overflow-hidden grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="h-48 md:h-64 lg:h-80 w-full">
                <img src={`/images/service-${index + 1}.jpg`} alt={service.title} onError={(e) => e.target.src = service.image} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl md:text-3xl mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-white mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.path} className="btn-primary inline-flex items-center gap-2 w-fit text-sm md:text-base">
                  {language === 'ar' ? 'اعرف المزيد' : 'Learn More'} <FaChevronLeft />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;