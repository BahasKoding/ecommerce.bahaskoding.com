import React, { useState } from 'react';
import products from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import Promo from './components/Promo';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Header />
      
      <main className="pb-20">
        <Hero />
        
        <Promo />
        
        <SearchBar onSearch={setSearchQuery} />

        <div className="container mx-auto px-6 mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-black text-white">Katalog Produk</h2>
              <p className="text-slate-500">Pilih gear terbaik untuk setup kamu.</p>
            </div>
            {searchQuery && (
              <span className="text-sm text-blue-500 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Menampilkan hasil untuk "{searchQuery}"
              </span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800">
              <p className="text-slate-500 text-lg">Maaf, produk "{searchQuery}" tidak ditemukan.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-500 hover:underline font-medium"
              >
                Reset pencarian
              </button>
            </div>
          )}
        </div>

        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
