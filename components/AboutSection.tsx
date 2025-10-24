import React from 'react';
import { ShieldCheckIcon, CloudIcon, AccessibilityIcon, BriefcaseIcon, BuildingOfficeIcon, HeadsetMicIcon, RocketLaunchIcon, TrophyIcon, SparklesIcon } from './Icons';

const AboutSection: React.FC = () => {
    
  const keyMetrics = [
    {
      icon: <BriefcaseIcon />,
      value: "18년 이상",
      label: "의료 IT 전문성",
      img: 'https://picsum.photos/seed/ITexpert/400/300'
    },
    {
      icon: <BuildingOfficeIcon />,
      value: "120+",
      label: "병원 고객사",
      img: 'https://picsum.photos/seed/hospitalbldg/400/300'
    },
    {
      icon: <HeadsetMicIcon />,
      value: "99.9%",
      label: "기술지원 만족도",
      img: 'https://picsum.photos/seed/supportteam/400/300'
    }
  ];

  const historyPhases = [
    {
      icon: <RocketLaunchIcon className="w-12 h-12 text-medical-blue" />,
      title: "1단계: 의료 IT 기반 구축",
      period: "2007-2014",
      milestones: [
        "㈜오상테크놀로지 법인 설립",
        "ISO 9001 품질경영시스템 인증 획득",
        "서울대학교병원 첫 유지보수 계약",
        "자체 CMS 솔루션 v1.0 개발 완료"
      ]
    },
    {
      icon: <TrophyIcon className="w-12 h-12 text-medical-blue" />,
      title: "2단계: 기술 혁신 및 시장 확장",
      period: "2015-2020",
      milestones: [
        "INNO-BIZ 기술혁신형 중소기업 인증",
        "SecureKorea 2018 공공부문 대상 수상",
        "주요 클라우드(AWS, Azure) 파트너십",
        "고려대학교의료원 통합 웹사이트 구축"
      ]
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-medical-blue" />,
      title: "3단계: AI 솔루션으로 시장 선도",
      period: "2021-현재",
      milestones: [
        "ISMS-P 인증 컨설팅 사업 개시",
        "OSE-Medical CMS 2.0 출시",
        "OSE-AI Medical CRM 솔루션 상용화",
        "가톨릭중앙의료원 통합 유지보수 계약"
      ]
    }
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
                className="relative rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden text-white bg-cover bg-center h-48 flex flex-col justify-center items-center group"
                style={{ backgroundImage: `url(${metric.img})` }}
            >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-medical-blue/80 transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                    {React.cloneElement(metric.icon, { className: "w-12 h-12 text-white mb-2 mx-auto" })}
                    <p className="text-4xl font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{metric.value}</p>
                    <p className="text-md mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{metric.label}</p>
                </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">병원을 가장 잘 이해하는 기술 전문 기업</h3>
            <p className="text-medium-gray mb-6 leading-relaxed">
              2007년 설립된 오상테크놀로지는 복잡하고 높은 보안 수준을 요구하는 의료정보화 분야의 길을 걸어왔습니다. 
              수많은 상급종합병원 및 대형병원 프로젝트를 성공적으로 수행하며 축적한 독보적인 기술력과 노하우는, 
              병원의 특수한 운영 환경과 필요를 정확히 이해하고 최적의 솔루션을 제공하는 가장 큰 자산입니다.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <ShieldCheckIcon className="w-10 h-10 text-medical-blue mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold">강력한 보안 체계 (ISMS-P)</h4>
                    <p className="text-sm text-medium-gray">정보보호 관리체계 인증을 통한 데이터 보호 및 규제 준수</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <CloudIcon className="w-10 h-10 text-medical-blue mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold">안정적인 클라우드 인프라</h4>
                    <p className="text-sm text-medium-gray">주요 클라우드 파트너십으로 유연하고 확장 가능한 시스템 제공</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <AccessibilityIcon className="w-10 h-10 text-medical-blue mr-4 flex-shrink-0" />
                <div>
                    <h4 className="font-bold">웹 접근성 및 표준 준수</h4>
                    <p className="text-sm text-medium-gray">모든 사용자를 위한 포용적인 디지털 의료 정보 환경 구현</p>
                </div>
              </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-2">성장의 발자취: 단계별 혁신 스토리</h3>
            <p className="text-center text-medium-gray mb-8">오상테크놀로지는 명확한 비전 아래 지속적인 성장을 거듭해왔습니다.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {historyPhases.map((phase, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-medical-blue transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {phase.icon}
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-dark-gray">{phase.title}</h4>
                      <p className="text-sm font-semibold text-medical-blue">{phase.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-medical-blue mr-2 mt-1">&#10003;</span>
                        <span className="text-medium-gray text-sm">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;