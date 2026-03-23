import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Andi Saputra",
    role: "Software Engineer",
    content: "Build PC gear dari Bahas Koding beneran premium. Keychron K2-nya original dan packingnya aman banget!",
    avatar: "https://i.pravatar.cc/150?u=andi"
  },
  {
    name: "Rina Maharani",
    role: "Graphic Designer",
    content: "Monitor LG 27\" ini warnanya akurat banget buat kerja grafis. Pelayanannya ramah dan pengirimannya cepat.",
    avatar: "https://i.pravatar.cc/150?u=rina"
  },
  {
    name: "Budi Santoso",
    role: "Pro Gamer",
    content: "Mouse G Pro X Superlight-nya gokil! Ringan banget buat main Valorant. Worth every penny!",
    avatar: "https://i.pravatar.cc/150?u=budi"
  }
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Apa Kata Mereka?</h2>
        <p className="text-slate-400">Kepuasan pelanggan adalah prioritas utama kami di Bahas Koding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-slate-800 group-hover:border-blue-500/50 transition-colors" />
              <div>
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-slate-500 text-sm">{item.role}</p>
              </div>
            </div>
            <p className="text-slate-300 italic leading-relaxed">
              "{item.content}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
