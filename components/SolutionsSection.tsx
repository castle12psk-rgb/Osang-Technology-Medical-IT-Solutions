import React from 'react';
import { CmsIcon, CrmIcon, ItsmIcon, ViewGridIcon, ShieldCheckIcon, DocumentReportIcon, LightbulbIcon, LinkIcon, CogIcon, ChartBarIcon, ServerIcon, DatabaseIcon, ArrowRightIcon, UserGroupIcon, CheckCircleIcon } from './Icons';

const solutions = [
  {
    icon: <CmsIcon className="w-10 h-10 text-medical-blue" />,
    name: 'OSE-Medical CMS 2.0',
    tagline: '의료기관 맞춤형 디지털 콘텐츠 허브',
    features: [
      { icon: <ViewGridIcon className="w-6 h-6 text-medical-blue" />, text: '템플릿 기반 확장성' },
      { icon: <ShieldCheckIcon className="w-6 h-6 text-medical-blue" />, text: 'ISMS-P 보안 준수' },
      { icon: <DocumentReportIcon className="w-6 h-6 text-medical-blue" />, text: '통합 콘텐츠 관리' },
    ],
    benefits: [
      '콘텐츠·로그·통계 통합으로 <strong>운영 효율성 극대화</strong>',
      '의료법 및 개인정보보호법 규제 완벽 대응'
    ]
  },
  {
    icon: <CrmIcon className="w-10 h-10 text-medical-blue" />,
    name: 'OSE-AI Medical CRM 1.0',
    tagline: '데이터 기반 환자 경험 혁신 솔루션',
    features: [
        { icon: <LightbulbIcon className="w-6 h-6 text-medical-blue" />, text: 'AI 개인화 추천' },
        { icon: <LinkIcon className="w-6 h-6 text-medical-blue" />, text: 'EMR/EHR 실시간 연동' },
        { icon: <CogIcon className="w-6 h-6 text-medical-blue" />, text: '의료진 업무 자동화' },
    ],
    benefits: [
      '환자 만족도 <strong class="text-medical-blue font-bold text-base">40% ↑</strong> & 운영비 <strong class="text-medical-blue font-bold text-base">25% ↓</strong>',
      '개인화된 의료 서비스로 병원 브랜드 가치 제고',
    ]
  },
  {
    icon: <ItsmIcon className="w-10 h-10 text-medical-blue" />,
    name: 'OSE-ITSM 유지보수 솔루션',
    tagline: '안정적인 병원 IT 운영을 위한 자동화 시스템',
    features: [
        { icon: <ChartBarIcon className="w-6 h-6 text-medical-blue" />, text: 'PMS 기반 이슈 트래킹' },
        { icon: <DocumentReportIcon className="w-6 h-6 text-medical-blue" />, text: '자동화된 리포팅' },
        { icon: <ServerIcon className="w-6 h-6 text-medical-blue" />, text: '실시간 통합 모니터링' },
    ],
    benefits: [
        '유지보수 처리율 <strong class="text-medical-blue font-bold text-base">99.9%</strong> 달성',
        '통합 모니터링으로 장애 발생 사전 예방 및 신속 대응',
    ]
  },
];

const SolutionCard: React.FC<{ solution: typeof solutions[0] }> = ({ solution }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-4">
                <div className="bg-medical-blue/10 p-3 rounded-lg flex-shrink-0">
                    {solution.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-dark-gray">{solution.name}</h3>
                    <p className="text-sm text-medium-gray">{solution.tagline}</p>
                </div>
            </div>
        </div>
        
        <div className="p-6 flex-grow">
            <h4 className="font-bold text-dark-gray mb-4">주요 기능</h4>
            <ul className="space-y-3">
                {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-3 mt-0.5">{feature.icon}</div>
                        <span className="text-medium-gray">{feature.text}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="p-6 bg-gray-50 mt-auto border-t border-gray-200">
            <h4 className="font-bold text-dark-gray mb-3">핵심 기대효과</h4>
            <div className="space-y-2 text-sm text-medium-gray">
                {solution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-medical-blue mr-2 mt-1">&#10003;</span>
                        <p dangerouslySetInnerHTML={{ __html: benefit }} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CrmArchitecture = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
    <h4 className="text-lg font-bold mb-4 text-center">AI CRM 데이터 흐름도</h4>
    <div className="flex-grow flex items-center justify-center text-xs">
      <div className="flex items-center gap-2 w-full">
        {/* Source */}
        <div className="text-center w-1/4">
          <DatabaseIcon className="w-12 h-12 mx-auto text-medium-gray" />
          <p className="font-semibold mt-1">EMR/EHR</p>
          <p className="text-gray-500">병원 내부 시스템</p>
        </div>
        <ArrowRightIcon className="w-6 h-6 text-gray-400 shrink-0" />
        {/* Core */}
        <div className="bg-medical-blue/10 p-3 rounded-lg text-center border-2 border-dashed border-medical-blue flex-grow">
          <p className="font-bold text-medical-blue">OSE-AI CRM</p>
          <div className="text-left text-[10px] sm:text-xs space-y-1 mt-2">
              <p>• AI 분석 엔진</p>
              <p>• 실시간 연동 GW</p>
              <p>• ISMS-P 보안</p>
          </div>
        </div>
        <ArrowRightIcon className="w-6 h-6 text-gray-400 shrink-0" />
        {/* Destination */}
        <div className="text-center w-1/4">
          <UserGroupIcon className="w-12 h-12 mx-auto text-medium-gray" />
          <p className="font-semibold mt-1">환자/의료진</p>
          <p className="text-gray-500">Web/App</p>
        </div>
      </div>
    </div>
    <p className="text-center text-sm text-medium-gray mt-4"><strong>AWS 클라우드</strong> 기반의 안전하고 확장 가능한 아키텍처</p>
  </div>
);

const CmsArchitecture = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
        <h4 className="text-lg font-bold mb-4 text-center">OSE-Medical CMS 구조</h4>
        <div className="flex-grow p-4 bg-gray-100 rounded-lg">
            <div className="bg-white shadow-md rounded-md overflow-hidden h-full">
                {/* Header */}
                <div className="h-6 bg-gray-200 flex items-center px-2 space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Body */}
                <div className="flex h-[150px]">
                    <div className="w-2/5 bg-gray-50 p-2 border-r">
                        <p className="font-bold text-xs mb-2">관리메뉴</p>
                        <div className="space-y-1.5 text-xs">
                            <div className="bg-medical-blue/20 text-medical-blue font-semibold p-1 rounded">권한/접근 관리</div>
                            <div className="p-1 rounded">콘텐츠 관리</div>
                            <div className="p-1 rounded">게시판 관리</div>
                            <div className="p-1 rounded">통계 관리</div>
                        </div>
                    </div>
                    <div className="w-3/5 p-2">
                        <p className="font-bold text-xs mb-2">콘텐츠 수정 이력</p>
                        <div className="text-xs bg-gray-100 p-1.5 rounded space-y-1">
                            <p>v3: 2024-05-20 by admin</p>
                            <p>v2: 2024-05-19 by cadmin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-center text-sm text-medium-gray mt-4"><strong>다중 사이트</strong> 및 <strong>세분화된 권한 관리</strong>가 가능한 통합 CMS</p>
    </div>
);

const ItsmArchitecture = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
        <h4 className="text-lg font-bold mb-4 text-center">PMS 기반 유지보수 프로세스</h4>
        <div className="flex-grow flex flex-col md:flex-row items-center md:justify-around text-center text-xs px-2 relative gap-8 md:gap-0">
             <div className="absolute top-1/2 left-8 right-8 border-t-2 border-dashed border-gray-300 -translate-y-1/2 hidden md:block"></div>
             {/* Steps */}
             <div className="relative bg-white z-10">
                 <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto border-4 border-white"><DocumentReportIcon className="w-8 h-8 text-medium-gray"/></div>
                 <p className="font-semibold mt-1">요청 접수</p>
             </div>
             <div className="relative bg-white z-10">
                 <div className="w-16 h-16 rounded-full bg-medical-blue text-white flex items-center justify-center mx-auto border-4 border-white"><CogIcon className="w-8 h-8"/></div>
                 <p className="font-semibold mt-1">분석 및 처리</p>
             </div>
             <div className="relative bg-white z-10">
                 <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto border-4 border-white"><CheckCircleIcon className="w-8 h-8 text-green-600"/></div>
                 <p className="font-semibold mt-1">완료 보고</p>
             </div>
        </div>
        <div className="mt-4 pt-4 border-t text-center">
            <p className="font-bold text-lg">
                평균 처리율 <strong className="text-medical-blue text-2xl">99.9%</strong>
            </p>
            <p className="text-sm text-medium-gray">체계적 PMS를 통한 신속하고 투명한 이슈 관리</p>
        </div>
    </div>
);


const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">Core Solutions</h2>
          <p className="text-lg text-medium-gray mt-2">병원의 디지털 혁신을 가속화하는 핵심 기술</p>
          <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((s, i) => <SolutionCard key={i} solution={s} />)}
        </div>

        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">솔루션 상세 구조</h3>
            <p className="text-md text-medium-gray mt-1">오상테크놀로지의 기술력이 집약된 솔루션 아키텍처를 소개합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CrmArchitecture />
            <CmsArchitecture />
            <ItsmArchitecture />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;