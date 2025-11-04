import React, { useState, useEffect } from 'react';
import { Bars3Icon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'about', title: '회사소개' },
    { id: 'references', title: '주요실적' },
    { id: 'solutions', title: '솔루션' },
    { id: 'security', title: '보안·유지보수' },
    { id: 'awards', title: '인증·수상' },
    { id: 'news', title: '최신동향' },
    { id: 'contact', title: '문의하기' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const headerBgClass = isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent';
  const textColorClass = isScrolled || isMenuOpen ? 'text-dark-gray' : 'text-white';
  const hoverTextColorClass = isScrolled ? 'text-dark-gray hover:text-medical-blue' : 'text-white hover:text-silver-gray';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-medical-blue cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
            OSANG<span className={`${textColorClass} transition-colors duration-300`}> TECHNOLOGY</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors duration-300 ${hoverTextColorClass}`}
              >
                {link.title}
              </button>
            ))}
          </nav>
          <button className="hidden md:block bg-medical-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition" onClick={() => scrollToSection('contact')}>
            상담 신청
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${textColorClass}`}
              aria-label="메뉴 열기"
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="container mx-auto px-6 pt-24 pb-8 flex flex-col h-full">
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl font-semibold text-dark-gray hover:text-medical-blue transition-colors"
                >
                  {link.title}
                </button>
              ))}
            </nav>
            <button 
              className="w-full bg-medical-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition font-bold text-lg" 
              onClick={() => scrollToSection('contact')}
            >
              상담 신청
            </button>
        </div>
      </div>
    </>
  );
};

export default Header;