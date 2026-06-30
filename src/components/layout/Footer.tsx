// src/components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-8 py-12 border-t border-white/10 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-4xl font-bold mb-4">Let's turn your agency into a machine.</h3>
          <p className="text-gray-400">© 2026 CreatedByAsh. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <a href="mailto:hello@createdbyash.com" className="text-2xl font-bold underline">hello@createdbyash.com</a>
          <div className="flex gap-4">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;