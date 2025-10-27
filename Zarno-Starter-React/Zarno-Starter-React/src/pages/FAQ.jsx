import React from 'react';
import Accordion from '../components/Accordion.jsx';

const FAQ = () => {
  const faqItems = [
    { question: 'چطور طلا بخرم؟', answer: 'برای خرید طلا، به صفحه بازار بروید و دکمه خرید را انتخاب کنید.' },
    { question: 'چقدر طول می‌کشد تا پول در حسابم باشد؟', answer: 'پس از فروش، مبلغ طی چند دقیقه تا نهایت چند ساعت به حساب تایید شده واریز می‌شود.' },
    { question: 'چرا باید احراز هویت انجام دهم؟', answer: 'برای رعایت قوانین ضد پولشویی و حفظ امنیت کاربران، احراز هویت ضروری است.' },
  ];
  return (
    <div className="py-10 px-4 max-w-screen-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">سوالات پرتکرار</h1>
      <Accordion items={faqItems} />
    </div>
  );
};

export default FAQ;