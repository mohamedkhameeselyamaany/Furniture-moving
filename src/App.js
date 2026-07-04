
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContact />
          <ScrollToTop />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;