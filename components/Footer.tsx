
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">오상테크놀로지</h3>
            <p className="text-sm text-silver-gray mt-1">의료정보화의 미래를 선도하는 기업</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-silver-gray">&copy; {new Date().getFullYear()} Osang Technology Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
