import React, { useState, useEffect } from 'react';
import NewsModal from './NewsModal';

export type NewsItem = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  link: string;
  fullContent: {
    introduction: string;
    sections: { title: string; content: string }[];
    conclusion: string;
  };
};

const newsItems: NewsItem[] = [
  {
    category: 'AI & 빅데이터',
    date: '2024년 5월 20일',
    title: "<strong>AI 기반 진단 보조 시스템</strong>, 상급종합병원 도입 가속화",
    excerpt: '딥러닝 기술이 의료 영상 분석의 정확도를 획기적으로 개선하며, 주요 병원들이 관련 솔루션 도입을 서두르고 있습니다. 데이터 처리 능력과 보안이 핵심 경쟁력으로 부상하고 있습니다.',
    img: 'https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg',
    link: '#',
    fullContent: {
      introduction: '인공지능(AI)이 의료 패러다임을 바꾸고 있습니다. 특히, 딥러닝 기반의 의료 영상 분석 기술은 조기 진단의 정확도를 높이고 의료진의 업무 부담을 줄이는 혁신적인 해결책으로 주목받으며, 국내 유수의 상급종합병원을 중심으로 도입이 본격화되고 있습니다.',
      sections: [
        {
          title: '정확도와 효율성, 두 마리 토끼를 잡다',
          content: 'CT, MRI, X-ray 등 방대한 의료 영상 데이터를 학습한 AI는 인간이 놓치기 쉬운 미세한 병변까지 식별해냅니다. 이는 진단 정확도를 높일 뿐만 아니라, 판독 시간을 단축시켜 의료 서비스의 전반적인 효율성을 개선합니다. <strong class="text-medical-blue">오상테크놀로지의 AI 엔진</strong>은 수백만 건의 데이터 학습을 통해 특정 질환에 대한 판독 정확도를 95% 이상으로 끌어올렸습니다.',
        },
        {
          title: '데이터 보안 및 윤리적 과제',
          content: '민감한 의료 데이터를 다루는 만큼, AI 도입에는 강력한 보안이 전제되어야 합니다. 데이터 익명화, 비식별화 기술은 물론, 개인정보보호 규정(GDPR, HIPAA 등)을 준수하는 것이 중요합니다. 저희 솔루션은 병원 내부 서버에서만 데이터가 처리되는 <strong class="text-medical-blue">연합 학습(Federated Learning)</strong> 방식을 옵션으로 제공하여, 데이터 유출 위험을 원천적으로 차단합니다.',
        },
      ],
      conclusion: 'AI 진단 보조 시스템은 더 이상 미래의 기술이 아닌, 현재 의료 현장의 필수 요소로 자리 잡고 있습니다. 기술 도입을 넘어, 어떻게 데이터를 안전하게 활용하고 의료 서비스의 질을 실질적으로 높일 것인지에 대한 깊은 고민이 필요한 시점입니다.',
    },
  },
  {
    category: '보안 & 규제',
    date: '2024년 5월 15일',
    title: "개인정보보호법 강화, <strong>병원 정보보호 체계(ISMS-P)</strong> 구축의 중요성",
    excerpt: '강화된 개인정보보호법에 따라 의료기관의 정보보호 책임이 더욱 무거워졌습니다. ISMS-P 인증은 이제 선택이 아닌 필수로, 체계적인 컨설팅과 솔루션 구축이 시급합니다.',
    img: 'https://cdn.prod.website-files.com/66cedbc5b5e7dfa2e2da7591/68709c1375ee756d63a36e02_MkU8MhQxcPTOdG1S1hUsEQyh4m-Iwr66RPwxcu9dvtQ.jpeg',
    link: '#',
    fullContent: {
      introduction: '디지털 전환이 가속화되면서 의료 데이터는 가장 가치 있는 자산인 동시에 가장 민감한 정보가 되었습니다. 최근 강화된 개인정보보호법은 의료기관에 더욱 엄격한 정보보호 책임을 요구하며, 정보보호 및 개인정보보호 관리체계(ISMS-P) 인증의 중요성이 그 어느 때보다 부각되고 있습니다.',
      sections: [
        {
          title: 'ISMS-P 인증, 왜 필수인가?',
          content: 'ISMS-P 인증은 단순히 규제를 준수하는 것을 넘어, 환자의 신뢰를 확보하고 병원의 명성을 지키는 핵심 요소입니다. 정보 유출 사고 발생 시 <strong class="text-medical-blue">수십억 원에 달하는 과징금</strong>은 물론, <strong class="text-medical-blue">병원 신뢰도에 치명적인 타격</strong>을 입을 수 있습니다. ISMS-P는 102개의 인증 기준을 통해 관리적, 기술적, 물리적 보호조치를 종합적으로 점검하여 병원의 정보보호 수준을 체계적으로 향상시킵니다.',
        },
        {
          title: '단순 솔루션 도입을 넘어선 통합적 접근',
          content: '성공적인 ISMS-P 구축은 방화벽이나 백신 같은 개별 보안 솔루션 도입만으로는 불가능합니다. 정보자산 식별, 위험 평가, 정책 수립, 임직원 교육 등 전사적인 노력이 필요합니다. 특히, 접근 권한을 최소한으로 부여하는 <strong class="text-medical-blue">제로 트러스트 아키텍처(Zero Trust Architecture)</strong> 개념을 도입하여 내부자에 의한 정보 유출까지 방지하는 것이 최신 동향입니다. <strong class="text-medical-blue">오상테크놀로지의 통합 보안 컨설팅</strong>은 인증 획득부터 사후 관리까지 전 과정을 지원합니다.',
        },
      ],
      conclusion: 'ISMS-P 인증은 비용이 아닌 투자입니다. 체계적인 정보보호 시스템을 구축하는 것은 환자에게 가장 안전한 의료 서비스를 제공하겠다는 병원의 약속이자, 미래 경쟁력을 확보하는 가장 확실한 방법입니다.',
    },
  },
  {
    category: '디지털 혁신',
    date: '2024년 5월 10일',
    title: "비대면 진료 시대, <strong>안정적 IT 인프라</strong>가 병원의 미래를 결정한다",
    excerpt: '정부의 비대면 진료 시범사업 확대에 따라 환자 데이터의 안정적인 전송과 보관, 예약 시스템의 유연한 확장이 가능한 클라우드 기반 인프라의 중요성이 커지고 있습니다.',
    img: 'https://www.cynergytech.com/wp-content/uploads/2023/08/IT-Infrastructure.jpg',
    link: '#',
    fullContent: {
      introduction: '비대면 진료의 제도화는 의료 서비스의 접근성을 획기적으로 높이는 동시에, 병원 IT 인프라에 새로운 과제를 제시하고 있습니다. 환자와의 원활한 소통, 진료 데이터의 안정적인 관리, 그리고 폭증하는 트래픽을 감당할 수 있는 유연한 시스템은 이제 병원의 핵심 경쟁력입니다.',
      sections: [
        {
          title: '클라우드 네이티브(Cloud-Native)로의 전환',
          content: '기존의 병원 내부에 서버를 두는 온프레미스(On-premise) 방식은 갑작스러운 트래픽 증가에 대응하기 어렵고 유지보수 비용이 높습니다. 반면, 클라우드 기반 인프라는 필요에 따라 자원을 즉시 확장하거나 축소할 수 있어 <strong class="text-medical-blue">비용 효율적이고 안정적인 서비스 운영</strong>이 가능합니다. 재해복구(DR) 시스템 구축 또한 용이하여 어떠한 상황에서도 진료 기록을 안전하게 보존할 수 있습니다.',
        },
        {
          title: '상호운용성: 데이터 사일로(Silo) 해소',
          content: '비대면 진료가 활성화되려면 병원정보시스템(HIS), 전자의무기록(EMR), 그리고 환자가 사용하는 앱 간의 데이터가 원활하게 오가야 합니다. 이를 위해 국제 표준 의료 데이터 교류 기술인 <strong class="text-medical-blue">HL7 FHIR(Fast Healthcare Interoperability Resources)</strong>의 중요성이 커지고 있습니다. <strong class="text-medical-blue">오상테크놀로지의 EMR/EHR 게이트웨이</strong>는 FHIR 표준을 준수하여, 다양한 시스템 간의 데이터 장벽을 허물고 진정한 의미의 디지털 헬스케어 생태계를 구현합니다.',
        },
      ],
      conclusion: '안정적이고 확장 가능한 IT 인프라 없이는 성공적인 비대면 진료 서비스를 제공할 수 없습니다. 클라우드와 데이터 표준 기술에 대한 과감한 투자가 병원의 미래 10년을 결정할 것입니다.',
    },
  }
];

const NewsCard: React.FC<{ item: NewsItem; onReadMore: () => void; }> = ({ item, onReadMore }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col group border hover:shadow-xl">
    <div className="relative h-48 overflow-hidden">
      <img src={item.img} alt={item.title.replace(/<[^>]*>?/gm, '')} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-medical-blue/10 text-medical-blue text-xs font-semibold px-3 py-1 rounded-full">{item.category}</span>
        <span className="text-xs text-medium-gray">{item.date}</span>
      </div>
      <h3 className="text-lg font-bold text-dark-gray mb-3 flex-grow" dangerouslySetInnerHTML={{ __html: item.title }} />
      <p className="text-sm text-medium-gray mb-4">{item.excerpt}</p>
      <button onClick={onReadMore} className="text-sm font-bold text-medical-blue mt-auto group-hover:underline text-left w-full">
        자세히 보기 &rarr;
      </button>
    </div>
  </div>
);


const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedNews(null);
      }
    };

    if (selectedNews) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedNews]);

  return (
    <>
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">의료정보화 최신 동향</h2>
            <p className="text-lg text-medium-gray mt-2">오상테크놀로지가 주목하는 의료 IT의 미래</p>
            <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                  <NewsCard key={index} item={item} onReadMore={() => setSelectedNews(item)} />
              ))}
          </div>
        </div>
      </section>
      {selectedNews && (
        <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </>
  );
};

export default NewsSection;