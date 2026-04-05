'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Globe, Users, Phone, Mail, Award, Quote, CheckCircle2 } from 'lucide-react';

const chairman = {
  name: 'Chairman Hafiz ALLAHBAKHASH SAHEB',
  role: 'VISIONARY LEADERSHIP',
  details: 'A dedicated philanthropist with over 40 years of service in community development. His unwavering commitment to Islamic principles of charity (Zakat and Sadaqah) has been the cornerstone of the Darulhidaya Foundation.',
  contributions: [
    'Established the first free medical clinic in Mattampally area.',
    'Initiated the "Education for All" program supporting 500+ students.',
    'Developed a transparent Zakat distribution model verified by global audits.',
    'Spearheaded the construction of modern community centers for vocational training.'
  ],
  image: '/founder.jpeg'
};

const quotes = [
  {
    text: "The best of people are those that are most useful to people.",
    author: "Prophet Muhammad (PBUH)",
    category: "Service"
  },
  {
    text: "Charity does not decrease wealth, rather it increases its blessings.",
    author: "Prophet Muhammad (PBUH)",
    category: "Charity"
  },
  {
    text: "The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes; in each spike is a hundred grains.",
    author: "Holy Quran (2:261)",
    category: "Faith"
  },
  {
    text: "Be kind, for whenever kindness becomes part of something, it beautifies it.",
    author: "Prophet Muhammad (PBUH)",
    category: "Kindness"
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      {/* 🏛️ HEADER SECTION */}
      <section className="section-padding relative py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, black 2px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-6 py-2 bg-emerald-600/5 rounded-full text-emerald-800 font-bold text-[10px] tracking-widest uppercase mb-6">
            Establishing the Legacy
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-slate-900 leading-tight italic uppercase tracking-tighter mb-8 max-w-4xl mx-auto">
            Our Pillars of <br /><span className="text-emerald-700 underline decoration-gold-500/30">Mercy & Trust</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-500 font-sans italic opacity-80 leading-relaxed">
            Founded on the immutable principles of Ihsan (Excellence) and Amanah (Trust), we strive to serve humanity without boundaries.
          </p>
        </div>
      </section>

      {/* 👤 CHAIRMAN / FOUNDER SECTION */}
      <section className="section-padding relative pb-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             {/* Image with Decorative Frame */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }} 
               whileInView={{ opacity: 1, x: 0 }} 
               className="relative"
             >
                <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white group">
                   <img src={chairman.image} alt={chairman.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                   <div className="absolute bottom-12 left-12">
                      <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">{chairman.role}</p>
                      <h3 className="text-4xl font-heading font-bold text-white uppercase italic">{chairman.name}</h3>
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-full h-full bg-slate-100 rounded-[4rem] -rotate-3 -z-10 shadow-xl" />
                <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl" />
             </motion.div>

             {/* Details & Contributions */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }} 
               whileInView={{ opacity: 1, x: 0 }}
               className="space-y-12"
             >
                <div>
                   <h2 className="text-5xl font-heading font-extrabold text-slate-900 mb-8 uppercase italic tracking-tighter">
                     Founder's <span className="text-emerald-700">Perspective</span>
                   </h2>
                   <div className="relative pl-12">
                      <Quote className="absolute top-0 left-0 w-8 h-8 text-emerald-600/20" />
                      <p className="text-lg text-slate-600 leading-relaxed font-sans italic">
                        "{chairman.details}"
                      </p>
                   </div>
                </div>

                <div className="space-y-8">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 inline-block px-4 py-1.5 rounded-full">Notable Contributions</h4>
                   <ul className="space-y-6">
                      {chairman.contributions.map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: 20 }} 
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-6 group"
                        >
                           <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                              <CheckCircle2 className="w-5 h-5" />
                           </div>
                           <p className="text-sm font-bold text-slate-700 uppercase tracking-wide leading-relaxed italic mt-2">{item}</p>
                        </motion.li>
                      ))}
                   </ul>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 📜 WORDS OF WISDOM SECTION */}
      <section className="section-padding bg-slate-900 text-white relative py-32 rounded-[6rem] mx-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-10 md:space-y-0">
            <div className="max-w-2xl">
               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-emerald-500 font-bold text-xs tracking-[0.3em] uppercase mb-4">Values & Wisdom</motion.div>
               <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 uppercase italic tracking-tighter">
                 Inspirational <span className="text-emerald-500">Quotes</span>
               </h2>
               <p className="text-emerald-100/60 text-lg font-sans italic">
                 Drawing strength from the timeless teachings of compassion, mercy, and service to humanity.
               </p>
            </div>
            <Award className="w-24 h-24 text-gold-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {quotes.map((quote, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[3rem] relative group hover:bg-white/10 transition-all duration-500"
              >
                <Quote className="w-10 h-10 text-emerald-500/20 absolute top-8 right-8" />
                <p className="text-emerald-500 font-bold text-[10px] tracking-widest uppercase mb-6">{quote.category}</p>
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 italic leading-tight">
                  "{quote.text}"
                </h4>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-1 bg-emerald-600 rounded-full" />
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">— {quote.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

