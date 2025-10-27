import React from 'react';
import CardGlass from './CardGlass.jsx';
import Badge from './Badge.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import GhostButton from './GhostButton.jsx';

const WalletBalanceCard = ({ totalValue, dailyChange }) => (
  <CardGlass>
    <div className="flex flex-col space-y-4">
      <div>
        <p className="text-sm text-zarno-text-secondary-dark">ارزش کل دارایی</p>
        <p className="text-2xl font-bold">{totalValue.toLocaleString()} تومان</p>
        <Badge type={dailyChange >= 0 ? 'success' : 'danger'} className="mt-1">
          {dailyChange >= 0 ? '+' : ''}{dailyChange}٪ امروز
        </Badge>
      </div>
      <div className="flex space-x-reverse space-x-4">
        <PrimaryButton className="flex-grow">افزایش موجودی</PrimaryButton>
        <GhostButton className="flex-grow">برداشت فوری</GhostButton>
      </div>
    </div>
  </CardGlass>
);

export default WalletBalanceCard;