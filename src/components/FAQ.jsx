import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Apakah semua produk original?",
    answer: "Tentu saja! Semua produk yang kami jual 100% original dan bergaransi resmi."
  },
  {
    question: "Berapa lama estimasi pengiriman?",
    answer: "Untuk wilayah Jabodetabek biasanya 1-2 hari kerja. Luar Jabodetabek berkisar 3-5 hari kerja tergantung ekspedisi."
  },
  {
    question: "Apakah bisa bayar di tempat (COD)?",
    answer: "Maaf, untuk saat ini kami belum melayani pembayaran COD untuk menjaga keamanan transaksi."
  },
  {
    question: "Bagaimana jika barang yang diterima rusak?",
    answer: "Jangan khawatir! Kami memberikan garansi ganti baru jika barang diterima dalam keadaan cacat pabrik atau rusak saat pengiriman (wajib unboxing video)."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-blue-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="container mx-auto px-6 py-20 max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Tanya Jawab (FAQ)</h2>
        <p className="text-slate-400">Punya pertanyaan? Mungkin jawabannya ada di sini.</p>
      </div>

      <div className="bg-slate-900/30 rounded-3xl p-8 border border-slate-800">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
