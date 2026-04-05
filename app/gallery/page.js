'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Camera, Globe, Heart } from 'lucide-react';

const galleryItems = Array.from({ length: 16 }, (_, i) => ({
  img: `/gallery/pic${i + 1}.jpeg`,
  title: `Ground Impact Node ${i + 1}`,
  category: i % 4 === 0 ? "Essential Aid" : i % 3 === 0 ? "Community build" : "Zakat Distribution",
  desc: "Verified ground operations and distribution evidence from the Mattampally node."
}));

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-600/5 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 px-6 py-2 bg-slate-900 rounded-full text-white font-bold text-[10px] uppercase tracking-widest italic mb-10 border border-white/10 shadow-2xl">
             <Camera className="w-3 h-3 text-emerald-500" />
             <span>Visual Audit Repository</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter leading-none mb-8">
            Impact <span className="text-emerald-700">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-sans italic opacity-80 border-l-4 border-emerald-600 pl-8 py-2">
            A high-definition record of our field operations, community infrastructure, and leadership milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-[4rem] overflow-hidden shadow-4xl bg-white border border-slate-50"
            >
              <div className="aspect-video overflow-hidden bg-slate-50 flex items-center justify-center">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
