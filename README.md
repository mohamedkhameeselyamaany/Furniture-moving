# اليماني لنقل الأثاث - Al Yamany Furniture Moving

موقع إلكتروني احترافي لشركة اليماني لنقل الأثاث والموبيليات، مبني باستخدام React.js مع تصميم عصري ومتجاوب ومحسن لمحركات البحث.

## 🌟 المميزات الرئيسية

### 🎨 التصميم والواجهة

- **تصميم متجاوب كامل**: يعمل بسلاسة على الهاتف، التابلت، والكمبيوتر
- **دعم اللغتين**: العربية (RTL) والإنجليزية (LTR) مع تبديل تلقائي
- **الوضع المظلم**: تبديل بين الوضع الفاتح والمظلم
- **ألوان شركة محترفة**: أزرق داكن (#1e3a5f)، ذهبي (#c9a84c)، أحمر (#e63946)
- **خطوط عربية**: Cairo و Tajawal للنصوص العربية

### 📱 المكونات التفاعلية

- **التنقل الذكي**: أسهم تتكيف مع اتجاه اللغة
- **نموذج تواصل متقدم**: مع رسائل نجاح وخطأ واضحة
- **نموذج تواصل سريع**: في الصفحة الرئيسية للاستفسارات السريعة
- **معرض صور تفاعلي**: مع تأثيرات hover ووصف لكل صورة
- **أزرار تواصل عائمة**: واتساب، فيسبوك، اتصال هاتفي
- **زر العودة لأعلى**: يظهر حسب موضع التمرير

### 📊 المحتوى والصفحات

- **الصفحة الرئيسية**: hero، خدمات، معرض، آراء العملاء، نموذج سريع
- **حول الشركة**: قصة الشركة، الرؤية، الرسالة، المميزات
- **الخدمات**: 5 خدمات رئيسية مع صفحات تفصيلية
- **المدونة**: 9 مقالات مفيدة بالعربية والإنجليزية
- **التواصل**: نموذج، خريطة جوجل، معلومات الاتصال

### 🔍 تحسين محركات البحث (SEO)

- **Meta Tags شاملة**: العنوان، الوصف، الكلمات المفتاحية
- **Open Graph**: لمشاركة على فيسبوك
- **Twitter Cards**: لمشاركة على تويتر
- **Structured Data**: بيانات منظمة لجوجل
- **معلومات الأعمال**: العنوان، الهاتف، الإحداثيات الجغرافية

### ⚡ الأداء والجودة

- **PWA جاهز**: يمكن تثبيته كتطبيق
- **حمولة محسنة**: 111.75 kB JS، 6.24 kB CSS
- **رموز SVG**: أيقونات سريعة التحميل
- **تحميل كسول**: للصور والمكونات

## 🛠️ التقنيات المستخدمة

### الواجهة الأمامية

- **React.js 19.2.6** - إطار العمل الأساسي
- **React Router DOM 7.15.0** - للتنقل بين الصفحات
- **Tailwind CSS 3.4.19** - للتصميم والتنسيق
- **React Icons 5.6.0** - مكتبة الأيقونات

### الخدمات والوظائف

- **EmailJS 4.4.1** - لإرسال النماذج
- **Context API** - لإدارة الحالة العامة
- **Google Maps** - لعرض الموقع

### التطوير والنشر

- **Create React App** - أداة التطوير
- **ESLint** - فحص جودة الكود
- **PostCSS** - معالجة CSS
- **Webpack** - حزم الملفات

## 📁 هيكل المشروع

```
yamany-movers/
├── public/
│   ├── images/           # الصور والأيقونات
│   │   ├── about-us.jpg
│   │   ├── service-1.jpg to service-5.jpg
│   │   ├── gallery-1.jpg to gallery-20.jpg
│   │   ├── blog-1.jpg to blog-9.jpg
│   │   └── service-detail-1.jpg to service-detail-5.jpg
│   ├── index.html        # HTML الرئيسي مع SEO
│   ├── manifest.json     # PWA
│   └── robots.txt        # محركات البحث
├── src/
│   ├── components/       # المكونات المشتركة
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── FloatingContact.js
│   │   ├── ScrollToTop.js
│   │   └── QuickContactForm.js
│   ├── context/          # إدارة الحالة
│   │   └── AppContext.js
│   ├── i18n/            # الترجمات
│   │   └── translations.js
│   ├── pages/           # صفحات الموقع
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── ServiceDetail.js
│   │   ├── Blog.js
│   │   ├── BlogPost.js
│   │   └── Contact.js
│   ├── App.js           # التطبيق الرئيسي
│   └── index.js         # نقطة الدخول
├── package.json         # التبعيات
├── tailwind.config.js   # إعدادات Tailwind
└── README.md           # هذا الملف
```

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **تحميل المشروع**

```bash
git clone https://github.com/your-username/yamany-movers.git
cd yamany-movers
```

2. **تثبيت التبعيات**

```bash
npm install
```

3. **إعداد EmailJS** (اختياري للنماذج)

```bash
# أنشئ حساب على https://www.emailjs.com/
# احصل على Service ID, Template ID, Public Key
# حدث ملف .env بالقيم الحقيقية
```

4. **تشغيل المشروع**

```bash
npm start
```

5. **فتح المتصفح**

```
http://localhost:3000
```

## 📸 إضافة الصور

استبدل ملفات العناصر النائبة في `public/images/` بالصور الحقيقية:

- **الخدمات**: service-1.jpg إلى service-5.jpg (600px عرض)
- **المعرض**: gallery-1.jpg إلى gallery-20.jpg (400x400px)
- **المدونة**: blog-1.jpg إلى blog-9.jpg
- **حول الشركة**: about-us.jpg

## 🔧 التخصيص

### تغيير الألوان

في `tailwind.config.js`:

```javascript
colors: {
  primary: '#1e3a5f',    // الأزرق الداكن
  secondary: '#c9a84c',  // الذهبي
  accent: '#e63946',     // الأحمر
}
```

### إضافة لغة جديدة

في `src/i18n/translations.js`:

```javascript
export const translations = {
  ar: {
    /* الترجمات العربية */
  },
  en: {
    /* الترجمات الإنجليزية */
  },
  // أضف لغات أخرى هنا
};
```

### تخصيص النماذج

في `src/pages/Contact.js` و `src/components/QuickContactForm.js`

## 🌐 النشر

### على Vercel (مجاني وموصى به)

```bash
npm install -g vercel
vercel
```

### على Netlify

```bash
npm run build
# اسحب مجلد build إلى Netlify
```

### على GitHub Pages

```bash
npm install -g gh-pages
npm run build
npm run deploy
```

## 📞 الدعم والمساعدة

لأي استفسارات أو مشاكل:

- **البريد الإلكتروني**: info@alyamany.com
- **الهاتف**: +20 123 456 7890
- **واتساب**: https://wa.me/201234567890

## 📄 الترخيص

هذا المشروع محمي بحقوق الطبع والنشر © 2024 اليماني لنقل الأثاث

## 🤝 المساهمة

نرحب بالمساهمات! يرجى قراءة دليل المساهمة قبل البدء.

---

**تم تطوير هذا الموقع بحب ❤️ لخدمة عملائنا الكرام**
│ ├── index.js
│ └── index.css
├── package.json
└── tailwind.config.js

````

## 🚀 التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**

   ```bash
   git clone https://github.com/your-username/yamany-movers.git
   cd yamany-movers
````

2. **تثبيت التبعيات**

   ```bash
   npm install
   ```

3. **تشغيل المشروع**

   ```bash
   npm start
   ```

4. **افتح المتصفح**
   انتقل إلى [http://localhost:3000](http://localhost:3000)

## 📧 إعداد EmailJS

لجعل نموذج التواصل يعمل، تحتاج لإعداد EmailJS:

1. **إنشاء حساب** على [EmailJS](https://www.emailjs.com/)
2. **إنشاء خدمة** (Service)
3. **إنشاء قالب** (Template)
4. **الحصول على المفاتيح**:
   - Service ID
   - Template ID
   - Public Key

5. **تحديث الملف** `src/pages/Contact.js`:
   ```javascript
   await emailjs.send(
     "YOUR_SERVICE_ID", // ضع Service ID هنا
     "YOUR_TEMPLATE_ID", // ضع Template ID هنا
     formData,
     "YOUR_PUBLIC_KEY", // ضع Public Key هنا
   );
   ```

## 🌐 النشر

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# رفع مجلد build إلى Netlify
```

### GitHub Pages

```bash
npm install gh-pages --save-dev
# أضف في package.json:
"homepage": "https://your-username.github.io/yamany-movers",
"scripts": {
  "deploy": "gh-pages -d build"
}
npm run build
npm run deploy
```

## 📱 الصفحات

- **الرئيسية** (`/`): Hero section، خدمات، معرض، آراء العملاء
- **من نحن** (`/about`): نبذة عن الشركة، رؤية ورسالة، مميزات
- **الخدمات** (`/services`): عرض جميع الخدمات
- **تفاصيل الخدمة** (`/services/:id`): تفاصيل كل خدمة
- **المدونة** (`/blog`): قائمة المقالات
- **مقالة** (`/blog/:id`): محتوى المقالة
- **تواصل معنا** (`/contact`): نموذج تواصل ومعلومات

## 🎨 التخصيص

### الألوان

يمكن تغيير الألوان في `tailwind.config.js`:

```javascript
colors: {
  primary: '#1e3a5f',    // الأزرق الداكن
  secondary: '#c9a84c',  // الذهبي
  accent: '#e63946',     // الأحمر
  dark: '#0f172a',       // الخلفية المظلمة
  light: '#f8fafc'       // الخلفية الفاتحة
}
```

### الخطوط

المشروع يستخدم خطوط Google Fonts:

- Cairo و Tajawal للعربية

## 📞 التواصل

لأي استفسارات أو مشاكل:

- البريد الإلكتروني: info@alyamany.com
- الهاتف: +20 123 456 7890
- واتساب: +20 123 456 7890

## 📄 الترخيص

هذا المشروع مفتوح المصدر تحت رخصة MIT.

---

**تم التطوير بواسطة**: Mohamed Khamees El Yamany

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
