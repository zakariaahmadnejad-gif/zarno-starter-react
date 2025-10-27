import React from 'react';
import CardGlass from '../components/CardGlass.jsx';

const Settings = () => (
  <div className="py-10 px-4 max-w-screen-md mx-auto space-y-6">
    <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">تنظیمات</h1>
    <CardGlass>
      <h2 className="text-xl font-bold text-zarno-gold-main mb-2">پروفایل</h2>
      <p className="text-sm text-zarno-text-secondary-dark">ویرایش اطلاعات کاربری.</p>
    </CardGlass>
    <CardGlass>
      <h2 className="text-xl font-bold text-zarno-gold-main mb-2">امنیت</h2>
      <p className="text-sm text-zarno-text-secondary-dark">تغییر رمز عبور معاملاتی و فعال‌سازی تایید دو مرحله‌ای.</p>
    </CardGlass>
    <CardGlass>
      <h2 className="text-xl font-bold text-zarno-gold-main mb-2">اعلان‌ها</h2>
      <p className="text-sm text-zarno-text-secondary-dark">مدیریت اعلان‌های مربوط به رویدادهای قیمتی و تراکنش‌ها.</p>
    </CardGlass>
  </div>
);

export default Settings;