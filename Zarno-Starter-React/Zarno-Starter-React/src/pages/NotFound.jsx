import React from 'react';
import { Link } from 'react-router-dom';
import CardGlass from '../components/CardGlass.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

const NotFound = () => (
  <div className="py-10 px-4 max-w-screen-md mx-auto space-y-6">
    <CardGlass className="text-center">
      <h1 className="text-4xl font-bold text-zarno-gold-main mb-4">۴۰۴</h1>
      <p className="text-sm text-zarno-text-secondary-dark mb-4">صفحه پیدا نشد. ممکن است جابجا شده باشد یا حذف شده باشد.</p>
      <PrimaryButton>
        <Link to="/">بازگشت به صفحه اصلی</Link>
      </PrimaryButton>
    </CardGlass>
  </div>
);

export default NotFound;