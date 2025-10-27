import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="py-4 px-6 flex justify-between items-center border-b border-zarno-border-glass-dark">
    <Link to="/" className="text-zarno-gold-main text-2xl font-bold">زرنو</Link>
    <nav className="space-x-reverse space-x-4 hidden md:block">
      <Link to="/market" className="text-zarno-gold-main hover:underline">بازار</Link>
      <Link to="/wallet" className="text-zarno-gold-main hover:underline">کیف‌پول</Link>
      <Link to="/blog" className="text-zarno-gold-main hover:underline">آموزش</Link>
      <Link to="/about" className="text-zarno-gold-main hover:underline">درباره ما</Link>
    </nav>
    <div className="hidden md:block">
      <Link to="/auth" className="bg-zarno-accent-purple text-white py-2 px-4 rounded-zarno-md hover:shadow-md hover:shadow-zarno-gold-main transition">
        ورود / ثبت‌نام
      </Link>
    </div>
  </header>
);

export default Navbar;