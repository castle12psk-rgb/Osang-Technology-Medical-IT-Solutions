import React from 'react';
import { StarIcon, TrophyIcon, LockClosedIcon, ShieldCheckIcon, ColorPaletteIcon, BeakerIcon, CodeBracketIcon } from './Icons';

const certifications = [
  {
    issuer: '중소벤처기업부',
    name: 'INNO-BIZ (기술혁신형 중소기업)',
    year: '2021 획득',
    icon: <StarIcon />,
    isCore: true,
  },
  {
    issuer: '한국인터넷진흥원',
    name: '정보보호 관리체계 (ISMS)',
    year: '2024 획득',
    icon: <LockClosedIcon />,
    isCore: true,
  },
  {
    issuer: '한국디자인진흥원',
    name: 'A+ 디자인 전문기업',
    year: '2020 획득',
    icon: <ColorPaletteIcon />,
    isCore: false,
  },
  {
    issuer: '기술보증기금',
    name: '벤처기업',
    year: '2018 획득',
    icon: <TrophyIcon />,
    isCore: true,
  },
  {
    issuer: 'International Organization for Standardization',
    name: 'ISO 9001 (품질경영시스템)',
    year: '2019 획득',
    icon: <ShieldCheckIcon />,
    isCore: false,
  },
  {
    issuer: '한국산업기술진흥협회',
    name: '기업부설연구소 인정',
    year: '2022 획득',
    icon: <BeakerIcon />,
    isCore: false,
  },
];

const softwareList = [
    { name: 'OSE-O2O/B2B/B2C Platform v2.0', regNumber: 'C-2022-012345' },
    { name: 'OSE-AI Medical CMS', regNumber: 'C-2023-009876' },
    { name: 'OSE-RAG Knowledge Hub Engine', regNumber: 'C-2023-054321' },
    { name: 'OSE-GEO (Generative Engine Optimization)', regNumber: 'C-2024-011223' },
];

const CertificationCard: React.FC<typeof certifications[0]> = ({ issuer, name, year, icon, isCore }) => (
    <div className="relative bg-slate-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-medical-blue/50 hover:bg-slate-800/50 transform hover:-translate-y-1">
        {isCore && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">CORE</div>
        )}
        <div className="flex items-center gap-5">
            <div className="bg-slate-900/50 p-4 rounded-lg flex-shrink-0">
                {React.cloneElement(icon, { className: "w-10 h-10 text-white" })}
            </div>
            <div>
                <p className="text-sm text-slate-400">{issuer}</p>
                <h4 className="text-xl font-bold text-white mt-1">{name}</h4>
                <p className="text-base text-blue-400 font-medium mt-2">{year}</p>
            </div>
        </div>
    </div>
);

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="relative py-20 text-white bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Certifications & Achievements</h2>
          <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">신뢰할 수 있는 기술력, 공인된 인증과 지적재산권으로 증명합니다.</p>
          <div className="w-24 h-1 bg-medical-blue mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 border border-white/10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-900/50 p-3 rounded-lg flex-shrink-0">
                <CodeBracketIcon className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-2xl font-bold">주요 저작권 등록 S/W</h3>
            </div>
            <div className="space-y-4 flex-grow">
              {softwareList.map((sw, index) => (
                <div key={index} className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-medical-blue/70 transition-colors hover:bg-slate-900/70">
                  <p className="font-bold text-white">{sw.name}</p>
                  <p className="text-sm text-slate-400 mt-1">등록번호: {sw.regNumber}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-slate-400 text-sm">기술 신뢰도</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;