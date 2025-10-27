import React from 'react';
import CardGlass from '../components/CardGlass.jsx';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'چطور طلای دیجیتال را همان روز نقد کنم؟', excerpt: 'در این مقاله، گام به گام توضیح می‌دهیم چگونه طلای دیجیتال خود را در کمترین زمان نقد کنید.' },
  { id: 2, title: 'آب‌شده یا شمش؟', excerpt: 'تفاوت ریسک و نقدشوندگی بین طلای آب‌شده و شمش را بررسی می‌کنیم.' },
  { id: 3, title: 'چگونه از کاهش ارزش پول در امان بمانیم؟', excerpt: 'با راهکارهای متنوع حفظ ارزش سرمایه آشنا شوید.' },
];

const Blog = () => (
  <div className="py-10 px-4 max-w-screen-xl mx-auto space-y-6">
    <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">وبلاگ</h1>
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <CardGlass key={post.id}>
          <h3 className="text-xl font-bold text-zarno-gold-main mb-2">{post.title}</h3>
          <p className="text-sm text-zarno-text-secondary-dark mb-4">{post.excerpt}</p>
          <Link to={`/blog/${post.id}`} className="text-zarno-accent-purple hover:underline">بیشتر بخوانید</Link>
        </CardGlass>
      ))}
    </div>
  </div>
);

export default Blog;