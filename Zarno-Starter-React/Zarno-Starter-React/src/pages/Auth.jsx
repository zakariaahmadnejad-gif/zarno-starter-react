import React from 'react';
import CardGlass from '../components/CardGlass.jsx';
import InputField from '../components/InputField.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

const Auth = () => (
  <div className="py-10 px-4 max-w-screen-sm mx-auto space-y-6">
    <h1 className="text-3xl font-bold text-zarno-gold-main mb-4 text-right">ورود / ثبت‌نام</h1>
    <CardGlass>
      <form className="space-y-4">
        <InputField label="شماره موبایل" type="tel" placeholder="مثلاً 09123456789" />
        <PrimaryButton className="w-full">دریافت کد یک‌بارمصرف</PrimaryButton>
      </form>
      <p className="text-xs text-zarno-text-secondary-dark mt-4 text-right">
        با ورود، شما شرایط استفاده و سیاست حریم خصوصی زرنو را می‌پذیرید.
      </p>
    </CardGlass>
  </div>
);

export default Auth;