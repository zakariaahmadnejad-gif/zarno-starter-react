import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Market from './pages/Market.jsx';
import Wallet from './pages/Wallet.jsx';
import Dashboard from './pages/Dashboard.jsx';
import KYC from './pages/KYC.jsx';
import Settings from './pages/Settings.jsx';
import FAQ from './pages/FAQ.jsx';
import Blog from './pages/Blog.jsx';
import Post from './pages/Post.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Auth from './pages/Auth.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-zarno-bg-dark text-zarno-text-primary-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;