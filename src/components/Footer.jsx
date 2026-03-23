import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-16 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">B</div>
            <span className="text-xl font-bold tracking-tight text-white">
              BAHAS<span className="text-blue-500">KODING</span>
            </span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2026 Bahas Koding IT/PC Edition. Dibuat dengan semangat untuk para tech enthusiast.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
