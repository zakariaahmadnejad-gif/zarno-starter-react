import React from 'react';
import { useParams } from 'react-router-dom';
import CardGlass from '../components/CardGlass.jsx';

const postsData = {
  1: {
    title: 'چطور طلای دیجیتال را همان روز نقد کنم؟',
    content: 'در این مقاله، گام به گام توضیح می‌دهیم چگونه طلای دیجیتال خود را در کمترین زمان نقد کنید...'
  },
  2: {
    title: 'آب‌شده یا شمش؟',
    content: 'تفاوت ریسک و نقدشوندگی بین طلای آب‌شده و شمش را بررسی می‌کنیم...'
  },
  3: {
    title: 'چگونه از کاهش ارزش پول در امان بمانیم؟',
    content: 'با راهکارهای متنوع حفظ ارزش سرمایه آشنا شوید...'
  },
};

const Post = () => {
  const { id } = useParams();
  const post = postsData[id];
  if (!post) {
    return (
      <div className="py-10 px-4 max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">مقاله پیدا نشد</h1>
      </div>
    );
  }
  return (
    <div className="py-10 px-4 max-w-screen-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-zarno-gold-main mb-4">{post.title}</h1>
      <CardGlass>
        <p className="text-sm text-zarno-text-secondary-dark whitespace-pre-line">{post.content}</p>
      </CardGlass>
    </div>
  );
};

export default Post;