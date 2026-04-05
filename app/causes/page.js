'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Zap, ShieldCheck } from 'lucide-react';

// 🛡️ SECURITY: High-Definition Program Registry
const campaigns = [
  {
    id: 1,
    title: 'Zakat Distribution Node',
    category: 'Essential Aid',
    image: '/campaign_food.jpeg',
    desc: 'Direct food and ration distribution (Mustahiq) in Mattampally village node. Providing monthly sustenance for families in need.'
  },
  {
    id: 2,
    title: 'Islamic Education Fund',
    category: 'Community Empowerment',
    image: 'https://images.unsplash.com/photo-1523050853063-da803f221495?q=80&w=2070&auto=format&fit=crop',
    desc: 'Supporting local Madrassas and vocational training centers to provide premium-grade knowledge and skills to the youth.'
  },
  {
    id: 3,
    title: 'Emergency Medical Relay',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4dacab?q=80&w=2072&auto=format&fit=crop',
    desc: 'Critical hospital coordination and funding for life-saving surgeries and chronic treatments for the marginalized.'
  },
  {
    id: 4,
    title: 'Sadaqah Jariyah Projects',
    category: 'Infrastructure',
    image: '/campaign_build.jpeg',
    desc: 'Building sustainable community infrastructure, including water systems and mosque maintenance for permanent benefits.'
  }
];

export default function Causes() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-600/5 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-32">
          <div className="inline-flex items-center space-x-3 px-6 py-2 bg-slate-900 rounded-full text-white font-bold text-[10px] uppercase tracking-widest italic mb-10 border border-white/10 shadow-2xl">
             <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" />
             <span>Active Humanitarian Protocols</span>
          </div>
          <h1 className="text-7xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter leading-none mb-8">
            Strategic <span className="text-emerald-700">Campaigns</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-sans italic opacity-80 border-l-4 border-emerald-600 pl-8 py-2">
            Every Zakat contribution is directed to these specific, audit-certified programs for maximum grassroots impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {campaigns.map((cause) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] overflow-hidden shadow-4xl group border border-slate-50 relative flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={cause.image} alt={cause.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-8 left-8 px-6 py-2.5 bg-slate-900/40 backdrop-blur-3xl rounded-full text-white font-extrabold text-[10px] uppercase tracking-widest border border-white/10">
                  {cause.category}
                </div>
              </div>

              <div className="p-12 space-y-10 flex flex-col flex-1">
                <h3 className="text-3xl font-heading font-bold text-slate-900 uppercase italic leading-none group-hover:text-emerald-700 transition-colors tracking-tighter">
                  {cause.title}
                </h3>
                <p className="text-slate-400 font-sans italic text-base leading-relaxed opacity-80 border-l-2 border-emerald-600/30 pl-6 flex-1">
                  {cause.desc}
                </p>



                <div className="pt-10 flex items-center justify-between mt-auto">
                   <Link href={`/causes/${cause.id}`} className="px-10 py-6 bg-slate-900 text-white rounded-full font-extrabold text-[10px] uppercase tracking-[0.2em] italic shadow-2xl hover:bg-emerald-700 transition-all flex items-center group/btn relative overflow-hidden">
                      <span className="relative z-10 pr-2">Explore More</span>
                      <Zap className="relative z-10 w-4 h-4 text-gold-500 fill-gold-500 group-hover/btn:rotate-12 transition-transform" />
                   </Link>
                   <Link href="/donate" className="p-4 bg-emerald-600/5 rounded-2xl text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                      <ShieldCheck className="w-6 h-6" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
