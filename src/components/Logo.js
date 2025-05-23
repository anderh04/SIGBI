import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.25278V19.2528M12 6.25278C10.8325 5.47686 9.24649 5 7.5 5C5.75351 5 4.16754 5.47686 3 6.25278V19.2528C4.16754 18.4769 5.75351 18 7.5 18C9.24649 18 10.8325 18.4769 12 19.2528M12 6.25278C13.1675 5.47686 14.7535 5 16.5 5C18.2465 5 19.8325 5.47686 21 6.25278V19.2528C19.8325 18.4769 18.2465 18 16.5 18C14.7535 18 13.1675 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-900">Bibliotech</span>
    </div>
  );
};

export default Logo;