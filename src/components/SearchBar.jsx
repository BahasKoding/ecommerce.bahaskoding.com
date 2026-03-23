import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="container mx-auto px-6 mb-12">
      <div className="max-w-xl mx-auto relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Cari produk impianmu..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner"
        />
      </div>
    </div>
  );
};

export default SearchBar;
