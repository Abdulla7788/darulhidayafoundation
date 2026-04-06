'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Heart, Users, Globe, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    if (showCover) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCover]);

  return (
    <>
      <AnimatePresence>
        {showCover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[200] bg-[#010409]/90 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            <div className="relative w-full max-w-6xl aspect-[1.3/1] md:aspect-[1.8/1] rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
              {/* The Cover Image */}
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="/cover.jpeg"
                alt="Cover Page"
                className="w-full h-full object-contain bg-white"
              />

              {/* X-Mark Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCover(false)}
                className="absolute top-4 right-4 z-[210] w-12 h-12 bg-slate-900 shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all group border-2 border-white/20"
                aria-label="Close Cover Page"
              >
                <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative bg-white">
      {/* 🛡️ SECURITY: Scroll progress visualization (Client-side effect only) */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-[100]" style={{ scaleX }} />

      {/* Hero Section: Enchanced with Navy & Gold theme */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[45vw] h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 z-0" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, black 2px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Text Overlay */}
            <div>
              <div className="inline-flex items-center space-x-2 px-6 py-2 bg-emerald-600/5 rounded-full border border-emerald-600/10 text-emerald-800 font-bold text-xs tracking-widest uppercase mb-10 shadow-sm">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                <span>Foundation in Action</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading text-slate-900 leading-[1.1] mb-8 uppercase italic tracking-tighter drop-shadow-sm">
                Nurturing <span className="text-emerald-700 relative italic">Hope
                  <svg className="absolute -bottom-3 left-0 w-full h-6 text-emerald-500/10 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" />
                  </svg>
                </span> Through <span className="text-gold-600 italic">Charity</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-xl font-sans italic opacity-80">
                Join our mission to provide Zakat, Sadaqah, and support to marginalized communities in Mattampally and Surroundings. 
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <Link
                  href="/donate"
                  className="bg-slate-900 text-white px-12 py-6 rounded-full font-bold text-lg shadow-2xl hover:bg-emerald-800 hover:-translate-y-2 transition-all duration-500 flex items-center group uppercase tracking-widest italic"
                >
                  Contribute Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a 
                  href="https://youtube.com/@darulhidayafoundation?si=WzRgX1CSYjXey2xI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-900 font-bold hover:text-emerald-700 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="uppercase text-sm tracking-widest italic font-bold">Watch Trust Stories</span>
                </a>
              </div>
            </div>

            {/* Visuals */}
            <div className="relative">
              <div className="relative w-full max-w-[500px] aspect-[4/5] bg-gradient-to-br from-emerald-900 to-slate-900 rounded-[80px] overflow-hidden shadow-2xl shadow-emerald-950/40 transform rotate-3">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60 transform -rotate-3 scale-110" />
                
                {/* 🛡️ SECURITY: Simulated Secure Access Overlays */}
                <div className="absolute top-12 left-12 p-6 glass rounded-2xl border-white/20 backdrop-blur-3xl shadow-2xl flex items-center space-x-4 animate-bounce">
                  <Globe className="w-8 h-8 text-white" />
                  <div className="text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Status</p>
                    <p className="text-xs font-bold">Secure Global Bridge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🖼️ IMPACT GALLERY SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="inline-block px-4 py-1 bg-emerald-600/10 rounded-full text-emerald-800 font-bold text-[10px] tracking-widest uppercase mb-4">
                Field Evidence
              </div>
              <h2 className="text-5xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter">
                Transparency <span className="text-emerald-700">Gallery</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-500 italic font-medium leading-relaxed border-l-4 border-emerald-600 pl-6">
              Capturing our high-end ground operations across distribution nodes and community infrastructure builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                id: 1,
                img: "/campaign_food.jpeg", 
                title: "Food Relay Node", 
                desc: "Direct nutritional sustenance distribution for Mustahiq families.",
                tag: "Essential Aid"
              },
              { 
                id: 4,
                img: "/gallery/pic13.jpeg", 
                title: "Infrastructure Build", 
                desc: "Creating permanent community assets and sustainable water systems.",
                tag: "Sadaqah Jariyah"
              }
            ].map((item, i) => (
              <Link href={`/causes/${item.id}`} key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden shadow-3xl bg-white border border-slate-100 h-full flex flex-col cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-600 italic">
                        {item.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xl group-hover:bg-emerald-600 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 uppercase italic tracking-tight mb-3 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 italic opacity-70 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
}
