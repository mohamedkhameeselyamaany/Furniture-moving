// src/pages/ServiceDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaTruck, FaBox, FaTools, FaArrowUp, FaCouch, FaChevronLeft, FaCheck, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { language } = useApp();

  const servicesData = {
    moving: {
      icon: <FaTruck />, title: language === 'ar' ? 'نقل الأثاث' : 'Furniture Moving',
      image: '/images/about-us1.jpg',
      desc: language === 'ar'
        ? 'نقدم خدمة نقل الأثاث المنزلي والمكتبي بأعلى معايير الجودة والأمان. فريقنا المتخصص يضمن لك نقل آمن وسريع لجميع ممتلكاتك.'
        : 'We provide home and office furniture moving services with the highest quality and safety standards. Our specialized team guarantees you safe and fast moving of all your belongings.',
      features: [
        language === 'ar' ? 'سيارات نقل مغلقة ومجهزة بأحدث التقنيات' : 'Closed moving vehicles equipped with latest technology',
        language === 'ar' ? 'فريق مدرب على التعامل مع جميع أنواع الأثاث' : 'Team trained to handle all types of furniture',
        language === 'ar' ? 'تأمين شامل على جميع المنقولات' : 'Comprehensive insurance on all movables',
        language === 'ar' ? 'خدمة 24 ساعة طوال أيام الأسبوع' : '24-hour service throughout the week',
        language === 'ar' ? 'تغليف مجاني للأثاث الحساس' : 'Free packing for sensitive furniture',
        language === 'ar' ? 'تتبع الشحنة أونلاين' : 'Online shipment tracking',
      ],
      process: [
        { step: 1, title: language === 'ar' ? 'معاينة مجانية' : 'Free Inspection', desc: language === 'ar' ? 'نقوم بمعاينة الأثاث وتحديد احتياجات النقل' : 'We inspect the furniture and determine moving needs' },
        { step: 2, title: language === 'ar' ? 'عرض سعر' : 'Price Quote', desc: language === 'ar' ? 'نقدم عرض سعر شفاف ومناسب' : 'We provide a transparent and suitable price quote' },
        { step: 3, title: language === 'ar' ? 'التغليف' : 'Packing', desc: language === 'ar' ? 'تغليف احترافي لحماية الأثاث' : 'Professional packing to protect furniture' },
        { step: 4, title: language === 'ar' ? 'النقل' : 'Moving', desc: language === 'ar' ? 'نقل آمن بسيارات مجهزة' : 'Safe moving with equipped vehicles' },
        { step: 5, title: language === 'ar' ? 'التركيب' : 'Installation', desc: language === 'ar' ? 'فك وتركيب في المكان الجديد' : 'Disassembly and installation in the new place' },
      ],
    },
    packing: {
      icon: <FaBox />, title: language === 'ar' ? 'تغليف الأثاث' : 'Furniture Packing',
      image: '/images/imgres.jpg',
      desc: language === 'ar'
        ? 'خدمة تغليف احترافية بأحدث المواد لحماية ممتلكاتك من الخدوش والكسر أثناء النقل. نستخدم مواد عالية الجودة تناسب كل نوع من الأثاث.'
        : 'Professional packing service with latest materials to protect your belongings from scratches and breakage during moving. We use high quality materials suitable for every type of furniture.',
      features: [
        language === 'ar' ? 'كرتون مقوى عالي الجودة' : 'High quality reinforced cardboard',
        language === 'ar' ? 'فقاعات هوائية للحماية' : 'Air bubbles for protection',
        language === 'ar' ? 'أغطية بلاستيكية مقاومة للماء' : 'Water-resistant plastic covers',
        language === 'ar' ? 'تغليف خاص للأشياء الزجاجية والتحف' : 'Special packing for glass items and antiques',
        language === 'ar' ? 'تغليف مخصص للأجهزة الإلكترونية' : 'Custom packing for electronic devices',
        language === 'ar' ? 'ملصقات توضيحية للمحتويات' : 'Descriptive labels for contents',
      ],
      process: [
        { step: 1, title: language === 'ar' ? 'فرز الأثاث' : 'Sorting Furniture', desc: language === 'ar' ? 'تصنيف الأثاث حسب الحساسية والنوع' : 'Classifying furniture by sensitivity and type' },
        { step: 2, title: language === 'ar' ? 'تغليف فردي' : 'Individual Packing', desc: language === 'ar' ? 'تغليف كل قطعة على حدة' : 'Packing each piece individually' },
        { step: 3, title: language === 'ar' ? 'حماية الزوايا' : 'Corner Protection', desc: language === 'ar' ? 'وضع حماية خاصة للزوايا الحساسة' : 'Placing special protection for sensitive corners' },
        { step: 4, title: language === 'ar' ? 'تجميع في صناديق' : 'Boxing', desc: language === 'ar' ? 'وضع القطع في صناديق مناسبة' : 'Placing pieces in suitable boxes' },
        { step: 5, title: language === 'ar' ? 'تسمية وترقيم' : 'Labeling & Numbering', desc: language === 'ar' ? 'ترقيم الصناديق لتسهيل الفك' : 'Numbering boxes for easy unpacking' },
      ],
    },
    install: {
      icon: <FaTools />, title: language === 'ar' ? 'فك وتركيب الأثاث' : 'Assembly & Disassembly',
      image: '/images/fak.jpg',
      desc: language === 'ar'
        ? 'فريق متخصص في فك وتركيب جميع أنواع الأثاث بأيدي فنيين محترفين. نضمن لك تركيب صحيح وآمن لجميع قطع الأثاث.'
        : 'Specialized team in assembly and disassembly of all types of furniture by professional technicians. We guarantee correct and safe installation of all furniture pieces.',
      features: [
        language === 'ar' ? 'فنيين متخصصين في فك وتركيب الأثاث' : 'Specialized technicians in furniture assembly',
        language === 'ar' ? 'أدوات حديثة ومتخصصة لكل نوع' : 'Modern and specialized tools for each type',
        language === 'ar' ? 'تركيب في المكان الجديد مع الترتيب' : 'Installation in the new place with arrangement',
        language === 'ar' ? 'ضمان على جودة التركيب' : 'Guarantee on installation quality',
        language === 'ar' ? 'فك بدون تلف للأثاث القديم' : 'Disassembly without damage to old furniture',
        language === 'ar' ? 'تركيب خزائن وغرف نوم ومطابخ' : 'Installing cabinets, bedrooms, and kitchens',
      ],
      process: [
        { step: 1, title: language === 'ar' ? 'معاينة الأثاث' : 'Furniture Inspection', desc: language === 'ar' ? 'فحص الأثاث وتحديد طريقة الفك' : 'Inspecting furniture and determining disassembly method' },
        { step: 2, title: language === 'ar' ? 'فك المسامير والقطع' : 'Disassembly', desc: language === 'ar' ? 'فك الأثاث بعناية مع ترقيم القطع' : 'Careful disassembly with numbering pieces' },
        { step: 3, title: language === 'ar' ? 'تغليف القطع' : 'Wrapping Pieces', desc: language === 'ar' ? 'تغليف كل قطعة على حدة' : 'Wrapping each piece individually' },
        { step: 4, title: language === 'ar' ? 'النقل' : 'Moving', desc: language === 'ar' ? 'نقل القطع للمكان الجديد' : 'Moving pieces to the new place' },
        { step: 5, title: language === 'ar' ? 'التركيب والتنسيق' : 'Installation & Arrangement', desc: language === 'ar' ? 'تركيب الأثاث وتنسيقه في المكان الجديد' : 'Installing and arranging furniture in the new place' },
      ],
    },
    crane: {
      icon: <FaArrowUp />, title: language === 'ar' ? 'ونش رفع الأثاث' : 'Crane Lifting',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
      desc: language === 'ar'
        ? 'ونش رفع هيدروليك متخصص للأدوار العالية والأثاث الثقيل الذي لا يمكن نقله عبر الدرج. حل مثالي للمباني العالية.'
        : 'Specialized hydraulic crane lifting for high floors and heavy furniture that cannot be moved via stairs. Ideal solution for high buildings.',
      features: [
        language === 'ar' ? 'ونش هيدروليك حديث بقدرة عالية' : 'Modern hydraulic crane with high capacity',
        language === 'ar' ? 'رفع آمن حتى الدور الـ20' : 'Safe lifting up to the 20th floor',
        language === 'ar' ? 'تأمين شامل على العملية' : 'Comprehensive insurance on the process',
        language === 'ar' ? 'فريق متخصص في تشغيل الونش' : 'Specialized team in crane operation',
        language === 'ar' ? 'حبال وسلاسل قوية وآمنة' : 'Strong and safe ropes and chains',
        language === 'ar' ? 'تنظيم مرور الشوارع أثناء الرفع' : 'Organizing street traffic during lifting',
      ],
      process: [
        { step: 1, title: language === 'ar' ? 'معاينة الموقع' : 'Site Inspection', desc: language === 'ar' ? 'فحص الموقع وتحديد أفضل زاوية للرفع' : 'Inspecting the site and determining the best lifting angle' },
        { step: 2, title: language === 'ar' ? 'تجهيز الونش' : 'Crane Setup', desc: language === 'ar' ? 'تركيب وتثبيت الونش في المكان المناسب' : 'Installing and securing the crane in the appropriate place' },
        { step: 3, title: language === 'ar' ? 'تأمين الأثاث' : 'Securing Furniture', desc: language === 'ar' ? 'ربط الأثاث بحبال وأحزمة قوية' : 'Tying furniture with strong ropes and belts' },
        { step: 4, title: language === 'ar' ? 'الرفع' : 'Lifting', desc: language === 'ar' ? 'رفع الأثاث ببطء وأمان' : 'Lifting furniture slowly and safely' },
        { step: 5, title: language === 'ar' ? 'الاستلام' : 'Receiving', desc: language === 'ar' ? 'استلام الأثاث في الدور المطلوب' : 'Receiving furniture at the required floor' },
      ],
    },
    furniture: {
      icon: <FaCouch />, title: language === 'ar' ? 'نقل الموبيليات' : 'Furniture Transport',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200',
      desc: language === 'ar'
        ? 'نقل الموبيليات بعناية فائقة مع التغليف المناسب. نتعامل مع جميع أنواع الموبيليا من الأنتيكات للموبيليا العصرية.'
        : 'Moving furniture with extreme care and proper packaging. We deal with all types of furniture from antiques to modern furniture.',
      features: [
        language === 'ar' ? 'تغليف خاص للموبيليا الأنتيكة' : 'Special wrapping for antique furniture',
        language === 'ar' ? 'نقل بسيارات مغلقة ومكيفة' : 'Moving in closed and air-conditioned vehicles',
        language === 'ar' ? 'ترتيب الموبيليا في المكان الجديد' : 'Arranging furniture in the new place',
        language === 'ar' ? 'تنظيف بعد التركيب' : 'Cleaning after installation',
        language === 'ar' ? 'تلميع الموبيليا الخشبية' : 'Polishing wooden furniture',
        language === 'ar' ? 'ضمان ضد الخدوش والكسر' : 'Guarantee against scratches and breakage',
      ],
      process: [
        { step: 1, title: language === 'ar' ? 'معاينة الموبيليا' : 'Furniture Inspection', desc: language === 'ar' ? 'فحص الموبيليا وتحديد نوع التغليف المناسب' : 'Inspecting furniture and determining suitable packing type' },
        { step: 2, title: language === 'ar' ? 'التغليف والحماية' : 'Packing & Protection', desc: language === 'ar' ? 'تغليف الموبيليا بمواد مناسبة' : 'Wrapping furniture with suitable materials' },
        { step: 3, title: language === 'ar' ? 'التحميل' : 'Loading', desc: language === 'ar' ? 'تحميل الموبيليا في السيارة بعناية' : 'Loading furniture into the vehicle carefully' },
        { step: 4, title: language === 'ar' ? 'النقل' : 'Transport', desc: language === 'ar' ? 'نقل آمن للمكان الجديد' : 'Safe transport to the new place' },
        { step: 5, title: language === 'ar' ? 'الترتيب والتسليم' : 'Arrangement & Delivery', desc: language === 'ar' ? 'ترتيب الموبيليا وتسليمها للعميل' : 'Arranging furniture and delivering it to the customer' },
      ],
    },
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="pt-20 text-center py-20">
        <h2 className="text-2xl font-bold text-primary dark:text-white">
          {language === 'ar' ? 'الخدمة غير موجودة' : 'Service Not Found'}
        </h2>
        <Link to="/services" className="btn-primary mt-4 inline-block">
          {language === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-60 md:h-80 lg:h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <img src={`/images/service-detail-${serviceId}.jpg`} alt={service.title} onError={(e) => e.target.src = service.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mx-auto mb-4 md:mb-6">
              {service.icon}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{service.title}</h1>
            <Link to="/services" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm md:text-base">
              <FaChevronLeft /> {language === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto max-w-4xl">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-12 md:mb-16">
            {service.desc}
          </p>

          {/* Features */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-8 md:mb-12 text-center">
              {language === 'ar' ? 'مميزات الخدمة' : 'Service Features'}
            </h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <FaCheck className="text-secondary text-lg md:text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-8 md:mb-12 text-center">
              {language === 'ar' ? 'خطوات العمل' : 'Work Process'}
            </h2>
            <div className="space-y-4 md:space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4 md:gap-6 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md flex-1">
                    <h3 className="font-bold text-primary dark:text-white text-base md:text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary dark:bg-gray-800 p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              {language === 'ar' ? 'احصل على عرض سعر الآن!' : 'Get a Quote Now!'}
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              {language === 'ar' ? 'تواصل معنا للحصول على عرض سعر مجاني وبدون التزام' : 'Contact us for a free and no-obligation quote'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a href="https://wa.me/201274664643" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center gap-2 text-sm md:text-base">
                <FaWhatsapp /> {language === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
              <a href="tel:+201234567890" className="bg-secondary text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors flex items-center gap-2 text-sm md:text-base">
                <FaPhone /> {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;