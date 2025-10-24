import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ReferencesSection from './components/ReferencesSection';
import SolutionsSection from './components/SolutionsSection';
import SecuritySection from './components/SecuritySection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GeoPopup from './components/GeoPopup';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('geoPopupShown');
    if (!popupShown) {
      setShowPopup(true);
      sessionStorage.setItem('geoPopupShown', 'true');
    }
  }, []);


  return (
    <div className="bg-white text-dark-gray">
      {showPopup && <GeoPopup onClose={() => setShowPopup(false)} />}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ReferencesSection />
        <SolutionsSection />
        <SecuritySection />
        <AwardsSection />
        <TestimonialsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;