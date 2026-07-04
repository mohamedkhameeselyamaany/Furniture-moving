// src/pages/About.js
import React from 'react';
import { useApp } from '../context/AppContext';
import { FaTruck, FaArrowUp, FaAward, FaUsers, FaShieldAlt, FaClock } from 'react-icons/fa';

const About = () => {
  const { language } = useApp();

  const features = [
    { icon: <FaUsers />, title: language === 'ar' ? 'فنيين متخصصين' : 'Specialized Technicians', desc: language === 'ar' ? 'فريق مدرب على أعلى مستوى من الكفاءة والاحترافية' : 'Team trained to the highest level of competence and professionalism' },
    { icon: <FaTruck />, title: language === 'ar' ? 'معدات حديثة' : 'Modern Equipment', desc: language === 'ar' ? 'أحدث السيارات والأدوات لنقل آمن وسريع' : 'Latest vehicles and tools for safe and fast moving' },
    { icon: <FaArrowUp />, title: language === 'ar' ? 'ونش رفع' : 'Crane Lifting', desc: language === 'ar' ? 'ونش هيدروليك متخصص للأدوار العالية' : 'Specialized hydraulic crane for high floors' },
    { icon: <FaAward />, title: language === 'ar' ? 'خبرة 15+ سنة' : '15+ Years Experience', desc: language === 'ar' ? 'سنوات من الخبرة في مجال نقل الأثاث' : 'Years of experience in furniture moving' },
    { icon: <FaShieldAlt />, title: language === 'ar' ? 'ضمان كامل' : 'Full Guarantee', desc: language === 'ar' ? 'ضمان شامل على جميع ممتلكاتك أثناء النقل' : 'Comprehensive guarantee on all your belongings during moving' },
    { icon: <FaClock />, title: language === 'ar' ? 'سرعة التنفيذ' : 'Fast Execution', desc: language === 'ar' ? 'نلتزم بالمواعيد وننفذ بسرعة فائقة' : 'We adhere to deadlines and execute with extreme speed' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{language === 'ar' ? 'من نحن' : 'About Us'}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' ? 'تعرف على شركة اليماني وقصة نجاحنا في مجال نقل الأثاث' : 'Learn about Al Yamany Company and our success story in furniture moving'}
          </p>
        </div>
      </section>

      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/gallery-2.jpg`} alt="Company" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"} className="rounded-2xl shadow-xl w-full h-80 md:h-96 object-cover" />
            </div>
            <div>
              <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-wider">{language === 'ar' ? 'قصتنا' : 'Our Story'}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mt-2 md:mt-3 mb-4 md:mb-6">
                {language === 'ar' ? 'نقل الأثاث بأعلى معايير الجودة منذ 2009' : 'Furniture Moving with Highest Quality Standards Since 2009'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                {language === 'ar'
                  ? 'تأسست شركة اليماني لنقل الأثاث عام 2009، ومنذ ذلك الحين نعمل بجد لتقديم أفضل خدمات نقل الأثاث في مصر.'
                  : 'Al Yamany Furniture Moving Company was established in 2009, and since then we have been working hard to provide the best furniture moving services in Egypt.'}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {language === 'ar'
                  ? 'نمتلك فريقاً من الفنيين المتخصصين والمدربين على أعلى مستوى، ونستخدم أحدث المعدات والتقنيات لضمان سلامة أثاثك.'
                  : 'We have a team of specialized technicians trained to the highest level, and we use the latest equipment and techniques to ensure the safety of your furniture.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="card p-6 md:p-8 border-l-4 border-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4">{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {language === 'ar'
                  ? 'أن نكون الشركة الرائدة في مجال نقل الأثاث في مصر والشرق الأوسط، وأن نكون الخيار الأول لكل عميل يبحث عن خدمة نقل آمنة وسريعة وموثوقة.'
                  : 'To be the leading company in furniture moving in Egypt and the Middle East, and to be the first choice for every customer looking for safe, fast, and reliable moving service.'}
              </p>
            </div>
            <div className="card p-6 md:p-8 border-l-4 border-primary">
              <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4">{language === 'ar' ? 'رسالتنا' : 'Our Mission'}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {language === 'ar'
                  ? 'تقديم خدمات نقل أثاث متميزة بأعلى معايير الجودة والأمان، مع الاهتمام بكل تفصيلة صغيرة لضمان راحة العميل وسلامة ممتلكاته.'
                  : 'Providing distinguished furniture moving services with the highest standards of quality and safety, while paying attention to every small detail to ensure customer comfort and the safety of their belongings.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-wider">{language === 'ar' ? 'لماذا نحن؟' : 'Why Us?'}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mt-2 md:mt-3">
              {language === 'ar' ? 'مميزات شركة اليماني' : 'Al Yamany Features'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 md:p-8 group hover:bg-primary transition-colors duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-primary group-hover:text-white text-2xl md:text-3xl mb-4 md:mb-6 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary dark:text-white group-hover:text-white mb-2 md:mb-3 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;