import React from 'react';

const CardGlass = ({ children, className = '' }) => (
  <div className={`bg-zarno-surface-dark border border-zarno-border-glass-dark backdrop-blur-zarno rounded-zarno-lg shadow-zarno-card p-6 ${className}`}>
    {children}
  </div>
);

export default CardGlass;