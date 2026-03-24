import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden mb-12 bg-grid">
      {/* Animated Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      
      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />

      {/* Content Text */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight italic">
            Upgrade Setup PC Kamu
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Temukan pilihan gear IT premium dan aksesoris PC terpilih. 
            Didesain untuk performa maksimal dan estetika workspace modern.
          </p>
          
          <div className="mt-10">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:-translate-y-1 active:scale-95">
              Cek Koleksi
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Gradient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
    </header>
  );
};

export default Hero;
