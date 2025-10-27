import React from 'react';
import CardGlass from '../components/CardGlass.jsx';
import InputField from '../components/InputField.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

const Contact = () => {
  return (
    <div className="py-10 px-4 max-w-screen-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">تماس با ما</h1>
      <CardGlass>
        <form className="space-y-4">
          <InputField label="نام و نام‌خانوادگی" />
          <InputField label="شماره موبایل" />
          <InputField label="پیام شما" />
          <PrimaryButton className="w-full">ارسال پیام</PrimaryButton>
        </form>
      </CardGlass>
      <CardGlass>
        <h2 className="text-xl font-bold text-zarno-gold-main mb-2">پشتیبانی</h2>
        <p className="text-sm text-zarno-text-secondary-dark">پشتیبانی ۲۴/۷</p>
        <p className="text-sm text-zarno-text-secondary-dark">123456789</p>
        <p className="text-sm text-zarno-text-secondary-dark">support@example.com</p>
      </CardGlass>
    </div>
  );
};

export default Contact;