import React from 'react';
import CardGlass from '../components/CardGlass.jsx';

const About = () => (
  <div className="py-10 px-4 max-w-screen-md mx-auto space-y-6">
    <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">درباره ما</h1>
    <CardGlass>
      <p className="text-sm text-zarno-text-secondary-dark">
        ما با یک هدف ساده شروع کردیم: دسترسی شفاف و امن به طلای واقعی، برای هر کسی که می‌خواهد ارزش
        پولش را حفظ کند. تیم ما متشکل از متخصصان حوزه طلا، فناوری و خدمات مالی است.
      </p>
    </CardGlass>
  </div>
);

export default About;