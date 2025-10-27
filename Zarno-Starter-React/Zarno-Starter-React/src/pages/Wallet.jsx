import React from 'react';
import WalletBalanceCard from '../components/WalletBalanceCard.jsx';
import CardGlass from '../components/CardGlass.jsx';

const Wallet = () => {
  return (
    <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">کیف‌پول</h1>
      <WalletBalanceCard totalValue={12450000} dailyChange={2.3} />
      {/* Additional content such as portfolio breakdown and transaction history can be added here */}
      <CardGlass>
        <p className="text-sm text-zarno-text-secondary-dark">
          در این صفحه می‌توانید موجودی و تاریخچه تراکنش‌های خود را مشاهده کنید.
        </p>
      </CardGlass>
    </div>
  );
};

export default Wallet;