import React, { useState, useEffect } from 'react';

const CountUp: React.FC<{ end: number; duration?: number; className?: string; suffix?: string; }> = ({ end, duration = 1500, className, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out quint function for a smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 5);
      const current = Math.floor(easedProgress * (endValue - start) + start);
      
      if (progress < 1) {
        setCount(current);
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    const animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return <span className={className}>{count}{suffix}</span>;
};


const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <h1 className="font-black mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            <span className="block text-4xl sm:text-5xl md:text-7xl mb-2 text-white fade-in-up" style={{ animationDelay: '0.2s' }}>
                의료정보화 전문성과 AI 기술로,
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl text-silver-gray fade-in-up" style={{ animationDelay: '0.6s' }}>
                병원 디지털 혁신을 설계합니다.
            </span>
        </h1>
        
        <div 
          className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 mb-10 text-center fade-in-up p-4 bg-black/20 rounded-xl border border-white/20" 
          style={{ animationDelay: '1.0s', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
        >
          <div className="flex flex-col items-center">
            <CountUp end={18} className="text-4xl md:text-5xl font-bold text-white tracking-tighter" />
            <p className="text-sm md:text-base text-silver-gray font-medium mt-1">년간의 기술력</p>
          </div>
          <div className="hidden md:block text-4xl text-white/30 font-light select-none">|</div>
          <div className="flex flex-col items-center">
            <CountUp end={9} className="text-4xl md:text-5xl font-bold text-white tracking-tighter" />
            <p className="text-sm md:text-base text-silver-gray font-medium mt-1">상급종합병원 실적</p>
          </div>
          <div className="hidden md:block text-4xl text-white/30 font-light select-none">|</div>
          <div className="flex flex-col items-center">
            <CountUp end={120} suffix="+" className="text-4xl md:text-5xl font-bold text-white tracking-tighter" />
            <p className="text-sm md:text-base text-silver-gray font-medium mt-1">병원 프로젝트</p>
          </div>
        </div>

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