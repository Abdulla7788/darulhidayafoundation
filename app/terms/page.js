'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-extrabold text-slate-900 mb-12 uppercase italic"
        >
          Terms of <span className="text-emerald-700">Service</span>
        </motion.h1>
        
        <div className="prose prose-slate lg:prose-xl font-sans text-slate-600 space-y-8 italic">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 uppercase">1. Acceptable Use</h2>
            <p>By accessing the Darulhidaya Foundation platform, you agree to use our services for charitable purposes and in compliance with all local and international laws.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 uppercase">2. Donation Policy</h2>
            <p>All donations made through our secure portal are final. We ensure 100% transparency in the utilization of Zakat and Sadaqah funds as per the specified campaigns.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 uppercase">3. Security</h2>
            <p>We employ end-to-end encryption for all beneficiary and donor data. Unauthorized access or tampering with the platform is strictly prohibited.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
