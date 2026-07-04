
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';

const Blog = () => {
  const { language } = useApp();

  const posts = [
    {
      id: 1,
      title: language === 'ar' ? '10 نصائح ذهبية لنقل أثاث آمن' : '10 Golden Tips for Safe Furniture Moving',
      excerpt: language === 'ar' 
        ? 'تعرف على أهم النصائح التي تجعل عملية نقل الأثاث سهلة وآمنة بدون أي خسائر أو كسر.'
        : 'Learn the most important tips that make furniture moving easy and safe without any losses or breakage.',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600',
      date: '2024-01-15',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'نصائح' : 'Tips',
    },
    {
      id: 2,
      title: language === 'ar' ? 'كيف تختار شركة نقل أثاث موثوقة؟' : 'How to Choose a Reliable Moving Company?',
      excerpt: language === 'ar'
        ? 'دليلك الشامل لاختيار أفضل شركة نقل أثاث مع معايير الجودة والأمان التي يجب البحث عنها.'
        : 'Your comprehensive guide to choosing the best furniture moving company with quality and safety criteria to look for.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      date: '2024-01-10',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'دليل' : 'Guide',
    },
    {
      id: 3,
      title: language === 'ar' ? 'أهمية التغليف الجيد أثناء النقل' : 'The Importance of Good Packing During Moving',
      excerpt: language === 'ar'
        ? 'اكتشف لماذا التغليف الجيد هو أهم خطوة في عملية النقل وكيف يحمي أثاثك من التلف.'
        : 'Discover why good packing is the most important step in the moving process and how it protects your furniture from damage.',
      image: '/images/about-us1.jpg',
      date: '2024-01-05',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'نصائح' : 'Tips',
    },
    {
      id: 4,
      title: language === 'ar' ? 'دليلك لنقل المكاتب والشركات' : 'Your Guide to Office and Company Moving',
      excerpt: language === 'ar'
        ? 'خطوات عملية ومنظمة لنقل مكتبك أو شركتك بدون تعطيل للعمل أو فقدان للمستندات.'
        : 'Practical and organized steps to move your office or company without disrupting work or losing documents.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
      date: '2023-12-28',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'أعمال' : 'Business',
    },
    {
      id: 5,
      title: language === 'ar' ? 'متى تحتاج لونش رفع الأثاث؟' : 'When Do You Need a Furniture Crane?',
      excerpt: language === 'ar'
        ? 'تعرف على الحالات التي يكون فيها استخدام الونش هو الحل الأمثل لنقل الأثاث بأمان.'
        : 'Learn about the cases where using a crane is the optimal solution for safely moving furniture.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
      date: '2023-12-20',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'خدمات' : 'Services',
    },
    {
      id: 7,
      title: language === 'ar' ? 'نصائح للحفاظ على أثاثك بعد النقل' : 'Tips for Maintaining Your Furniture After Moving',
      excerpt: language === 'ar' 
        ? 'تعرف على كيفية العناية بأثاثك بعد النقل للحفاظ على مظهره ومتانته لأطول فترة ممكنة.'
        : 'Learn how to care for your furniture after moving to maintain its appearance and durability for as long as possible.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
      date: '2023-12-10',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'عناية' : 'Care',
    },
    {
      id: 8,
      title: language === 'ar' ? 'أخطاء شائعة في نقل الأثاث تجنبها' : 'Common Furniture Moving Mistakes to Avoid',
      excerpt: language === 'ar'
        ? 'تعرف على الأخطاء الأكثر شيوعاً في نقل الأثاث وكيفية تجنبها لضمان نقل آمن وسلس.'
        : 'Learn about the most common mistakes in furniture moving and how to avoid them for safe and smooth moving.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
      date: '2023-12-05',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'نصائح' : 'Tips',
    },
    {
      id: 9,
      title: language === 'ar' ? 'نقل الأثاث في الشتاء: احتياطات خاصة' : 'Moving Furniture in Winter: Special Precautions',
      excerpt: language === 'ar'
        ? 'نقل الأثاث في فصل الشتاء يحتاج لاحتياطات خاصة. تعرف على كيفية حماية أثاثك من البرد والرطوبة.'
        : 'Moving furniture in winter requires special precautions. Learn how to protect your furniture from cold and humidity.',
      image: '/images/sheta.webp',
      date: '2023-11-28',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      category: language === 'ar' ? 'موسمي' : 'Seasonal',
    },
  ];

  const sidebarServices = [
    { path: '/services/moving', label: language === 'ar' ? 'نقل الأثاث' : 'Furniture Moving' },
    { path: '/services/packing', label: language === 'ar' ? 'تغليف الأثاث' : 'Furniture Packing' },
    { path: '/services/install', label: language === 'ar' ? 'فك وتركيب' : 'Assembly & Disassembly' },
    { path: '/services/crane', label: language === 'ar' ? 'ونش رفع' : 'Crane Lifting' },
    { path: '/services/furniture', label: language === 'ar' ? 'نقل موبيليات' : 'Furniture Transport' },
  ];

  const quickLinks = [
    { path: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
    { path: '/contact', label: language === 'ar' ? 'تواصل معنا' : 'Contact Us' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{language === 'ar' ? 'المدونة' : 'Blog'}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'ar' ? 'مقالات ونصائح مفيدة حول نقل الأثاث والعناية به' : 'Useful articles and tips about furniture moving and care'}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2 space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="card overflow-hidden flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-40 md:h-auto">
                    <img src={`/images/blog-${post.id}.jpg`} alt={post.title} onError={(e) => e.target.src = post.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 md:p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-3">
                        <span className="bg-secondary/20 text-secondary px-2 md:px-3 py-1 rounded-full text-xs font-bold">{post.category}</span>
                        <span className="flex items-center gap-1"><FaCalendar className="text-xs md:text-sm" /> {post.date}</span>
                        <span className="flex items-center gap-1"><FaUser className="text-xs md:text-sm" /> {post.author}</span>
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-primary dark:text-white mb-2 md:mb-3 hover:text-secondary transition-colors line-clamp-2">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-secondary font-semibold mt-3 md:mt-4 hover:gap-4 transition-all text-sm md:text-base">
                      {language === 'ar' ? 'اقرأ المزيد' : 'Read More'} <FaArrowLeft />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 border-b-2 border-secondary pb-2">
                  {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                </h3>
                <ul className="space-y-3">
                  {sidebarServices.map((service, index) => (
                    <li key={index}>
                      <Link to={service.path} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 border-b-2 border-secondary pb-2">
                  {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="card p-6 bg-primary text-white text-center">
                <h3 className="text-xl font-bold mb-3">
                  {language === 'ar' ? 'تحتاج مساعدة؟' : 'Need Help?'}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {language === 'ar' ? 'تواصل معنا للحصول على استشارة مجانية' : 'Contact us for a free consultation'}
                </p>
                <Link to="/contact" className="btn-secondary inline-block text-sm">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
