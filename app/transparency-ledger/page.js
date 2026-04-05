'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, FileText, Lock } from 'lucide-react';

export default function TransparencyLedger() {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-block p-6 bg-emerald-600/5 rounded-full mb-12 border border-emerald-600/10">
           <ShieldCheck className="w-12 h-12 text-emerald-700" />
        </motion.div>
        
        <h1 className="text-6xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter mb-8 leading-tight">
          Transparency <br /><span className="text-emerald-700">Ledger Portal</span>
        </h1>
        
        <p className="text-slate-500 font-sans italic mb-16 text-lg leading-relaxed">
          The DARULHIDAYA FOUNDATION operates on a 100% transparency protocol. Every donation is encrypted at rest (AES-256) and traceable via our internal secure ledger.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
           {[
             { icon: Database, title: 'Encrypted Audit Trail', desc: 'Secure record-keeping of every Zakat and Sadaqah transaction.' },
             { icon: FileText, title: 'Annual Impact Report', desc: 'Publically verifiable documentation of our grassroots projects.' },
           ].map((item, i) => (
             <div key={i} className="p-10 glass shadow-3xl rounded-[3rem] border border-slate-50 border-gold-200/20">
                <item.icon className="w-8 h-8 text-emerald-700 mb-6" />
                <h4 className="text-xl font-heading font-bold mb-4 uppercase italic">{item.title}</h4>
                <p className="text-sm text-slate-400 font-sans italic leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-24 p-10 bg-slate-950 rounded-[4rem] border border-emerald-900/20 flex items-center justify-between">
           <div className="flex items-center space-x-6">
              <Lock className="w-6 h-6 text-emerald-500" />
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest italic leading-none">Security Status: Active & Encrypted</p>
           </div>
           <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Audit Code: 0X44-DH-2026</span>
        </div>
      </div>
    </div>
  );
}
