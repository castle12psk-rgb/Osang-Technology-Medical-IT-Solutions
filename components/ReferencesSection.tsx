import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { ShieldCheckIcon, UserGroupIcon, BookOpenIcon, RocketLaunchIcon, CheckCircleIcon } from './Icons';

const hospitalCases = [
  {
    name: '서울대학교병원',
    title: '차세대 EMR 연동 및 데이터 기반 보안 고도화',
    details: '공공의료의 중심, 서울대학교병원의 디지털 인프라를 한 단계 격상시킨 프로젝트입니다. EMR 시스템과의 안정적인 연동을 통해 의료 데이터 활용성을 높이고, 최신 GA4 분석 및 ISMS-P 기준의 보안 체계를 구축하여 데이터 거버넌스를 강화했습니다.',
    highlights: ['실시간 EMR 연동 API 구축', 'GA4 기반 사용자 행태 분석', 'ISMS-P 인증 대응 보안 아키텍처'],
    img: 'https://www.snuh.org/asset/img/about/img_overview01.jpg'
  },
  {
    name: '고려대학교의료원',
    title: '글로벌 브랜드 아이덴티티 강화를 위한 통합 포털',
    details: '세계적 수준의 의료 서비스를 제공하는 고려대학교의료원의 위상에 걸맞는 디지털 경험을 설계했습니다. 다국어 포털, 기부금 통합 관리, 브랜드 가이드라인을 적용한 UI/UX를 통해 글로벌 환자 및 기부자와의 소통을 강화했습니다.',
    highlights: ['4개 국어 지원 다국어 포털', '온라인 기부금 통합 관리', '반응형 브랜드 UI/UX 디자인'],
    img: 'https://www.kumc.or.kr/img/allmenu_section01.jpg'
  },
  {
    name: '경희의료원',
    title: '환자 중심의 의료 서비스 및 정보보호 체계 구축',
    details: '환자 편의성을 최우선으로 고려하여 EMR과 연동된 지능형 예약 시스템을 도입하고, ISMS-P 인증 기준에 부합하는 강력한 보안 체계를 마련하여 민감한 의료정보를 안전하게 보호합니다.',
    highlights: ['EMR 연동 지능형 예약 시스템', 'ISMS-P 인증 컨설팅 및 구축', '환자 맞춤형 정보 제공'],
    img: 'https://www.whosaeng.com/imgdata/whosaeng_com/202306/2023060915066217.jpg'
  },
  {
    name: '이화여자대학교의료원',
    title: '산하 병원 네트워크 시너지를 위한 통합 플랫폼',
    details: '이대서울병원, 목동병원 등 산하 병원의 의료정보 및 서비스를 하나의 플랫폼으로 통합하여 환자들에게 일관되고 편리한 의료 경험을 제공하고, 병원 간의 시너지를 극대화했습니다.',
    highlights: ['산하 4개 병원 정보 통합', '여성암·모아센터 특화 콘텐츠', '통합 검색 및 예약 기능'],
    img: 'https://seoul.eumc.ac.kr/upload/editor/images/000020/%EC%9D%B4%EB%8C%80%EC%84%9C%EC%9A%B8%EB%B3%91%EC%9B%90_%EC%A0%84%EA%B2%BD.jpg'
  },
  {
    name: '가톨릭중앙의료원',
    title: '국내 최대 의료 네트워크의 통합 유지보수 및 고도화',
    details: '전국 38개 병원을 아우르는 방대한 의료 네트워크의 웹 시스템을 안정적으로 통합 유지보수하며, 온라인 문진 시스템과 같은 신규 서비스를 도입하여 디지털 의료 서비스를 지속적으로 확장하고 있습니다.',
    highlights: ['38개 기관 통합 유지보수', '온라인 비대면 문진 시스템', '대규모 트래픽 분산 처리'],
    img: 'https://www.boannews.com/media/upFiles/cmc(0).jpg'
  },
  {
    name: '창원파티마병원',
    title: '지역 거점 병원의 브랜드 가치 제고 프로젝트',
    details: '병원의 새로운 CI와 마스코트를 적극 활용한 반응형 웹 디자인으로 브랜드 이미지를 강화하고, 최신 DB 아키텍처를 적용하여 시스템 안정성과 속도를 크게 향상시켰습니다.',
    highlights: ['병원 CI/BI 리뉴얼 반영', '완전 반응형 웹 디자인', 'DB 이중화 및 성능 최적화'],
    img: 'https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/ck/2019/03/24/art_1553439578.jpg'
  },
];

const pieData = [
  { name: '상급종합병원', value: 45 },
  { name: '종합병원', value: 35 },
  { name: '특수병원', value: 20 },
];
const COLORS = ['#0074D9', '#005aab', '#3D9970'];

const barData = [
    { name: '가톨릭중앙의료원', 기간: 12 },
    { name: '경희대학교의료원', 기간: 8 },
    { name: '고려대학교의료원', 기간: 5 },
    { name: '이화여자대학교의료원', 기간: 4 },
    { name: '서울대학교병원', 기간: 2 },
];

const maintenanceHighlights = [
    {
        icon: <BookOpenIcon className="w-8 h-8 text-medical-blue mb-2" />,
        title: "깊은 산업 이해도",
        description: "병원의 복잡한 IT 환경과 프로세스에 대한 독보적 전문성"
    },
    {
        icon: <ShieldCheckIcon className="w-8 h-8 text-medical-blue mb-2" />,
        title: "검증된 운영 능력",
        description: "국내 최고 의료기관들이 신뢰하는 안정적인 시스템 운영"
    },
    {
        icon: <UserGroupIcon className="w-8 h-8 text-medical-blue mb-2" />,
        title: "장기적 파트너십",
        description: "변함없는 신뢰를 바탕으로 고객의 핵심 의료 서비스 지원"
    }
];

const renderLegendText = (value: string) => {
    return <span className="text-slate-300">{value}</span>;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800/80 backdrop-blur-sm p-3 border border-white/20 rounded-lg text-sm">
        <p className="label text-white font-bold">{`${label}`}</p>
        <p className="intro text-medical-blue">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};


const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="relative py-20 text-white bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">의료정보화 주요 실적</h2>
          <p className="text-lg text-slate-300 mt-2">데이터가 증명하는 오상테크놀로지의 전문성</p>
          <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-center mb-4 text-white">병원 유형별 점유율</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie 
                  data={pieData} 
                  cx="50%" 
                  cy="50%" 
                  labelLine={false} 
                  outerRadius={120} 
                  fill="#E8E8E8" 
                  dataKey="value" 
                  label={({ name, value }) => `${name} ${value}개소`}
                >
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center p-3 bg-slate-900/50 rounded-lg">
                  <RocketLaunchIcon className="w-10 h-10 text-medical-blue mr-4 flex-shrink-0" />
                  <div>
                      <h4 className="font-bold text-white">독보적 기술력</h4>
                      <p className="text-sm text-slate-300">상급종합병원 시장 점유율로 증명된 기술 전문성</p>
                  </div>
              </div>
              <div className="flex items-center p-3 bg-slate-900/50 rounded-lg">
                  <ShieldCheckIcon className="w-10 h-10 text-medical-blue mr-4 flex-shrink-0" />
                  <div>
                      <h4 className="font-bold text-white">검증된 안정성</h4>
                      <p className="text-sm text-slate-300">주요 대학병원과의 장기 계약이 보증하는 압도적 신뢰</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-center mb-4 text-white">상급종합병원별 유지보수 기간 (년)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                <XAxis dataKey="name" angle={-25} textAnchor="end" height={70} interval={0} fontSize={10} tick={{ fill: '#a0aec0' }}/>
                <YAxis tick={{ fill: '#a0aec0' }} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.1)'}} />
                <Legend formatter={renderLegendText} />
                <Bar dataKey="기간" fill="#0074D9" />
              </BarChart>
            </ResponsiveContainer>
             <div className="mt-4 pt-4 border-t border-white/10">
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {maintenanceHighlights.map((item, index) => (
                        <div key={index} className="p-3 bg-slate-900/50 rounded-lg flex flex-col items-center justify-start">
                            <div className="flex-shrink-0">{item.icon}</div>
                            <h4 className="font-bold text-sm text-white">{item.title}</h4>
                            <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                        </div>
                    ))}
                 </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12">주요 병원별 구축 사례</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hospitalCases.map((item, index) => (
              <div key={index} className="bg-slate-800/40 backdrop-blur-lg rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-white/10 hover:border-medical-blue/50">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover"/>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-medical-blue mb-2">{item.name}</h4>
                  <p className="text-white font-semibold text-base mb-4">{item.title}</p>
                  <p className="text-slate-300 text-sm mb-6 flex-grow">{item.details}</p>
                  
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <h5 className="font-bold text-sm mb-3 text-white">핵심 성과</h5>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircleIcon className="w-5 h-5 text-medical-blue mr-2 flex-shrink-0" />
                          <span className="text-slate-300 font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default ReferencesSection;