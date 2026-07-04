// src/pages/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaCalendar, FaUser, FaArrowLeft, FaWhatsapp, FaShare } from 'react-icons/fa';

const BlogPost = () => {
  const { postId } = useParams();
  const { language } = useApp();

  const postsData = {
    1: {
      title: language === 'ar' ? '10 نصائح ذهبية لنقل أثاث آمن' : '10 Golden Tips for Safe Furniture Moving',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200',
      date: '2024-01-15',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>نقل الأثاث من العمليات التي تحتاج إلى تخطيط جيد واهتمام بالتفاصيل. في هذا المقال، نقدم لك 10 نصائح ذهبية تضمن لك نقل أثاث آمن وسلس:</p>
        
        <h3>1. التخطيط المسبق</h3>
        <p>قبل يوم من النقل، جهز قائمة بجميع قطع الأثاث التي تحتاج لنقلها. رتب الأولويات وحدد ما يحتاج لفك وما يمكن نقله كما هو.</p>
        
        <h3>2. التخلص من الغير مرغوب</h3>
        <p>فرصة ممتازة للتخلص من الأثاث القديم أو الغير مستخدم. تبرع به أو بيعه بدلاً من نقله.</p>
        
        <h3>3. التصوير قبل الفك</h3>
        <p>صور كل قطعة أثاث قبل الفك لتسهيل عملية التركيب لاحقاً. هذا يساعد الفنيين على إعادة التركيب بشكل صحيح.</p>
        
        <h3>4. تغليف جيد</h3>
        <p>استخدم مواد تغليف عالية الجودة. الأغطية البلاستيكية والفقاعات الهوائية تحمي الأثاث من الخدوش والكسر.</p>
        
        <h3>5. تسمية الصناديق</h3>
        <p>اكتب محتويات كل صندوق وغرفته على ملصق واضح. هذا يوفر وقت كبير عند التفريغ.</p>
        
        <h3>6. حماية الزوايا</h3>
        <p>الزوايا هي الأكثر عرضة للكسر. استخدم حماية خاصة للزوايا الحادة والحساسة.</p>
        
        <h3>7. فك الأجهزة الكهربائية</h3>
        <p>افك الأجهزة الكهربائية وضع الأسلاك في أكياس منفصلة مع تسميتها.</p>
        
        <h3>8. اختيار شركة موثوقة</h3>
        <p>اختر شركة نقل أثاث لديها خبرة وتقييمات جيدة. لا تختار بناءً على السعر فقط.</p>
        
        <h3>9. التأمين</h3>
        <p>تأكد من وجود تأمين على المنقولات. هذا يحميك من أي خسائر غير متوقعة.</p>
        
        <h3>10. التحقق بعد النقل</h3>
        <p>افحص جميع قطع الأثاث فور وصولها. سجل أي أضرار فوراً وابلغ الشركة.</p>
        
        <p>باتباع هذه النصائح، يمكنك ضمان نقل أثاث آمن وسلس بدون أي مشاكل. تذكر دائماً أن التخطيط الجيد هو مفتاح النجاح.</p>
      ` : `
        <p>Furniture moving is a process that requires good planning and attention to detail. In this article, we present 10 golden tips that ensure safe and smooth furniture moving:</p>
        
        <h3>1. Advance Planning</h3>
        <p>A day before moving, prepare a list of all furniture pieces that need to be moved. Prioritize and determine what needs disassembly and what can be moved as is.</p>
        
        <h3>2. Get Rid of Unwanted Items</h3>
        <p>A great opportunity to get rid of old or unused furniture. Donate or sell it instead of moving it.</p>
        
        <h3>3. Photograph Before Disassembly</h3>
        <p>Photograph each piece of furniture before disassembly to facilitate reassembly later. This helps technicians reassemble correctly.</p>
        
        <h3>4. Good Packing</h3>
        <p>Use high-quality packing materials. Plastic covers and air bubbles protect furniture from scratches and breakage.</p>
        
        <h3>5. Label Boxes</h3>
        <p>Write the contents of each box and its room on a clear label. This saves a lot of time when unpacking.</p>
        
        <h3>6. Protect Corners</h3>
        <p>Corners are the most prone to breakage. Use special protection for sharp and sensitive corners.</p>
        
        <h3>7. Disassemble Electrical Devices</h3>
        <p>Disassemble electrical devices and put wires in separate bags with labels.</p>
        
        <h3>8. Choose a Reliable Company</h3>
        <p>Choose a furniture moving company with experience and good reviews. Don't choose based on price alone.</p>
        
        <h3>9. Insurance</h3>
        <p>Make sure there is insurance on movables. This protects you from any unexpected losses.</p>
        
        <h3>10. Check After Moving</h3>
        <p>Inspect all furniture pieces immediately upon arrival. Record any damage immediately and inform the company.</p>
        
        <p>By following these tips, you can ensure safe and smooth furniture moving without any problems. Always remember that good planning is the key to success.</p>
      `,
    },
    2: {
      title: language === 'ar' ? 'كيف تختار شركة نقل أثاث موثوقة؟' : 'How to Choose a Reliable Moving Company?',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      date: '2024-01-10',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>اختيار شركة نقل أثاث موثوقة هو أهم قرار ستتخذه في عملية النقل. إليك المعايير الأساسية التي يجب البحث عنها:</p>
        
        <h3>الخبرة والسمعة</h3>
        <p>ابحث عن شركة لديها خبرة لا تقل عن 5 سنوات في مجال نقل الأثاث. اقرأ تقييمات العملاء السابقين على مواقع التواصل الاجتماعي ومواقع التقييم.</p>
        
        <h3>الترخيص والتأمين</h3>
        <p>تأكد من أن الشركة مرخصة ولديها تأمين شامل على المنقولات. هذا يحميك من أي خسائر محتملة.</p>
        
        <h3>الفريق والمعدات</h3>
        <p>الفريق المدرب والمعدات الحديثة هما عاملان أساسيان. اسأل عن نوع السيارات المستخدمة وهل هي مغلقة أم مفتوحة.</p>
        
        <h3>الشفافية في الأسعار</h3>
        <p>الشركة الجيدة تقدم عرض سعر شفاف ومفصل. احذر من الأسعار المنخفضة جداً فقد تكون فخاً.</p>
        
        <h3>خدمة العملاء</h3>
        <p>جودة خدمة العملاء تعكس احترافية الشركة. تأكد من توفرهم للرد على استفساراتك في أي وقت.</p>
        
        <p>باتباع هذه المعايير، يمكنك اختيار شركة نقل أثاث موثوقة تضمن لك تجربة نقل سلسة وآمنة.</p>
      ` : `
        <p>Choosing a reliable moving company is the most important decision you will make in the moving process. Here are the basic criteria to look for:</p>
        
        <h3>Experience and Reputation</h3>
        <p>Look for a company with at least 5 years of experience in furniture moving. Read reviews from previous customers on social media and review sites.</p>
        
        <h3>Licensing and Insurance</h3>
        <p>Make sure the company is licensed and has comprehensive insurance on movables. This protects you from any potential losses.</p>
        
        <h3>Team and Equipment</h3>
        <p>Trained team and modern equipment are two essential factors. Ask about the type of vehicles used and whether they are closed or open.</p>
        
        <h3>Price Transparency</h3>
        <p>A good company provides a transparent and detailed price quote. Beware of very low prices as they may be a trap.</p>
        
        <h3>Customer Service</h3>
        <p>Quality of customer service reflects the company's professionalism. Make sure they are available to answer your inquiries at any time.</p>
        
        <p>By following these criteria, you can choose a reliable furniture moving company that guarantees you a smooth and safe moving experience.</p>
      `,
    },
    3: {
      title: language === 'ar' ? 'أهمية التغليف الجيد أثناء النقل' : 'The Importance of Good Packing During Moving',
      image: '/images/about-us.jpg',
      date: '2024-01-05',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>التغليف الجيد هو خط الدفاع الأول لحماية أثاثك أثناء النقل. في هذا المقال نشرح لك لماذا يجب الاهتمام بالتغليف:</p>
        
        <h3>حماية من الخدوش</h3>
        <p>التغليف الجيد يحمي الأسطح الخشبية والزجاجية من الخدوش والاحتكاك أثناء النقل والتحميل.</p>
        
        <h3>منع الكسر</h3>
        <p>الأشياء الزجاجية والتحف تحتاج لتغليف خاص. الفقاعات الهوائية والكرتون المقوى تحميها من الصدمات.</p>
        
        <h3>حماية من العوامل الجوية</h3>
        <p>التغليف المائي يحمي الأثاث من المطر والرطوبة أثناء النقل، خاصة في فصل الشتاء.</p>
        
        <h3>تنظيم أفضل</h3>
        <p>التغليف المنظم يسهل عملية التحميل والتفريغ ويوفر الوقت والجهد.</p>
        
        <p>لا تهمل خطوة التغليف أبداً. استثمارك في تغليف جيد سيحمي أثاثك الثمين ويوفر عليك تكاليف الإصلاح أو الاستبدال.</p>
      ` : `
        <p>Good packing is the first line of defense to protect your furniture during moving. In this article we explain why you should care about packing:</p>
        
        <h3>Protection from Scratches</h3>
        <p>Good packing protects wooden and glass surfaces from scratches and friction during moving and loading.</p>
        
        <h3>Prevent Breakage</h3>
        <p>Glass items and antiques need special packing. Air bubbles and reinforced cardboard protect them from shocks.</p>
        
        <h3>Protection from Weather</h3>
        <p>Waterproof packing protects furniture from rain and humidity during moving, especially in winter.</p>
        
        <h3>Better Organization</h3>
        <p>Organized packing facilitates loading and unloading and saves time and effort.</p>
        
        <p>Never neglect the packing step. Your investment in good packing will protect your precious furniture and save you repair or replacement costs.</p>
      `,
    },
    4: {
      title: language === 'ar' ? 'دليلك لنقل المكاتب والشركات' : 'Your Guide to Office and Company Moving',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
      date: '2023-12-28',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>نقل المكاتب يختلف عن نقل المنازل ويتطلب تخطيطاً دقيقاً. إليك دليلك الشامل:</p>
        
        <h3>التخطيط المسبق</h3>
        <p>حدد موعد النقل بعيداً عن أيام العمل المهمة. أبلغ الموظفين والعملاء مسبقاً.</p>
        
        <h3>حفظ البيانات</h3>
        <p>احفظ جميع البيانات الهامة على سحابة أو قرص صلب قبل نقل الأجهزة الإلكترونية.</p>
        
        <h3>ترقيم المعدات</h3>
        <p>رقم كل جهاز وموصلاته لتسهيل إعادة التركيب في المكان الجديد.</p>
        
        <h3>التنسيق مع فريق IT</h3>
        <p>تأكد من وجود فني IT لإعادة تشغيل الشبكة والأجهزة في المكان الجديد.</p>
        
        <p>نقل المكتب بنجاح يعني استمرار العمل بدون تعطيل. خطط جيداً واختر فريقاً محترفاً.</p>
      ` : `
        <p>Office moving differs from home moving and requires precise planning. Here is your comprehensive guide:</p>
        
        <h3>Advance Planning</h3>
        <p>Determine the moving date away from important work days. Notify employees and customers in advance.</p>
        
        <h3>Data Backup</h3>
        <p>Save all important data on cloud or hard disk before moving electronic devices.</p>
        
        <h3>Numbering Equipment</h3>
        <p>Number each device and its connections to facilitate reassembly in the new place.</p>
        
        <h3>Coordinate with IT Team</h3>
        <p>Make sure there is an IT technician to restart the network and devices in the new place.</p>
        
        <p>Successful office moving means continuing work without disruption. Plan well and choose a professional team.</p>
      `,
    },
    5: {
      title: language === 'ar' ? 'متى تحتاج لونش رفع الأثاث؟' : 'When Do You Need a Furniture Crane?',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
      date: '2023-12-20',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>الونش الهيدروليكي هو الحل الأمثل في حالات معينة. تعرف على متى تحتاجه:</p>
        
        <h3>الأدوار العالية</h3>
        <p>عندما تكون في دور أعلى من الخامس، يصعب نقل الأثاث الكبير عبر الدرج.</p>
        
        <h3>الأثاث الثقيل</h3>
        <p>ال pianos والخزائن الكبيرة والأثاث الضخم يحتاج لونش للرفع بأمان.</p>
        
        <h3>الدرج الضيق</h3>
        <p>عندما يكون الدرج ضيقاً أو ملتوياً ولا يسمح بمرور الأثاث.</p>
        
        <h3>الوقت</h3>
        <p>الونش يوفر الوقت بشكل كبير مقارنة بنقل الأثاث عبر الدرج.</p>
        
        <p>استشر شركة متخصصة لتحديد إذا كنت بحاجة لونش رفع. السلامة أولاً دائماً.</p>
      ` : `
        <p>The hydraulic crane is the optimal solution in certain cases. Learn when you need it:</p>
        
        <h3>High Floors</h3>
        <p>When you are above the fifth floor, it becomes difficult to move large furniture via stairs.</p>
        
        <h3>Heavy Furniture</h3>
        <p>Pianos, large cabinets, and massive furniture need a crane to lift safely.</p>
        
        <h3>Narrow Stairs</h3>
        <p>When stairs are narrow or twisted and do not allow furniture to pass.</p>
        
        <h3>Time</h3>
        <p>The crane saves a lot of time compared to moving furniture via stairs.</p>
        
        <p>Consult a specialized company to determine if you need a lifting crane. Safety first always.</p>
      `,
    },
    6: {
      title: language === 'ar' ? 'تكلفة نقل الأثاث: ما تحتاج معرفته' : 'Moving Costs: What You Need to Know',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
      date: '2023-12-15',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>تكلفة نقل الأثاث تختلف حسب عدة عوامل. في هذا المقال نوضح لك كل ما تحتاج معرفته:</p>
        
        <h3>حجم الأثاث</h3>
        <p>عدد ونوع قطع الأثاث هو العامل الأكبر في تحديد التكلفة. الأثاث الكبير يحتاج لسيارات أكبر.</p>
        
        <h3>المسافة</h3>
        <p>المسافة بين المكان القديم والجديد تؤثر بشكل مباشر على التكلفة.</p>
        
        <h3>الخدمات الإضافية</h3>
        <p>التغليف، الفك والتركيب، والونش كلها خدمات إضافية تؤثر على السعر.</p>
        
        <h3>الطابق</h3>
        <p>الأدوار العالية تتطلب جهد أكبر وقد تحتاج لونش رفع.</p>
        
        <h3>التأمين</h3>
        <p>التأمين الإضافي يزيد التكلفة لكنه يوفر حماية أفضل.</p>
        
        <p>اطلب عروض أسعار من عدة شركات وقارن بينها. لا تختار الأرخص دائماً، بل الأفضل قيمة.</p>
      ` : `
        <p>Furniture moving costs vary depending on several factors. In this article we clarify everything you need to know:</p>
        
        <h3>Furniture Size</h3>
        <p>The number and type of furniture pieces is the biggest factor in determining cost. Large furniture needs larger vehicles.</p>
        
        <h3>Distance</h3>
        <p>The distance between the old and new place directly affects the cost.</p>
        
        <h3>Additional Services</h3>
        <p>Packing, assembly and disassembly, and crane are all additional services that affect the price.</p>
        
        <h3>Floor</h3>
        <p>High floors require more effort and may need a lifting crane.</p>
        
        <h3>Insurance</h3>
        <p>Additional insurance increases cost but provides better protection.</p>
        
        <p>By following these criteria, you can choose a reliable furniture moving company that guarantees you a smooth and safe moving experience.</p>
      `,
    },
    7: {
      title: language === 'ar' ? 'نصائح للحفاظ على أثاثك بعد النقل' : 'Tips for Maintaining Your Furniture After Moving',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
      date: '2023-12-10',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>بعد الانتهاء من عملية النقل، يبدأ دورك في الحفاظ على أثاثك. إليك أهم النصائح:</p>
        
        <h3>التنظيف الفوري</h3>
        <p>قم بتنظيف الأثاث فوراً بعد التركيب. استخدم منظفات مناسبة لكل نوع من المواد.</p>
        
        <h3>الحماية من الرطوبة</h3>
        <p>تأكد من أن المكان الجديد جاف وغير رطب. استخدم مجففات إذا لزم الأمر.</p>
        
        <h3>الصيانة الدورية</h3>
        <p>قم بتلميع الأثاث الخشبي دورياً وإصلاح أي تلف فور ظهوره.</p>
        
        <p>العناية الجيدة تضمن عمر أطول لأثاثك وتوفير تكاليف الإصلاح.</p>
      ` : `
        <p>After completing the moving process, your role in maintaining your furniture begins. Here are the most important tips:</p>
        
        <h3>Immediate Cleaning</h3>
        <p>Clean the furniture immediately after installation. Use appropriate cleaners for each material type.</p>
        
        <h3>Protection from Humidity</h3>
        <p>Make sure the new place is dry and not humid. Use dehumidifiers if necessary.</p>
        
        <h3>Regular Maintenance</h3>
        <p>Polish wooden furniture regularly and repair any damage as soon as it appears.</p>
        
        <p>Good care ensures a longer life for your furniture and saves repair costs.</p>
      `,
    },
    8: {
      title: language === 'ar' ? 'أخطاء شائعة في نقل الأثاث تجنبها' : 'Common Furniture Moving Mistakes to Avoid',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      date: '2023-12-05',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>هناك أخطاء شائعة يرتكبها الكثيرون أثناء نقل الأثاث. تجنب هذه الأخطاء لضمان نقل آمن:</p>
        
        <h3>عدم التخطيط المسبق</h3>
        <p>التخطيط الجيد هو أساس النقل الناجح. حدد المواعيد والاحتياجات مسبقاً.</p>
        
        <h3>اختيار الشركة الرخيصة</h3>
        <p>لا تختار الشركة الأرخص دائماً. الجودة والخبرة أهم من السعر.</p>
        
        <h3>عدم التأمين</h3>
        <p>تأكد من وجود تأمين شامل على جميع ممتلكاتك أثناء النقل.</p>
        
        <p>تجنب هذه الأخطاء يضمن لك تجربة نقل خالية من المشاكل.</p>
      ` : `
        <p>There are common mistakes that many people make during furniture moving. Avoid these mistakes to ensure safe moving:</p>
        
        <h3>Lack of Advance Planning</h3>
        <p>Good planning is the basis of successful moving. Determine schedules and needs in advance.</p>
        
        <h3>Choosing the Cheapest Company</h3>
        <p>Don't always choose the cheapest company. Quality and experience are more important than price.</p>
        
        <h3>No Insurance</h3>
        <p>Make sure there is comprehensive insurance on all your belongings during moving.</p>
        
        <p>Avoiding these mistakes ensures you have a problem-free moving experience.</p>
      `,
    },
    9: {
      title: language === 'ar' ? 'نقل الأثاث في الشتاء: احتياطات خاصة' : 'Moving Furniture in Winter: Special Precautions',
      image: '/images/sheta.webp',
      date: '2023-11-28',
      author: language === 'ar' ? 'فريق اليماني' : 'Al Yamany Team',
      content: language === 'ar' ? `
        <p>نقل الأثاث في الشتاء يحتاج لاحتياطات إضافية بسبب البرد والرطوبة. إليك أهم النصائح:</p>
        
        <h3>الحماية من البرد</h3>
        <p>استخدم أغطية عازلة للحرارة لحماية الأثاث من التجمد والتشقق.</p>
        
        <h3>الحماية من الرطوبة</h3>
        <p>تأكد من جفاف السيارات والأماكن. استخدم مجففات لإزالة الرطوبة.</p>
        
        <h3>الملابس الدافئة</h3>
        <p>ارتدِ ملابس دافئة أثناء النقل لتجنب الإصابة بالبرد.</p>
        
        <p>النقل في الشتاء يحتاج لفريق متخصص ومعدات مناسبة للطقس البارد.</p>
      ` : `
        <p>Moving furniture in winter requires additional precautions due to cold and humidity. Here are the most important tips:</p>
        
        <h3>Protection from Cold</h3>
        <p>Use thermal insulation covers to protect furniture from freezing and cracking.</p>
        
        <h3>Protection from Humidity</h3>
        <p>Make sure vehicles and places are dry. Use dehumidifiers to remove moisture.</p>
        
        <h3>Warm Clothing</h3>
        <p>Wear warm clothes during moving to avoid catching cold.</p>
        
        <p>Moving in winter requires a specialized team and equipment suitable for cold weather.</p>
      `,
    },
  };

  const post = postsData[postId];

  if (!post) {
    return (
      <div className="pt-20 text-center py-20">
        <h2 className="text-2xl font-bold text-primary dark:text-white">
          {language === 'ar' ? 'المقال غير موجود' : 'Post Not Found'}
        </h2>
        <Link to="/blog" className="btn-primary mt-4 inline-block">
          {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header Image */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
          <div className="container mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <FaArrowLeft /> {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-1"><FaCalendar /> {post.date}</span>
              <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-light dark:bg-dark">
        <div className="container mx-auto max-w-4xl">
          <article 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
              {language === 'ar' ? 'شارك المقال' : 'Share Post'}
            </h3>
            <div className="flex gap-4">
              <a href={`https://wa.me/?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <FaWhatsapp />
              </a>
              <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <FaShare />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;