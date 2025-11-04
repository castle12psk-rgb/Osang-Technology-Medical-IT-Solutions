import React from 'react';
import { ShieldCheckIcon, LinkIcon, SparklesIcon, BriefcaseIcon, BuildingOfficeIcon, ChartBarIcon, ArrowRightIcon } from './Icons';

const AboutSection: React.FC = () => {
    
  const keyMetrics = [
    {
      icon: <BriefcaseIcon />,
      value: "18년 이상",
      label: "의료 IT 전문성",
      img: 'https://cdn.aitimes.kr/news/photo/201811/12758_12919_2139.jpg'
    },
    {
      icon: <BuildingOfficeIcon />,
      value: "120+",
      label: "병원 고객사",
      img: 'https://www.unite.ai/wp-content/uploads/2024/06/Med-Gemini-3.webp'
    },
    {
      icon: <ChartBarIcon />,
      value: "99.9%",
      label: "유지보수 만족도",
      img: 'https://www.worklaw.co.kr/ja_data/upload/intranet/worklaw/images/pjt8.jpg'
    }
  ];

  const coreValues = [
    {
      icon: <LinkIcon />,
      impactText: "완벽한 통합",
      title: "의료정보시스템 연계",
      description: "FHIR 표준 RESTful API 기반으로 EMR, PHIS 등 병원 시스템을 완벽히 연동하여 통합 디지털 환경을 구축합니다.",
    },
    {
      icon: <SparklesIcon />,
      impactText: "최적의 경험",
      title: "사용자 중심 UI/UX",
      description: "개인화된 건강/진료정보를 제공하고, 편리한 환자 진료예약 중심 UI/UX, 시스템 통합관리(계정/진료/콘텐츠/보안 등) 를 제공합니다.",
    },
    {
      icon: <ShieldCheckIcon />,
      impactText: "철저한 보안",
      title: "ISMS-P 인증 및 데이터 보호",
      description: "정보보호 관리체계 인증 지원, 장애 대응 체계와 정기적인 백업 및 복구 절차를 통해 무중단 서비스와 데이터 보호를 보장합니다.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">18년의 혁신, 의료 IT의 미래를 선도합니다</h2>
          <p className="text-lg text-medium-gray mt-2">신뢰와 기술력을 바탕으로 병원의 디지털 혁신을 위한 최적의 파트너가 되겠습니다.</p>
          <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {keyMetrics.map((metric, index) => (
            <div 
                key={index} 
                className="relative rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden text-white h-48 flex flex-col justify-center items-center group"
            >
                <img src={metric.img} alt={metric.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/40 to-transparent transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                    {React.cloneElement(metric.icon, { className: "w-12 h-12 text-white mb-2 mx-auto" })}
                    <p className="text-[38px] leading-tight font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{metric.value}</p>
                    <p className="text-lg mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{metric.label}</p>
                </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Descriptive Text */}
          <div className="flex flex-col">
            <p className="text-base font-bold text-medical-blue mb-2 tracking-wider">OUR CORE IDENTITY</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-dark-gray mb-4 leading-tight">
              병원을 <span className="text-medical-blue">가장 잘 이해하는</span><br/>
              기술 전문 기업
            </h3>
            <p className="text-base lg:text-lg text-medium-gray mb-8 leading-relaxed">
              2007년 설립된 오상테크놀로지는 복잡하고 높은 보안 수준을 요구하는 의료정보화 분야의 길을 걸어왔습니다. 
              수많은 상급종합병원 및 대형병원 프로젝트를 성공적으로 수행하며 축적한 독보적인 기술력과 노하우는, 
              병원의 특수한 운영 환경과 필요를 정확히 이해하고 최적의 솔루션을 제공하는 가장 큰 자산입니다.
            </p>
            <a 
              href="#solutions" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group text-medical-blue font-semibold inline-flex items-center text-base self-start py-2 px-4 rounded-lg bg-medical-blue/10 hover:bg-medical-blue/20 transition-colors"
            >
              솔루션 더 알아보기
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          {/* Right Column: Google-style cards */}
          <div className="grid grid-cols-1 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-medical-blue hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="bg-medical-blue/10 p-3 rounded-full flex-shrink-0 mt-1">
                    {React.cloneElement(value.icon, { className: "w-6 h-6 text-medical-blue" })}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-gray mb-1">
                      <span className="text-medical-blue">{value.impactText}:</span> {value.title}
                    </h4>
                    <p className="text-medium-gray leading-snug">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;