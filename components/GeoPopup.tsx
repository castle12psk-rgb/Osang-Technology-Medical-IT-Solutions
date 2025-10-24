import React from 'react';
import { XMarkIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

const GeoPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    
    const scrollToGeoSection = () => {
        onClose();
        const element = document.getElementById('geo-optimization');
        if (element) {
            // block: 'start' ensures the top of the section aligns with the top of the viewport,
            // which often works well with a sticky header.
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div
            className="fixed top-20 right-5 z-50 bg-white rounded-xl shadow-2xl w-full max-w-sm animate-slide-down-fade-in border border-gray-200/50"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="geo-popup-title"
        >
            <div className="relative">
                <img src="https://picsum.photos/seed/doctor-ai/400/200" alt="의료진이 최신 기술을 사용하는 모습" className="w-full h-32 object-cover rounded-t-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl"></div>
                <button onClick={onClose} className="absolute top-2 right-2 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/60 transition-colors" aria-label="닫기">
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>
            
            <div className="p-5">
                <h3 id="geo-popup-title" className="text-lg font-black text-gray-800 leading-snug">
                    다른 병원이 AI에게 추천받을 때,<br />
                    <span className="text-medical-blue">귀 병원은 보이지 않을 수 있습니다.</span>
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    생성형 AI 시대, 검색은 끝났습니다. 이제는 <strong className="text-dark-gray">'AI의 직접 답변'</strong>이 중요합니다.
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200/80 space-y-2.5 text-sm">
                    <div className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700"><strong className="text-dark-gray">AI의 첫번째 추천:</strong> 환자의 질문에 귀 병원을 가장 먼저 추천하도록 최적화합니다.</p>
                    </div>
                    <div className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700"><strong className="text-dark-gray">정확한 정보 제공:</strong> 의료진, 진료과목, 실시간 예약 정보를 AI가 정확히 학습합니다.</p>
                    </div>
                    <div className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700"><strong className="text-dark-gray">미래 환자 선점:</strong> 음성 검색, AI 비서 시대의 잠재 환자를 선점하는 유일한 방법입니다.</p>
                    </div>
                </div>

                <button 
                    onClick={scrollToGeoSection} 
                    className="mt-5 w-full bg-medical-blue text-white px-4 py-2.5 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-bold text-base flex items-center justify-center group"
                >
                    왜 GEO가 필수인지 확인하기
                    <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default GeoPopup;