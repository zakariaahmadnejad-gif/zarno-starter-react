import React from 'react';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zarno-surface-dark border border-zarno-border-glass-dark backdrop-blur-zarno p-6 rounded-zarno-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-lg text-zarno-gold-main">{title}</h2>}
          <button onClick={onClose} className="text-zarno-text-secondary-dark text-xl">×</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;