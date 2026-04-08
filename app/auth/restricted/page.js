'use client';
import React from 'react';
import { ShieldAlert, ArrowLeft, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RestrictedPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[3rem] shadow-4xl p-12 text-center border border-slate-100"
      >
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-100">
          <ShieldAlert className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-4xl font-heading font-extrabold text-slate-900 italic uppercase mb-4">Access Denied</h1>
        <p className="text-slate-500 font-sans italic mb-10">
          This node requires high-level administrative clearance. Your attempt has been logged.
        </p>

        <div className="space-y-4">
          <a 
            href="/auth/login" 
            className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all"
          >
            <Lock className="w-4 h-4" />
            Authenticate
          </a>
          <a 
            href="/" 
            className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-400 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all border border-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Safety
          </a>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="px-4 py-1 bg-slate-100 rounded-full text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                ERR_UNAUTHORIZED_NODE_ACCESS
            </div>
        </div>
      </motion.div>
    </div>
  );
}
