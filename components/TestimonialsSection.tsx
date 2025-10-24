import React from 'react';
import { UserGroupIcon, GlobeAltIcon, ClockSolidIcon, QuoteIcon } from './Icons';

const testimonials = [
  {
    quote: "오상테크놀로지는 병원 운영의 복잡한 요구를 이해하고, <strong class='text-white'>시스템 안정성을 완벽히 보장</strong>했습니다. 단순한 공급업체가 아닌, <strong class='text-white'>진정한 기술 파트너</strong>입니다.",
    author: "고려대학교의료원 정보팀장",
    hospital: "고려대학교의료원"
  },
  {
    quote: "ISMS-P 인증 과정에서 보여준 <strong class='text-white'>보안 전문성</strong>과 기존 EMR 시스템과의 <strong class='text-white'>원활한 데이터 연동 능력</strong>은 매우 인상적이었습니다. 신뢰할 수밖에 없는 선택입니다.",
    author: "서울대학교병원 정보화실장",
    hospital: "서울대학교병원"
  },
  {
    quote: "새로 도입한 <strong class='text-white'>AI CRM 솔루션</strong> 덕분에 환자 맞춤형 서비스가 가능해졌고, <strong class='text-white'>운영 효율성이 크게 향상</strong>되었습니다. 데이터가 어떻게 의료 서비스의 질을 높이는지 증명했습니다.",
    author: "경희의료원 디지털혁신본부장",
    hospital: "경희의료원"
  },
  {
    quote: "의료 전문 용어가 많은 웹사이트를 비전문가도 쉽게 관리할 수 있도록 <strong class='text-white'>직관적인 CMS를 구축</strong>해주었습니다. <strong class='text-white'>10년 넘게 이어진 유지보수</strong>는 기술 지원 이상의 파트너십을 보여줍니다.",
    author: "이화여자대학교의료원 홍보팀",
    hospital: "이화여자대학교의료원"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-medical-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">고객의 신뢰</h2>
            <p className="text-lg text-silver-gray">파트너가 경험한 오상테크놀로지의 가치</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-left flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-white/20">
              <QuoteIcon className="w-10 h-10 text-white/30 mb-4" />
              <blockquote className="text-lg italic text-silver-gray flex-grow" dangerouslySetInnerHTML={{ __html: `“${testimonial.quote}”` }} />
              <cite className="mt-6 pt-4 border-t border-white/20">
                <span className="block font-bold text-white not-italic">{testimonial.author}</span>
                <span className="block text-sm text-silver-gray not-italic">{testimonial.hospital}</span>
              </cite>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center pt-8 border-t border-white/20">
          <div className="text-center">
            <UserGroupIcon className="w-16 h-16 mx-auto mb-4 text-white"/>
            <p className="text-4xl font-bold">+30%</p>
            <p className="text-silver-gray">고객 만족도 향상</p>
          </div>
          <div className="text-center">
            <GlobeAltIcon className="w-16 h-16 mx-auto mb-4 text-white"/>
            <p className="text-4xl font-bold">99.9%</p>
            <p className="text-silver-gray">웹 시스템 가용성</p>
          </div>
          <div className="text-center">
            <ClockSolidIcon className="w-16 h-16 mx-auto mb-4 text-white"/>
            <p className="text-4xl font-bold">&lt; 2시간 이내</p>
            <p className="text-silver-gray">유지보수 SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;