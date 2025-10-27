import React from 'react';

const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button
    className={`bg-zarno-accent-purple text-white py-2 px-4 rounded-zarno-md hover:shadow-md hover:shadow-zarno-gold-main transition ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default PrimaryButton;