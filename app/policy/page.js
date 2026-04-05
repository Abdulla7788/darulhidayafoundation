'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Policy() {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-extrabold text-slate-900 mb-12 uppercase italic"
        >
          Privacy <span className="text-emerald-700">Policy</span>
        </motion.h1>
        
        <div className="prose prose-slate lg:prose-xl font-sans text-slate-600 space-y-8 italic">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 uppercase">1. Data Storage</h2>
            <p>Your donor information is stored in an end-to-end encrypted management system to ensure complete privacy and security of your personal and financial details.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 uppercase">2. Utilization of Data</h2>
            <p>Data collected is strictly for the purpose of managing donation records, providing receipts, and communicating impact reports about our campaigns.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 uppercase">3. Third Party Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for the purpose of processing secure transactions through our banking partners.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
