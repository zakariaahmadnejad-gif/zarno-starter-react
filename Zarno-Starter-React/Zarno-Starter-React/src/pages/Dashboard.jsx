import React from 'react';
import DashboardWidget from '../components/DashboardWidget.jsx';

const Dashboard = () => {
  return (
    <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">داشبورد</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <DashboardWidget title="سبد دارایی">
          <p className="text-sm text-zarno-text-secondary-dark">نمایش خلاصه سبد دارایی و تفکیک دارایی‌ها.</p>
        </DashboardWidget>
        <DashboardWidget title="سود/زیان روزانه">
          <p className="text-sm text-zarno-text-secondary-dark">نمایش نمودار سود و زیان روزانه و هفتگی.</p>
        </DashboardWidget>
        <DashboardWidget title="اعلان‌ها">
          <ul className="text-sm text-zarno-text-secondary-dark space-y-2">
            <li>احراز هویت شما تایید شد.</li>
            <li>برداشت شما انجام شد.</li>
            <li>قیمت آب‌شده از حد هشدار شما گذشت.</li>
          </ul>
        </DashboardWidget>
        <DashboardWidget title="اقدامات سریع">
          <div className="space-y-2">
            <p className="text-sm text-zarno-text-secondary-dark">خرید و فروش فوری، درخواست تحویل و واریز تومان.</p>
          </div>
        </DashboardWidget>
      </div>
    </div>
  );
};

export default Dashboard;