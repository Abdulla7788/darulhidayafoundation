'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      setGalleryItems(data);
    } catch (err) {
      console.error('Failed to fetch gallery:', err);
    } finally {
      setLoading(false);
    }
  };

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
            A visual documentation of our ground operations, community milestones, and transformation stories.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100"
              >
                <img 
                  src={item.img} 
                  alt="Gallery Item" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}
        <div className="mt-32 pt-12 border-t border-slate-100 flex justify-center">
          <a 
            href="/auth/login" 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 hover:text-emerald-600 transition-all flex items-center gap-2"
          >
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
            Secure Management Access
          </a>
        </div>
      </div>
    </div>
  );
}
