import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
