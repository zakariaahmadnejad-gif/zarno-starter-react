import React from 'react';

const Badge = ({ type = 'success', children, className = '' }) => {
  const styles = {
    success: 'bg-zarno-success/20 text-zarno-success',
    danger: 'bg-zarno-danger/20 text-zarno-danger',
  };
  return (
    <span className={`text-xs font-bold px-2 py-1 rounded-zarno-sm ${styles[type]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;