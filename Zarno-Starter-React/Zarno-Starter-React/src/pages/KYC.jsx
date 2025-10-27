import React from 'react';
import CardGlass from '../components/CardGlass.jsx';
import InputField from '../components/InputField.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

const KYC = () => {
  return (
    <div className="py-10 px-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4 text-right">احراز هویت</h1>
      <CardGlass>
        <form className="space-y-4">
          <InputField label="نام و نام‌خانوادگی" />
          <InputField label="کد ملی" />
          <InputField label="شماره شبا" />
          <InputField label="تاریخ تولد" type="date" />
          <PrimaryButton className="w-full">ارسال مدارک</PrimaryButton>
        </form>
      </CardGlass>
    </div>
  );
};

export default KYC;