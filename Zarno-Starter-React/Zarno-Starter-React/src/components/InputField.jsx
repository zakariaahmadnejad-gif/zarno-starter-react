import React from 'react';

const InputField = ({ label, type = 'text', className = '', ...props }) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 text-sm text-zarno-text-secondary-dark">{label}</label>}
    <input
      type={type}
      className={`bg-zarno-surface-dark text-zarno-text-primary-dark border border-zarno-border-glass-dark py-2 px-3 rounded-zarno-md focus:outline-none focus:border-zarno-gold-main ${className}`}
      {...props}
    />
  </div>
);

export default InputField;