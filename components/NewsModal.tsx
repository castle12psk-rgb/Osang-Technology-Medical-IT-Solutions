import React from 'react';
import type { NewsItem } from './NewsSection';
import { XMarkIcon } from './Icons';

type NewsModalProps = {
  item: NewsItem;
  onClose: () => void;
};

const NewsModal: React.FC<NewsModalProps> = ({ item, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-scale-up"
        onClick={e => e.stopPropagation()}
      >
        <header className="relative">
          <img src={item.img} alt="" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors" aria-label="닫기">
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <span className="bg-medical-blue text-xs font-semibold px-3 py-1 rounded-full">{item.category}</span>
            <h2 id="news-modal-title" className="text-2xl md:text-3xl font-bold mt-2" dangerouslySetInnerHTML={{ __html: item.title }} />
            <p className="text-sm text-silver-gray mt-1">{item.date}</p>
          </div>
        </header>

        <div className="p-6 md:p-8 overflow-y-auto">
          <p className="text-lg text-medium-gray mb-6 italic border-l-4 border-medical-blue pl-4">{item.fullContent.introduction}</p>
          {item.fullContent.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-dark-gray mb-2">{section.title}</h3>
              <p className="text-base text-medium-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
          <div className="mt-6 pt-6 border-t border-silver-gray">
             <h3 className="text-xl font-bold text-dark-gray mb-2">결론 및 전망</h3>
             <p className="text-base text-medium-gray leading-relaxed">{item.fullContent.conclusion}</p>
          </div>
        </div>

        <footer className="p-4 bg-gray-50 border-t mt-auto text-right">
          <button onClick={onClose} className="bg-medical-blue text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition font-semibold">
            닫기
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NewsModal;