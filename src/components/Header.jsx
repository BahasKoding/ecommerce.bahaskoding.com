import React from 'react';

const Header = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/30">B</div>
          <span className="text-2xl font-black tracking-tight text-white">
            BAHAS<span className="text-blue-500">KODING</span>
          </span>
        </div>
        {/* Right side links removed as requested */}
      </div>
    </nav>
  );
};

export default Header;
