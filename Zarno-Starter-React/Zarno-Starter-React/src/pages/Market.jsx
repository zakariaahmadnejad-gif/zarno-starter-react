import React from 'react';
import MarketTable from '../components/MarketTable.jsx';
import CardGlass from '../components/CardGlass.jsx';

const Market = () => {
  const marketData = [
    { name: 'طلای آب‌شده ۱۸ عیار', buyPrice: 3452000, sellPrice: 3461000, change: 0.6 },
    { name: 'شمش ۵ گرمی', buyPrice: 17300000, sellPrice: 17500000, change: 0.4 },
    { name: 'سکه تمام بهار', buyPrice: 48000000, sellPrice: 48200000, change: -0.2 },
  ];
  return (
    <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">بازار</h1>
      <MarketTable data={marketData} />
      <CardGlass>
        <p className="text-sm text-zarno-text-secondary-dark">
          نوسان قیمت طلا می‌تواند منجر به سود یا زیان شود. پیش از ثبت سفارش، شرایط بازار را بررسی کنید.
        </p>
      </CardGlass>
    </div>
  );
};

export default Market;