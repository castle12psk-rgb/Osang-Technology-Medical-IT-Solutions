
import React from 'react';

const awards = [
  { img: 'https://picsum.photos/seed/iso/200/150', name: 'ISO9001' },
  { img: 'https://picsum.photos/seed/inno/200/150', name: 'INNO-BIZ' },
  { img: 'https://picsum.photos/seed/venture/200/150', name: '벤처기업' },
  { img: 'https://picsum.photos/seed/design/200/150', name: '디자인전문회사' },
  { img: 'https://picsum.photos/seed/secure/200/150', name: 'SecureKorea 대상' },
  { img: 'https://picsum.photos/seed/patent/200/150', name: '주요 특허' },
];

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">인증 및 수상</h2>
          <p className="text-lg text-medium-gray mt-2">공인된 기관이 인정한 기술력과 품질</p>
          <div className="w-20 h-1 bg-medical-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {awards.map((award, index) => (
            <div key={index} className="group">
              <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-xl transition-shadow transform group-hover:-translate-y-1">
                <img src={award.img} alt={award.name} className="mx-auto rounded-md mb-4"/>
                <h3 className="font-semibold text-medium-gray group-hover:text-medical-blue">{award.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">주요 저작권 및 특허</h3>
            <p className="text-center text-medium-gray max-w-3xl mx-auto">
                오상테크놀로지는 지속적인 R&D 투자를 통해 의료정보화 기술을 선도합니다.
                의료기관 전용 CMS부터 AI 이미지 분석, 블록체인 기반 HMS에 이르기까지,
                혁신적인 기술로 미래 의료 환경을 준비합니다.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="bg-medical-blue text-white px-4 py-2 rounded-full text-sm font-medium">OSE-Medical CMS</span>
                <span className="bg-medical-blue text-white px-4 py-2 rounded-full text-sm font-medium">OSE-O2O</span>
                <span className="bg-medical-blue text-white px-4 py-2 rounded-full text-sm font-medium">AI Image Analysis</span>
                <span className="bg-medical-blue text-white px-4 py-2 rounded-full text-sm font-medium">Blockchain HMS</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
