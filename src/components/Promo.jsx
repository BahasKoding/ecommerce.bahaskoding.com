import React from 'react';
import { motion } from 'framer-motion';

const Promo = () => {
  return (
    <div className="container mx-auto px-6 mb-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 p-8 md:p-12 shadow-2xl shadow-blue-500/20"
      >
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
              Promo Terbatas
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Diskon Akhir Bulan <br /> <span className="text-blue-200">Hingga 30%!</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-md">
              Dapatkan upgrade setup PC impianmu dengan harga spesial. Berlaku hanya sampai akhir minggu ini!
            </p>
          </div>
          <button 
            onClick={() => {
              const message = encodeURIComponent('Halo Bahas Koding, saya ingin klaim promo diskon akhir bulan 30%!');
              window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
            }}
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-50 transition-all cursor-pointer active:scale-95"
          >
            Klaim Promo Sekarang
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};

export default Promo;
