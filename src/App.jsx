import React, { useState } from 'react';
import products from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <Header />
      
      <main className="pb-20">
        <Hero />
        
        <SearchBar onSearch={setSearchQuery} />

        <div className="container mx-auto px-6">
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
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
