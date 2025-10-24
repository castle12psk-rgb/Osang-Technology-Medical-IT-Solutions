
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-medical-blue cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          OSANG<span className={`${isScrolled ? 'text-dark-gray' : 'text-white'} transition-colors duration-300`}>TECH</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-dark-gray hover:text-medical-blue' : 'text-white hover:text-silver-gray'}`}
            >
              {link.title}
            </button>
          ))}
        </nav>
        <button className="hidden md:block bg-medical-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition" onClick={() => scrollToSection('contact')}>
          상담 신청
        </button>
        {/* Mobile menu button can be added here */}
      </div>
    </header>
  );
};

export default Header;
