import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-transparent py-8 px-6 border-t border-zarno-border-glass-dark">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <h3 className="text-zarno-gold-main font-bold mb-2">زرنو</h3>
        <p className="text-sm text-zarno-text-secondary-dark">مالکیت واقعی طلا.</p>
      </div>
      <div>
        <h4 className="text-zarno-gold-main font-bold mb-2">لینک‌ها</h4>
        <ul className="space-y-1">
          <li><Link to="/about" className="hover:underline">درباره ما</Link></li>
          <li><Link to="/faq" className="hover:underline">سوالات متداول</Link></li>
          <li><Link to="/contact" className="hover:underline">تماس با ما</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-zarno-gold-main font-bold mb-2">پشتیبانی</h4>
        <p className="text-sm text-zarno-text-secondary-dark">پشتیبانی ۲۴/۷</p>
        <p className="text-sm text-zarno-text-secondary-dark">123456789</p>
        <p className="text-sm text-zarno-text-secondary-dark">support@example.com</p>
      </div>
      <div>
        <h4 className="text-zarno-gold-main font-bold mb-2">شبکه اجتماعی</h4>
        <p className="text-sm text-zarno-text-secondary-dark">ما را دنبال کنید</p>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-zarno-text-secondary-dark">
      &copy; {new Date().getFullYear()} Zarno. تمامی حقوق محفوظ است.
    </div>
  </footer>
);

export default Footer;