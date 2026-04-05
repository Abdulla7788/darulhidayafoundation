'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Shield, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DonationModal = ({ isOpen, onClose, cause }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');

  const nextStep = () => setStep(step + 1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />
        
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[4rem] shadow-4xl overflow-hidden border border-slate-100 z-10">
          
          <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-slate-50 rounded-2xl hover:bg-emerald-100 transition-all z-20">
            <X className="w-5 h-5 text-slate-400 group-hover:text-emerald-700" />
          </button>

          <div className="p-16">
            <div className="flex items-center space-x-6 mb-12">
               <div className="p-5 bg-emerald-700 rounded-3xl text-white shadow-xl">
                  <Shield className="w-8 h-8" />
               </div>
               <div>
                  <h2 className="text-3xl font-heading font-extrabold uppercase italic tracking-tighter">Secure Zakat Node</h2>
                  <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mt-1 italic">Verified CSR Bridge</p>
               </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6 uppercase italic tracking-tighter">Mission: <br /><span className="text-emerald-700">{cause?.title || 'General Fund'}</span></h3>
                  
                  <p className="text-slate-500 font-sans italic mb-10 leading-relaxed text-base opacity-80 border-l-4 border-emerald-600 pl-6 py-2">
                    {cause?.desc || 'Explore the strategic impact and humanitarian scope of this foundation initiative.'}
                  </p>

                  <div className="flex justify-between items-center mb-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Impact</span>
                     <span className="text-xl font-heading font-bold text-slate-900 italic">{cause?.goal || '₹50,00,000'}</span>
                  </div>

                  <Link href="/donate" className="w-full py-6 rounded-full bg-slate-900 text-white font-extrabold shadow-2xl hover:bg-emerald-800 transition-all flex items-center justify-center space-x-6 uppercase tracking-widest italic group">
                     <span>Continue to Pay Donation</span>
                     <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                   <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                      <Check className="w-12 h-12 text-emerald-700" />
                   </div>
                   <h3 className="text-4xl font-heading font-bold text-slate-900 mb-6 uppercase italic tracking-tighter">Redirecting...</h3>
                   <p className="text-slate-500 font-sans italic mb-12 max-w-sm mx-auto">Connecting you to our secure payment gateway (Mock-Interface). No real funds will be deducted during this structural test phase.</p>
                   
                   <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                     🛡️ SECURE SUBMISSION CHANNEL ACTIVE
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DonationModal;
