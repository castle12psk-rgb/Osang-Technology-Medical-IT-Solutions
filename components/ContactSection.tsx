import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqItems = [
    {
        question: '상급종합병원급 포털 구축에 사용하는 핵심 기술 스택은 무엇인가요?',
        answer: '저희는 안정성과 확장성을 최우선으로 고려하여, <strong class="font-bold text-medical-blue">MSA(마이크로서비스 아키텍처) 기반의 Headless CMS</strong>를 중심으로 시스템을 설계합니다. 프론트엔드는 React, Vue 등 최신 프레임워크를 활용해 사용자 경험을 극대화하며, 백엔드는 Spring Boot, Node.js 등을 통해 견고하게 구축합니다. 모든 인프라는 <strong class="font-bold text-medical-blue">AWS, Azure 등 주요 클라우드 환경</strong>에 최적화하여 99.95% 이상의 가용성을 보장합니다.'
    },
    {
        question: '포털 구축 후 유지보수 서비스는 구체적으로 어떤 내용을 포함하나요?',
        answer: '유지보수는 단순 장애 처리를 넘어, <strong class="font-bold text-medical-blue">‘안정적 운영’과 ‘지속적 개선’</strong>을 목표로 합니다. 서비스에는 ▲실시간 장애 모니터링 및 대응 ▲정기적인 보안 패치 및 취약점 점검 ▲웹 표준 및 브라우저 호환성 업데이트 ▲콘텐츠 변경 및 기능 개선 기술 지원 ▲월간 운영 결과 보고서 발행 등이 포함됩니다. 모든 요청은 PMS를 통해 투명하게 관리됩니다.'
    },
    {
        question: '기존 병원의 EMR/OCS와 포털의 실시간 연동 경험은 풍부한가요?',
        answer: '네, 저희의 핵심 경쟁력 중 하나입니다. 국내 주요 EMR 솔루션과의 연동 경험이 풍부하며, 국제 표준인 <strong class="font-bold text-medical-blue">HL7 FHIR 기반의 API 게이트웨이</strong>를 자체적으로 구축하여 안정적인 데이터 교환을 보장합니다. 이를 통해 온라인 예약, 진료 이력 조회, 검사 결과 확인, 수납 등 환자 중심의 서비스를 끊김 없이 제공합니다.'
    },
    {
        question: '포털의 UI/UX 디자인 시 가장 중요하게 생각하는 원칙은 무엇인가요?',
        answer: '저희는 <strong class="font-bold text-medical-blue">‘포용적 디자인(Inclusive Design)’ 원칙</strong>을 최우선으로 합니다. 고령층, 장애인 등 디지털 취약계층도 불편함 없이 정보를 이용할 수 있도록 웹 접근성 지침을 100% 준수합니다. 또한, 환자의 동선을 데이터 기반으로 분석하여 가장 직관적인 메뉴 구조와 예약 프로세스를 설계하며, 병원의 브랜드 아이덴티티를 효과적으로 표현하는 데 집중합니다.'
    },
    {
        question: '의료정보 포털의 보안 강화를 위해 어떤 종합적인 조치를 취하고 있나요?',
        answer: '저희는 <strong class="font-bold text-medical-blue">다층적 방어(Defense in Depth) 전략</strong>을 적용합니다. ▲소스코드 레벨의 시큐어 코딩(OWASP Top 10 준수) ▲WAF(웹방화벽) 및 DDoS 방어 서비스 적용 ▲SSL/TLS 암호화 통신 기본 적용 ▲주기적인 모의 해킹 및 취약점 분석 ▲서버 접근 IP 및 권한 최소화 등 애플리케이션부터 인프라까지 전 계층에 걸쳐 보안을 체계적으로 관리합니다.'
    },
    {
        question: '개인정보보호법 및 ISMS-P 인증 기준을 어떻게 만족시키나요?',
        answer: '모든 시스템은 기획 단계부터 <strong class="font-bold text-medical-blue">‘Privacy by Design(설계 기반 개인정보보호)’ 원칙</strong>에 따라 개발됩니다. 개인정보 수집·이용·파기 전 과정의 흐름을 명확히 정의하고, 접근 기록을 포함한 모든 로그를 위·변조가 불가능하도록 관리합니다. 또한, ISMS-P 인증 심사에 필요한 <strong class="font-bold text-medical-blue">기술적 증적 자료와 관리체계 문서를 완벽하게 지원</strong>하여 인증 획득을 돕습니다.'
    },
    {
        question: '웹 서버 및 데이터베이스에 대한 접근 통제는 어떻게 관리되나요?',
        answer: '저희는 <strong class="font-bold text-medical-blue">‘제로 트러스트(Zero Trust)’ 보안 모델</strong>을 지향하며, 모든 접근에 대해 엄격한 통제를 시행합니다. ▲운영 서버 접근은 지정된 IP에서만 가능한 VPN을 통해 이루어지며 ▲모든 관리자 계정은 MFA(다중 인증)를 의무화합니다. ▲데이터베이스 직접 접근은 원칙적으로 차단하며, 역할기반 접근제어(RBAC)를 통해 인가된 담당자만이 정해진 권한 내에서 데이터를 처리할 수 있습니다.'
    },
    {
        question: '랜섬웨어 등 외부 공격에 대한 방어 및 데이터 복구 계획이 있나요?',
        answer: '네, 저희는 랜섬웨어 방어를 위해 <strong class="font-bold text-medical-blue">실시간 악성코드 탐지 및 차단 솔루션</strong>을 운영합니다. 만일의 사태에 대비해, 모든 데이터는 국내 원격지에 위치한 별도의 스토리지에 <strong class="font-bold text-medical-blue">매일 자동으로 암호화 백업</strong>됩니다. 재해복구(DR) 계획에 따라 RPO(복구 목표 시점) 4시간, RTO(복구 목표 시간) 24시간 이내에 서비스를 정상화할 수 있는 체계를 갖추고 있습니다.'
    },
    {
        question: '클라우드 환경에서 병원 데이터를 운영할 때의 보안 장점은 무엇인가요?',
        answer: '클라우드 활용은 자체 서버 구축(On-premise) 대비 월등한 보안 이점을 제공합니다. <strong class="font-bold text-medical-blue">AWS, Azure와 같은 글로벌 CSP(클라우드 서비스 제공사)</strong>는 연중무휴 24시간 물리적 보안 관제와 최신 보안 서비스를 제공합니다. 저희는 여기에 더해 클라우드 설정 오류를 방지하는 <strong class="font-bold text-medical-blue">CSPM(클라우드 보안 형상 관리) 솔루션</strong>을 적용하여, 인적 실수로 인한 보안 사고까지 예방합니다.'
    },
    {
        question: '타 IT 업체와 차별화되는 오상테크놀로지만의 유지보수 경쟁력은 무엇인가요?',
        answer: '<strong class="font-bold text-medical-blue">18년간 축적된 ‘의료 도메인 지식’과 ‘장애 예측 시스템’</strong>입니다. 저희는 단순 요청 처리를 넘어, 병원의 연간 행사, 학회 시즌 등 트래픽 급증 시기를 예측하여 선제적으로 서버 자원을 증설합니다. 또한, 과거 장애 데이터를 AI로 분석하여 <strong class="font-bold text-medical-blue">잠재적 위험 요소를 사전에 발견하고 조치</strong>함으로써, 장애 발생 자체를 최소화하는 예방 중심의 유지보수를 지향합니다.'
    }
];

const FaqItem: React.FC<{ item: typeof faqItems[0]; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => (
  <div className="border border-gray-200/80 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/50">
      <h4 className="text-lg font-medium text-dark-gray">{item.question}</h4>
      <ChevronDownIcon className={`w-6 h-6 text-medical-blue transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
      <div className="p-5 pt-0">
        <div className="border-t pt-4">
            <p className="text-medium-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      </div>
    </div>
  </div>
);


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    hospital: '',
    department: '',
    email: '',
    type: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleFaqClick = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 감사합니다.');
    // Here you would typically send the form data to a server
    setFormData({ name: '', hospital: '', department: '', email: '', type: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-dark-gray">자주 묻는 질문 (FAQ)</h3>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <FaqItem 
                        key={index}
                        item={item}
                        isOpen={openFaq === index}
                        onClick={() => handleFaqClick(index)}
                    />
                ))}
            </div>
        </div>
      
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">문의 및 제휴</h2>
            <p className="text-lg text-medium-gray mt-2">디지털 혁신의 첫걸음, 오상테크놀로지와 함께하세요.</p>
            <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">상담 신청</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="이름" value={formData.name} onChange={handleChange} className="w-full p-3 border border-silver-gray rounded-md" required />
                  <input type="text" name="hospital" placeholder="병원명" value={formData.hospital} onChange={handleChange} className="w-full p-3 border border-silver-gray rounded-md" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <input type="text" name="department" placeholder="담당부서" value={formData.department} onChange={handleChange} className="w-full p-3 border border-silver-gray rounded-md" />
                   <input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} className="w-full p-3 border border-silver-gray rounded-md" required />
                </div>
                <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 border border-silver-gray rounded-md bg-white" required>
                  <option value="">문의 유형 선택</option>
                  <option value="maintenance">유지보수</option>
                  <option value="cms">CMS 솔루션</option>
                  <option value="crm">AI CRM 솔루션</option>
                  <option value="partnership">파트너십</option>
                  <option value="other">기타</option>
                </select>
                <textarea name="message" placeholder="문의 내용" value={formData.message} onChange={handleChange} rows={5} className="w-full p-3 border border-silver-gray rounded-md" required></textarea>
                <button type="submit" className="w-full bg-medical-blue text-white p-3 rounded-md font-bold hover:bg-opacity-90 transition">
                  상담 신청하기
                </button>
              </form>
            </div>
            <div>
              <div className="mb-8">
                <img src="https://picsum.photos/seed/map/600/300" alt="Map" className="rounded-lg shadow-md w-full h-64 object-cover" />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                  <p className="text-medium-gray mb-2"><strong>주소:</strong> 서울 금천구 가산디지털2로 143</p>
                  <p className="text-medium-gray mb-2"><strong>대표전화:</strong> 070-7772-7766</p>
                  <p className="text-medium-gray"><strong>이메일:</strong> osang@osangtech.co.kr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;