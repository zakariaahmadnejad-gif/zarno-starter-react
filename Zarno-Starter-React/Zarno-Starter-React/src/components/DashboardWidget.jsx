import React from 'react';
import CardGlass from './CardGlass.jsx';

const DashboardWidget = ({ title, children }) => (
  <CardGlass className="w-full">
    <h3 className="mb-4 text-zarno-gold-main font-semibold">{title}</h3>
    {children}
  </CardGlass>
);

export default DashboardWidget;