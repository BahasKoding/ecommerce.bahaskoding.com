import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Asset Slider
const slides = [
  {
    id: 1,
    image: '/src/assets/images/hero-1.webp',
    title: 'Upgrade Setup PC Kamu',
    subtitle: 'Temukan pilihan gear IT premium dan aksesoris PC terpilih.'
  },
  {
    id: 2,
    image: '/src/assets/images/hero-2.webp',
    title: 'Produktivitas Maksimal',
    subtitle: 'Workspace yang rapi dan fungsional untuk mendukung kreativitas Anda.'
  },
  {
    id: 3,
    image: '/src/assets/images/hero-3.webp',
    title: 'Performa Tanpa Batas',
    subtitle: 'Komponen PC kelas atas untuk pengalaman gaming dan kerja terbaik.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Ganti setiap 5 detik

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden mb-12">
      {/* Slide Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          />
          {/* Overlay Dark */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* Content Text (Static) */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight italic">
          Upgrade Setup PC Kamu
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
          Temukan pilihan gear IT premium dan aksesoris PC terpilih. 
          Didesain untuk performa maksimal dan estetika workspace modern.
        </p>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === index ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
