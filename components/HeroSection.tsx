
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="font-black mb-4 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            <span className="block text-5xl md:text-7xl mb-2 text-white fade-in-up" style={{ animationDelay: '0.2s' }}>
                18년 의료정보화 전문성과 AI 기술로,
            </span>
            <span className="block text-4xl md:text-5xl text-silver-gray fade-in-up" style={{ animationDelay: '0.6s' }}>
                병원 디지털 혁신을 설계합니다.
            </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-silver-gray font-light fade-in-up" style={{ animationDelay: '1.0s' }}>
          상급종합병원 9개소, 120개 이상 병원 구축 및 유지보수 실적을 보유한 전문기업 오상테크놀로지
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up" style={{ animationDelay: '1.4s' }}>
          <button onClick={() => scrollToSection('contact')} className="bg-medical-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition transform hover:scale-105">
            병원 유지보수 상담하기
          </button>
          <button onClick={() => scrollToSection('solutions')} className="bg-white text-medical-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition transform hover:scale-105">
            AI Medical CMS 보기
          </button>
          <button onClick={() => scrollToSection('references')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-dark-gray transition transform hover:scale-105">
            프로젝트 실적 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;