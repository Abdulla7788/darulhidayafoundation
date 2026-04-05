'use client';
import React from 'react';
import Link from 'next/link';
import { Home, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyActions = () => {
  return (
    <div className="fixed bottom-10 left-10 z-[100] flex flex-col space-y-6">
      {/* Home Shortcut */}
      <Link href="/">
         <motion.div 
           whileHover={{ scale: 1.1, rotate: -10 }} 
           whileTap={{ scale: 0.9 }}
           className="w-16 h-16 bg-white border border-slate-100 shadow-4xl rounded-2xl flex items-center justify-center text-slate-900 hover:text-emerald-700 transition-colors group cursor-pointer"
         >
           <Home className="w-8 h-8" />
           <span className="absolute left-[110%] top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Home Portal
           </span>
         </motion.div>
      </Link>

      {/* Secure Donation Shortcut */}
      <Link href="/donate">
         <motion.div 
           whileHover={{ scale: 1.1, rotate: 10 }} 
           whileTap={{ scale: 0.9 }}
           className="w-16 h-16 bg-slate-900 border-2 border-emerald-500/20 shadow-4xl rounded-2xl flex items-center justify-center text-white hover:bg-emerald-700 transition-all group cursor-pointer relative"
         >
           <Heart className="w-8 h-8 fill-emerald-500 text-emerald-500 group-hover:fill-white group-hover:text-white transition-colors" />
           
           <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
              <ShieldCheck className="w-2.5 h-2.5 text-white" />
           </div>

           <span className="absolute left-[110%] top-1/2 -translate-y-1/2 px-4 py-2 bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Secure Zakat Node
           </span>
         </motion.div>
      </Link>
    </div>
  );
};

export default StickyActions;
