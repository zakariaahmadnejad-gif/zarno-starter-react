import React from 'react';
import CardGlass from '../components/CardGlass.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import GhostButton from '../components/GhostButton.jsx';
import MarketTable from '../components/MarketTable.jsx';
import Accordion from '../components/Accordion.jsx';
import Badge from '../components/Badge.jsx';

const Home = () => {
  // Sample data for demonstration; in a real app this would come from an API
  const marketData = [
    { name: 'طلای آب‌شده ۱۸ عیار', buyPrice: 3452000, sellPrice: 3461000, change: 0.6 },
    { name: 'شمش ۵ گرمی', buyPrice: 17300000, sellPrice: 17500000, change: 0.4 },
    { name: 'سکه تمام بهار', buyPrice: 48000000, sellPrice: 48200000, change: -0.2 },
  ];

  const faqItems = [
    {
      question: 'چطور می‌توانم طلای خود را برداشت فیزیکی کنم؟',
      answer: 'برای درخواست تحویل، به کیف‌پول بروید و روی «درخواست تحویل فیزیکی» کلیک کنید.',
    },
    {
      question: 'از چه لحظه‌ای مالک طلا می‌شوم؟',
      answer: 'پس از ثبت و تایید سفارش خرید، مالکیت طلا به نام شما منتقل می‌شود.',
    },
    {
      question: 'چطور پول حاصل از فروش را دریافت می‌کنم؟',
      answer: 'پس از فروش طلا، مبلغ ریالی را می‌توانید از طریق کیف‌پول به حساب بانکی خود برداشت کنید.',
    },
  ];

  return (
    <div className="space-y-10 py-10 px-4 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        <div className="lg:w-1/2 space-y-4 text-right">
          <h1 className="text-4xl font-extrabold text-zarno-gold-main">مالکیت واقعی طلا، با نقدشوندگی لحظه‌ای</h1>
          <p className="text-zarno-text-secondary-dark max-w-md">
            خرید، فروش و نگه‌داری طلای آب‌شده و شمش با تسویه آنی و امکان تحویل فیزیکی مُهرخورده.
          </p>
          <div className="flex space-x-reverse space-x-4 mt-4">
            <PrimaryButton>شروع سرمایه‌گذاری</PrimaryButton>
            <GhostButton>ورود</GhostButton>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          {/* Mock wallet card */}
          <CardGlass className="w-full">
            <p className="text-sm text-zarno-text-secondary-dark">ارزش دارایی شما</p>
            <p className="text-2xl font-bold">۱۲,۴۵۰,۰۰۰ تومان</p>
            <div className="mt-2">
              <Badge type="success">+۲.۳٪ امروز</Badge>
            </div>
            <div className="mt-4 flex space-x-reverse space-x-4">
              <PrimaryButton className="flex-grow">افزایش موجودی</PrimaryButton>
              <GhostButton className="flex-grow">برداشت فوری</GhostButton>
            </div>
          </CardGlass>
        </div>
      </div>

      {/* Market Section */}
      <section>
        <h2 className="text-2xl font-bold text-zarno-gold-main mb-4">بازار لحظه‌ای</h2>
        <MarketTable data={marketData} />
      </section>

      {/* Delivery Section */}
      <section>
        <CardGlass>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="lg:w-2/3 text-right">
              <h3 className="text-xl font-bold text-zarno-gold-main mb-2">تحویل فیزیکی مُهرخورده</h3>
              <p className="text-sm text-zarno-text-secondary-dark">
                درخواست تحویل طلای فیزیکی از سقف ۵ گرم به بالا ثبت می‌شود. هر قطعه با مُهر اصالت و فاکتور رسمی
                تحویل می‌گردد. بسته‌بندی ضد دستکاری است و فرآیند تحویل قابل رهگیری است.
              </p>
            </div>
            <div className="lg:w-1/3 text-left lg:text-right">
              <GhostButton>شرایط تحویل را ببین</GhostButton>
            </div>
          </div>
        </CardGlass>
      </section>

      {/* Trust Section */}
      <section>
        <h2 className="text-2xl font-bold text-zarno-gold-main mb-4">چرا زرنو امن است؟</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <CardGlass>
            <h4 className="text-lg font-semibold text-zarno-gold-main mb-2">حفاظت در خزانه بانکی</h4>
            <p className="text-sm text-zarno-text-secondary-dark">طلای شما در صندوق امانی تحت نظارت نگه‌داری می‌شود.</p>
          </CardGlass>
          <CardGlass>
            <h4 className="text-lg font-semibold text-zarno-gold-main mb-2">تسویه آنی به شبا</h4>
            <p className="text-sm text-zarno-text-secondary-dark">برداشت ریالی شما بعد از فروش، به حساب تایید شده‌تان واریز می‌شود.</p>
          </CardGlass>
          <CardGlass>
            <h4 className="text-lg font-semibold text-zarno-gold-main mb-2">احراز هویت و اصالت</h4>
            <p className="text-sm text-zarno-text-secondary-dark">هر گرم طلا ثبت و قابل پیگیری است؛ مالکیت شما شفاف است.</p>
          </CardGlass>
        </div>
      </section>

      {/* Blog Section */}
      <section>
        <h2 className="text-2xl font-bold text-zarno-gold-main mb-4">یاد بگیر، آگاه سرمایه‌گذاری کن</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <CardGlass>
            <h4 className="text-lg font-semibold text-zarno-gold-main mb-2">چطور طلای دیجیتال را همان روز نقد کنم؟</h4>
            <p className="text-sm text-zarno-text-secondary-dark mb-4">در این مقاله، گام به گام توضیح می‌دهیم چگونه طلای دیجیتال خود را در کمترین زمان نقد کنید.</p>
          </CardGlass>
          <CardGlass>
            <h4 className="text-lg font-semibold text-zarno-gold-main mb-2">آب‌شده یا شمش؟</h4>
            <p className="text-sm text-zarno-text-secondary-dark mb-4">تفاوت ریسک و نقدشوندگی بین طلای آب‌شده و شمش را بررسی می‌کنیم.</p>
          </CardGlass>
          <CardGlass>
            <h4 className="text-lg font-semibold text-zarno-gold-main mb-2">چگونه از کاهش ارزش پول در امان بمانیم؟</h4>
            <p className="text-sm text-zarno-text-secondary-dark mb-4">با راهکارهای متنوع حفظ ارزش سرمایه آشنا شوید.</p>
          </CardGlass>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-zarno-gold-main mb-4">سوالات پرتکرار</h2>
        <Accordion items={faqItems} />
        <div className="mt-4 text-right">
          <GhostButton>همه سوالات</GhostButton>
        </div>
      </section>
    </div>
  );
};

export default Home;