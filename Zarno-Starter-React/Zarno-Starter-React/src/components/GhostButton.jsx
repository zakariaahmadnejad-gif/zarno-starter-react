import React from 'react';

const GhostButton = ({ children, onClick, className = '' }) => (
  <button
    className={`border border-zarno-gold-main text-zarno-gold-main py-2 px-4 rounded-zarno-md hover:bg-zarno-gold-main hover:bg-opacity-10 transition ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default GhostButton;