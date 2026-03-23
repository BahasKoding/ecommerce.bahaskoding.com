import React from 'react';
import { motion } from 'framer-motion';

// Import satu gambar fixed untuk pengganti (Fallback)
import DefaultImage from '../assets/images/placeholder-pc.webp';

const ProductCard = ({ product }) => {
  // Fungsi untuk handle jika gambar di folder images tidak ditemukan/error
  const addDefaultSrc = (ev) => {
    ev.target.src = DefaultImage;
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg hover:shadow-blue-900/10 transition-all flex flex-col h-full"
    >
      <div className="overflow-hidden rounded-xl mb-4 h-48 bg-slate-800 relative group">
        <img 
          src={`/src/assets/images/${product.image}`} 
          onError={addDefaultSrc} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">{product.desc}</p>
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-800/50">
        <span className="text-blue-400 font-black text-2xl">{product.price}</span>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 active:bg-blue-800 transition-all cursor-pointer"
        >
          Beli Sekarang
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
