// src/components/layout/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-transparent mix-blend-difference text-white">
      <div className="text-2xl font-bold tracking-tighter">CREATEDBYASH</div>
      <nav className="flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#services" className="hover:opacity-60 transition">Services</a>
        <a href="#challenge" className="hover:opacity-60 transition">60-Day Challenge</a>
        <a href="#contact" className="hover:opacity-60 transition">Get Started</a>
      </nav>
    </header>
  );
};

export default Header;