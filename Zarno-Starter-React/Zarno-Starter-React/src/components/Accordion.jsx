import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zarno-border-glass-dark py-4">
      <button
        className="w-full flex justify-between items-center text-right"
        onClick={() => setOpen(!open)}
      >
        <span className="text-zarno-gold-main font-medium">{question}</span>
        <span className="text-zarno-gold-main text-xl">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p className="mt-2 text-sm text-zarno-text-secondary-dark">{answer}</p>
      )}
    </div>
  );
};

const Accordion = ({ items = [] }) => (
  <div className="divide-y divide-zarno-border-glass-dark">
    {items.map((item, idx) => (
      <AccordionItem key={idx} {...item} />
    ))}
  </div>
);

export default Accordion;