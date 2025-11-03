import React from 'react';
import { XMarkIcon, ArrowRightIcon } from './Icons';

const GeoPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    
    const scrollToGeoSection = () => {
        onClose();
        const element = document.getElementById('geo-optimization');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div
            className="fixed inset-x-4 bottom-4 z-50 bg-white rounded-xl shadow-2xl w-full max-w-sm mx-auto animate-slide-down-fade-in border border-gray-200/50 md:inset-auto md:top-28 md:right-5 md:mx-0"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="geo-popup-title"
        >
            <header className="relative h-36 rounded-t-xl overflow-hidden">
                <img
                    src="https://www.ourviewdesign.pt/wp-content/uploads/2025/02/O-Futuro-do-SEO-A-Revolucao-do-GEO-Generative-Engine-Optimization.jpg.webp"
                    alt="AI와 검색엔진이 GEO 최적화를 상징하는 이미지"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <button onClick={onClose} className="absolute top-3 right-3 text-white bg-black/40 rounded-full p-1.5 hover:bg-black/60 transition-colors z-20" aria-label="닫기">
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </header>
            
            <div className="p-6 text-center">
                <h3 id="geo-popup-title" className="text-2xl font-black text-dark-gray leading-tight" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    AI의 답변에 우리 병원이 없다면,
                </h3>
                <p className="text-xl font-bold text-medical-blue mt-1">
                    존재하지 않는 병원과 같습니다.
                </p>

                <div className="mt-6 text-left bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-4">
                    {/* Before */}
                    <div>
                        <p className="text-sm font-bold text-medium-gray mb-1">최적화 이전</p>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-base text-gray-500">
                                <span className="font-semibold text-gray-600">AI:</span> "A병원, B의원 등이 있습니다..."
                            </p>
                        </div>
                    </div>

                    {/* After */}
                    <div>
                        <p className="text-sm font-bold text-medical-blue mb-1">GEO 최적화 이후</p>
                        <div className="bg-white p-3 rounded-lg shadow-sm border-2 border-medical-blue">
                             <p className="text-base text-dark-gray">
                                <span className="font-semibold text-medical-blue">AI:</span> "<strong className="font-bold">[희망병원]</strong>이 가장 적합합니다."
                            </p>
                        </div>
                    </div>
                </div>
                
                <p className="mt-6 text-base text-center text-medium-gray leading-relaxed">
                    검색의 시대는 끝났습니다. <br/>
                    이제 <strong className="text-dark-gray">AI가 환자를 '선택'</strong>하는 시대입니다.
                </p>

                <button 
                    onClick={scrollToGeoSection} 
                    className="mt-6 w-full bg-medical-blue text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-bold text-base flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    AI의 첫번째 답변 선점하기
                    <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default GeoPopup;