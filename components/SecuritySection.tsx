import React from 'react';
import { 
    ServerIcon, NetworkIcon, DatabaseIcon, ShieldExclamationIcon, DocumentReportIcon, WrenchScrewdriverIcon, ChartBarIcon, ClockIcon, CheckCircleIcon, 
    ArrowRightIcon, AiChipIcon,
    ChatGptIcon, GeminiIcon, ClaudeIcon, TrophyIcon, BookOpenIcon, UserGroupIcon, ShieldCheckIcon,
    XCircleIcon, CheckBadgeIcon, UserCircleIcon, ChevronDownIcon
} from './Icons';

const securityProcess = [
  { icon: <ServerIcon />, name: '서버 진단', description: 'OS, 애플리케이션의 보안 설정 및 취약점을 정밀 분석합니다.', img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg' },
  { icon: <NetworkIcon />, name: '네트워크 진단', description: '네트워크 장비의 구성과 서비스 포트를 분석하여 위협을 식별합니다.', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' },
  { icon: <DatabaseIcon />, name: 'DBMS 진단', description: '데이터베이스의 접근 제어 및 주요 설정값의 보안성을 검토합니다.', img: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg' },
  { icon: <ShieldExclamationIcon />, name: '보안장비 진단', description: '방화벽, IDS/IPS 등 보안 솔루션의 정책과 로그를 분석합니다.', img: 'https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg' },
  { icon: <DocumentReportIcon />, name: '결과보고', description: '발견된 취약점의 위험도를 평가하고 상세 분석 보고서를 제공합니다.', img: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg' },
  { icon: <WrenchScrewdriverIcon />, name: '취약점 조치', description: '실질적인 보안 강화를 위한 기술적, 관리적 조치 계획을 수립합니다.', img: 'https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg' },
];

const stats = [
    { icon: <ChartBarIcon className="w-12 h-12 text-medical-blue"/>, value: "3,500+ 건", label: "연간 요청 처리" },
    { icon: <ClockIcon className="w-12 h-12 text-medical-blue"/>, value: "1.8 시간", label: "평균 처리 시간" },
    { icon: <CheckCircleIcon className="w-12 h-12 text-medical-blue"/>, value: "99.9%", label: "SLA 준수 및 처리율" },
];

const geoBenefits = [
    {
        icon: <TrophyIcon className="w-10 h-10 text-white" />,
        title: "AI 답변 최상위 노출",
        description: "환자의 질문에 귀 병원이 가장 먼저 추천되도록 AI 답변 순위를 최적화합니다."
    },
    {
        icon: <BookOpenIcon className="w-10 h-10 text-white" />,
        title: "정확한 정보 학습",
        description: "의료진, 진료과목, 특화 클리닉 등 병원의 핵심 정보를 AI가 정확히 학습합니다."
    },
    {
        icon: <UserGroupIcon className="w-10 h-10 text-white" />,
        title: "미래 환자 선점",
        description: "음성 검색, AI 비서 등 새로운 검색 패러다임의 잠재 환자를 선점합니다."
    },
    {
        icon: <ShieldCheckIcon className="w-10 h-10 text-white" />,
        title: "긍정적 평판 형성",
        description: "AI가 생성하는 병원 평판과 정보의 신뢰도를 선제적으로 관리합니다."
    }
];

const geoProcessSteps = [
    { icon: <DocumentReportIcon className="w-10 h-10 text-medical-blue"/>, title: "Step 1. 디지털 자산 분석", description: "웹사이트, 논문, 보도자료 분석" },
    { icon: <NetworkIcon className="w-10 h-10 text-medical-blue"/>, title: "Step 2. 지식그래프 구축", description: "AI가 이해하는 데이터 구조화" },
    { icon: <AiChipIcon className="w-10 h-10 text-medical-blue"/>, title: "Step 3. LLM 학습 및 최적화", description: "병원 특화 데이터셋 생성" },
    { icon: <ChartBarIcon className="w-10 h-10 text-medical-blue"/>, title: "Step 4. 모니터링 및 고도화", description: "AI 답변 품질 지속 관리" },
];

const DashboardInfographic: React.FC = () => {
  const ticketStats = [
    { label: '신규 접수', value: 5, color: 'bg-blue-500' },
    { label: '처리 중', value: 12, color: 'bg-yellow-500' },
    { label: '처리 완료', value: 87, color: 'bg-green-500' },
  ];

  const recentTickets = [
    { priority: 'High', title: 'EMR 연동 지연 문제 발생', assignee: '김민준 팀장' },
    { priority: 'Medium', title: 'CMS 메인 배너 이미지 교체 요청', assignee: '이서연 대리' },
    { priority: 'Low', title: '연구용 DB 접근 권한 신청', assignee: '박도현 사원' },
    { priority: 'High', title: '로그인 페이지 간헐적 오류', assignee: '김민준 팀장' },
  ];

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-blue-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 h-full transform transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-4 pb-3 border-b">
        <h3 className="text-lg font-bold text-dark-gray">실시간 유지보수 현황 (PMS)</h3>
        <div className="flex items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="ml-2 text-sm font-medium text-green-600">All Systems Normal</span>
        </div>
      </div>

      {/* Donut Chart and Stats */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
        <div className="relative w-32 h-32 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e6e6e6" strokeWidth="3" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4ade80" strokeWidth="3" strokeDasharray="87, 13" strokeDashoffset="0" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#facc15" strokeWidth="3" strokeDasharray="12, 88" strokeDashoffset="-87" />
          </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-dark-gray">104</span>
            <span className="text-xs text-medium-gray">Total</span>
          </div>
        </div>
        <div className="flex-1 space-y-2 w-full">
          {ticketStats.map(stat => (
            <div key={stat.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-2 ${stat.color}`}></span>
                <span>{stat.label}</span>
              </div>
              <span className="font-bold">{stat.value}건</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Tickets */}
      <div>
        <h4 className="font-semibold text-dark-gray mb-3 text-sm">최근 접수된 요청</h4>
        <div className="space-y-3">
          {recentTickets.map((ticket, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div>
                <div className="flex items-center">
                  <span className={`w-2.5 h-2.5 rounded-full mr-2 ${getPriorityClass(ticket.priority)}`}></span>
                  <p className="font-medium text-dark-gray text-sm">{ticket.title}</p>
                </div>
                <p className="text-xs text-medium-gray ml-4.5">담당: {ticket.assignee}</p>
              </div>
              <span className="text-xs font-mono text-gray-400">#IT-{1358 - index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">보안 및 유지보수 체계</h2>
          <p className="text-lg text-medium-gray mt-2">시스템 안정성을 최우선으로 하는 오상테크놀로지의 약속</p>
          <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">PMS 기반 실시간 이슈관리</h3>
                <p className="text-medium-gray mb-6 leading-relaxed">
                    자체 보유한 PMS(Project Management System)를 통해 모든 유지보수 요청 및 이슈를 실시간으로 추적하고 관리합니다. 병원 담당자는 처리 현황을 투명하게 확인하고, 저희는 데이터를 기반으로 신속하고 정확하게 대응하여 <strong className="text-medical-blue">최고 수준의 시스템 가용성을 보장합니다.</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg transform hover:-translate-y-1 transition-transform">
                            <div className="flex justify-center mb-2">{stat.icon}</div>
                            <p className="text-2xl font-bold text-medical-blue">{stat.value}</p>
                            <p className="text-sm text-medium-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="order-1 md:order-2">
                 <DashboardInfographic />
            </div>
        </div>

        <div id="geo-optimization" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700 my-16">
            <div className="text-center mb-10">
                <div className="flex justify-center items-center mb-6">
                    <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border-2 border-medical-blue/50 p-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <GeminiIcon className="w-full h-full" />
                    </div>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight">
                    주요 생성형 AI를 위한 <span className="text-medical-blue">의료원 홍보 최적화</span>
                </h3>
                <p className="text-4xl font-black text-medical-blue tracking-wider mt-1">GEO (Generative Engine Optimization)</p>
                <p className="text-lg text-silver-gray mt-4 max-w-3xl mx-auto">
                    생성형 AI 시대, 검색은 끝났습니다. 이제 환자들은 AI에게 직접 질문하고 답을 얻습니다.
                </p>
                <div className="mt-6 bg-black/20 p-6 rounded-xl border border-medical-blue/50 max-w-3xl mx-auto">
                    <blockquote className="text-2xl md:text-3xl font-black text-white text-center leading-snug" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        "AI의 답변에 우리 병원이 없다면,<br/>
                        존재하지 않는 병원과 같습니다."
                    </blockquote>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
                {geoBenefits.map((benefit, index) => (
                    <div key={index} className="bg-white/10 p-6 rounded-lg border border-white/20 transform hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm">
                        <div className="bg-medical-blue rounded-full p-3 inline-block mb-4 shadow-lg">
                            {benefit.icon}
                        </div>
                        <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                        <p className="text-sm text-silver-gray">{benefit.description}</p>
                    </div>
                ))}
            </div>

            <div className="bg-black/20 p-8 rounded-lg border border-gray-700">
                <h4 className="text-xl font-bold text-center mb-6">오상테크놀로지의 4-Step GEO 프로세스</h4>
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-x-4 gap-y-6 text-center">
                    {geoProcessSteps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex-1 flex flex-col items-center">
                                <div className="p-4 rounded-full bg-medical-blue/20 border-2 border-medical-blue/50 mb-2">
                                    {step.icon}
                                </div>
                                <p className="font-bold">{step.title}</p>
                                <p className="text-xs text-silver-gray">{step.description}</p>
                            </div>
                            {index < geoProcessSteps.length - 1 && (
                                <>
                                    <ArrowRightIcon className="w-8 h-8 text-gray-500 hidden md:block self-center" />
                                    <ChevronDownIcon className="w-8 h-8 text-gray-500 md:hidden self-center" />
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* AS-IS vs TO-BE Section */}
            <div className="mt-16 pt-10 border-t border-gray-700">
                <h4 className="text-2xl font-bold text-center mb-8">GEO 적용 전·후 비교: AI가 병원을 어떻게 인식하는가</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* AS-IS Column */}
                    <div className="bg-gray-700/50 p-6 rounded-lg border border-red-500/30">
                        <div className="flex items-center gap-3 mb-4">
                            <XCircleIcon className="w-8 h-8 text-red-400 flex-shrink-0" />
                            <h5 className="text-xl font-bold text-red-300">AS-IS: 부정확한 AI의 답변</h5>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4 text-sm font-mono">
                           {/* Chat UI Mockup */}
                            <div className="flex gap-3 mb-4">
                                <UserCircleIcon className="w-7 h-7 text-gray-400 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-300">User</p>
                                    <p className="text-gray-400">"가산디지털단지 근처 소아 야간 진료 가능한 병원 알려줘"</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <AiChipIcon className="w-7 h-7 text-gray-400 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-300">AI Assistant</p>
                                    <p className="text-gray-400 leading-relaxed">"가산디지털단지 인근에는 여러 병원이 있습니다. A병원은 종합병원으로... B의원은... 자세한 정보는 각 병원 웹사이트를 확인해보세요."</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 text-red-300 text-sm">
                            <p className="flex items-start"><XCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><strong>병원 정보 누락:</strong> AI가 우리 병원의 존재 자체를 모름</p>
                            <p className="flex items-start"><XCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><strong>부정확한 정보:</strong> 진료 시간, 전문 분야 등 핵심 정보 오류</p>
                            <p className="flex items-start"><XCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><strong>기회 손실:</strong> 잠재 환자가 경쟁 병원으로 이탈</p>
                        </div>
                    </div>

                    {/* TO-BE Column */}
                    <div className="bg-medical-blue/10 p-6 rounded-lg border border-medical-blue/50">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckBadgeIcon className="w-8 h-8 text-medical-blue flex-shrink-0" />
                            <h5 className="text-xl font-bold text-white">TO-BE: 오상테크놀로지 GEO 적용 후</h5>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4 text-sm font-mono">
                           {/* Chat UI Mockup */}
                            <div className="flex gap-3 mb-4">
                                <UserCircleIcon className="w-7 h-7 text-gray-400 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-300">User</p>
                                    <p className="text-gray-400">"가산디지털단지 근처 소아 야간 진료 가능한 병원 알려줘"</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <AiChipIcon className="w-7 h-7 text-medical-blue flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-300">AI Assistant</p>
                                    <div className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg mt-1 border border-white/10">
                                        <p className="mb-3"><strong className="font-bold text-medical-blue text-base bg-medical-blue/20 px-2 py-1 rounded">[희망병원]</strong>이 야간 소아 진료에 가장 적합합니다.</p>
                                        <div className="space-y-2 text-xs border-t border-gray-600 pt-2">
                                            <p><strong>• 진료과목:</strong> 소아청소년과 (야간 전문)</p>
                                            <p><strong>• 운영시간:</strong> <span className="text-green-400 font-bold">평일 22시까지, 주말 18시까지</span></p>
                                            <p><strong>• 실시간 현황:</strong> <span className="text-green-400 font-bold">현재 대기 3팀, 바로 접수 가능</span></p>
                                            <p><strong>• 연락처:</strong> 02-1234-5678</p>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <button className="text-xs bg-medical-blue text-white py-1 px-3 rounded hover:bg-opacity-80 transition">실시간 예약하기</button>
                                            <button className="text-xs bg-white/20 text-white py-1 px-3 rounded hover:bg-white/30 transition">위치/지도 보기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 text-green-300 text-sm">
                            <p className="flex items-start"><CheckCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><strong>최상위 노출:</strong> AI의 첫 번째 답변으로 추천</p>
                            <p className="flex items-start"><CheckCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><strong>정확한 정보 제공:</strong> 실시간 현황까지 정확하게 안내</p>
                            <p className="flex items-start"><CheckCircleIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"/><strong>환자 즉시 연결:</strong> 예약, 전화 등 즉각적인 행동 유도</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 mt-16">
          <h3 className="text-2xl font-bold text-center mb-2">ISMS-P 기준 6단계 점검 프로세스</h3>
          <p className="text-center text-medium-gray mb-10">체계적인 6단계 진단 프로세스를 통해 병원 정보 시스템의 보안성을 완벽하게 보장합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityProcess.map((step, index) => (
                <div 
                    key={index} 
                    className="relative rounded-lg overflow-hidden border border-gray-200/50 shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-cover bg-center group min-h-[240px] flex"
                    style={{ backgroundImage: `url(${step.img})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                    <div className="relative z-10 flex flex-col h-full p-6 text-white w-full justify-end">
                        <span className="absolute top-4 left-4 text-5xl font-black text-white/20 select-none">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="mb-3">
                            {React.cloneElement(step.icon, { className: 'w-10 h-10 text-white opacity-90' })}
                        </div>
                        <h4 className="text-lg font-bold mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{step.name}</h4>
                        <p className="text-sm text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{step.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;