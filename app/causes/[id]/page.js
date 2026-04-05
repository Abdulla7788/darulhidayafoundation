'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Heart, Users, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// 🛡️ SECURITY: Hardened Data Model
const campaigns = [
  {
    id: 1,
    title: 'Zakat Distribution Node',
    category: 'Essential Aid',
    goal: '₹15,00,000',
    desc: 'Our direct food distribution protocol ensures that your contributions reach the most eligible families (Mustahiq) in the Mattampally village node. We focus on providing high-quality monthly ration packets to ensure nutritional security for widows and orphans.',
    image: '/campaign_food.jpeg',
    gallery: [
      '/campaign_food.jpeg',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
    ]
  },
  {
    id: 2,
    title: 'Islamic Education Fund',
    category: 'Community Empowerment',
    goal: '₹20,00,000',
    desc: 'This initiative funds local Madrassas and modern educational support for students in need. We provide books, infrastructure upgrades, and vocational training sessions to empower the next generation with both spiritual and professional excellence.',
    image: 'https://images.unsplash.com/photo-1523050853063-da803f221495?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop',
    ]
  },
  {
    id: 3,
    title: 'Emergency Medical Relay',
    category: 'Healthcare',
    goal: '₹25,00,000',
    desc: 'Our critical medical node provides urgent treatments and hospital coordination for marginalized families. We specialize in oncology-related aid and emergency trauma support to ensure no life is lost due to financial constraints in Suryapet district.',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4dacab?q=80&w=2072&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584515201114-6663583980bc?q=80&w=2070&auto=format&fit=crop',
    ]
  },
  {
    id: 4,
    title: 'Sadaqah Jariyah Projects',
    category: 'Infrastructure',
    goal: '₹10,00,000',
    desc: 'Building permanent assets for the community, including sustainable water wells and mosque maintenance. Our current build projects focus on creating high-end, durable infrastructure that serves the village node for generations.',
    image: '/campaign_build.jpeg',
    gallery: [
      '/campaign_build.jpeg',
      '/campaign_food.jpeg',
    ]
  }
];

export default function CauseDetail({ params }) {
  const cause = campaigns.find(c => c.id === parseInt(params.id)) || campaigns[0];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img src={cause.image} className="w-full h-full object-cover opacity-60" alt={cause.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <p className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-xs mb-8 italic">MISSION INTEL: {cause.category}</p>
             <h1 className="text-8xl font-heading font-extrabold text-white uppercase italic tracking-tighter leading-none mb-12 drop-shadow-2xl">
                {cause.title}
             </h1>

          </motion.div>
        </div>
      </section>

      {/* Logic & Description */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
         <div className="space-y-12">
            <h2 className="text-4xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter border-b-4 border-slate-900 pb-6 inline-block">The Foundation Strategy</h2>
            <p className="text-2xl font-sans italic text-slate-500 leading-relaxed border-l-8 border-emerald-600 pl-10 py-4 opacity-80">
              "{cause.desc}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
               {[
                 { icon: Users, title: 'Direct Distribution', desc: 'Aid is delivered straight to families in the village node.' },
                 { icon: Globe, title: 'Verified Audit', desc: 'Secure tracking via our transparency ledger protocol.' },
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-start space-x-6">
                    <item.icon className="w-8 h-8 text-emerald-700 mt-1" />
                    <div>
                       <h4 className="font-heading font-bold text-lg uppercase italic">{item.title}</h4>
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Image Gallery */}
         <div className="space-y-12">
            <h2 className="text-4xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter border-b-4 border-slate-900 pb-6 inline-block">Impact Gallery</h2>
            <div className="grid grid-cols-1 gap-12">
               {cause.gallery.map((img, i) => (
                 <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="aspect-[16/9] rounded-[4rem] overflow-hidden shadow-4xl group relative">
                    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                    <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <p className="px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full text-white font-bold text-[10px] uppercase tracking-widest border border-white/20">Official Asset Log: {cause.id}-{i+1}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-40 bg-slate-950 text-center">
          <div className="max-w-4xl mx-auto px-6">
             <Heart className="w-16 h-16 text-emerald-500 mx-auto mb-12 animate-pulse" />
             <h2 className="text-6xl font-heading font-extrabold text-white uppercase italic tracking-tighter mb-16 leading-tight">
                Not Done Exploring <br /><span className="text-emerald-500">Our Strategic Impact?</span>
             </h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <Link href="/causes" className="px-16 py-8 bg-white text-slate-950 rounded-full font-extrabold shadow-2xl hover:bg-emerald-600 hover:text-white transition-all flex items-center space-x-6 uppercase tracking-widest italic group">
                   <span>Explore Other Programs</span>
                   <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link href="/donate" className="px-16 py-8 border-2 border-white/20 text-white rounded-full font-extrabold shadow-2xl hover:border-emerald-500 hover:bg-emerald-500 transition-all flex items-center space-x-6 uppercase tracking-widest italic">
                   <span>Direct Secure Contribution</span>
                </Link>
             </div>
          </div>
      </section>
    </div>
  );
}
