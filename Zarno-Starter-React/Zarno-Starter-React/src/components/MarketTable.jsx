import React from 'react';
import CardGlass from './CardGlass.jsx';
import Badge from './Badge.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import GhostButton from './GhostButton.jsx';

const MarketTable = ({ data }) => (
  <CardGlass className="overflow-x-auto">
    <table className="w-full text-right">
      <thead>
        <tr className="text-zarno-gold-main text-sm border-b border-zarno-border-glass-dark">
          <th className="py-2 px-4">دارایی</th>
          <th className="py-2 px-4">خرید (تومان)</th>
          <th className="py-2 px-4">فروش (تومان)</th>
          <th className="py-2 px-4">تغییر</th>
          <th className="py-2 px-4">اقدام</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-b border-zarno-border-glass-dark">
            <td className="py-2 px-4">{row.name}</td>
            <td className="py-2 px-4">{row.buyPrice.toLocaleString()}</td>
            <td className="py-2 px-4">{row.sellPrice.toLocaleString()}</td>
            <td className="py-2 px-4">
              <Badge type={row.change >= 0 ? 'success' : 'danger'}>
                {row.change >= 0 ? '+' : ''}{row.change}%
              </Badge>
            </td>
            <td className="py-2 px-4 space-x-reverse space-x-2 flex justify-end">
              <PrimaryButton className="!text-sm !py-1 !px-2">خرید</PrimaryButton>
              <GhostButton className="!text-sm !py-1 !px-2">فروش</GhostButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </CardGlass>
);

export default MarketTable;