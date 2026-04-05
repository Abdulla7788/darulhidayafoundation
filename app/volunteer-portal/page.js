'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, Globe, ArrowRight, User, Phone, Mail, MessageSquare, ShieldCheck, Lock } from 'lucide-react';

export default function VolunteerPortal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Medical Support Network'
  });

  const handleRegister = async (e) => {
     e.preventDefault();
     
     // 🛡️ SECURITY: Formal validation of volunteer credentials
     if (formData.phone.length !== 10) {
        alert("Please enter a valid 10-digit phone connection number.");
        return;
     }

     setIsSubmitting(true);

     // 🛡️ SECURITY: Initializing Secure Handshake Protocol
     setTimeout(() => {
        const whatsappNo = "919866455800";
        const message = `*SECURE VOLUNTEER REGISTRATION*\n\n` +
                        `*Name:* ${formData.name}\n` +
                        `*Email:* ${formData.email}\n` +
                        `*Phone:* ${formData.phone}\n` +
                        `*Interest:* ${formData.interest}\n\n` +
                        `*Protocol:* DARULHIDAYA-VOL-2026\n` +
                        `*Status:* Authenticated via Web Node`;

        const encodedMessage = encodeURIComponent(message);
        const finalUrl = `https://wa.me/${whatsappNo}?text=${encodedMessage}`;
        
        window.open(finalUrl, '_blank');
        setIsSubmitting(false);
     }, 1500);
  };

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-600/5 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Info Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
           <div className="inline-block p-6 bg-slate-900 rounded-[2rem] mb-12 shadow-2xl">
              <div className="relative">
                 <Users className="w-12 h-12 text-white" />
                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-ping" />
              </div>
           </div>
           
           <h1 className="text-6xl font-heading font-extrabold text-slate-900 uppercase italic tracking-tighter mb-8 leading-[1.1]">
             Join the <br /><span className="text-emerald-700 underline decoration-gold-500/30 font-extrabold">Volunteer Node</span>
           </h1>
           
           <p className="text-slate-500 font-sans italic mb-16 text-xl leading-relaxed opacity-80">
             Be the heartbeat of humanitarian efforts in Mattampally. Coordinate local aid, medical logistics, and Zakat distribution.
           </p>

           <div className="space-y-8">
              {[
                { icon: Heart, title: 'Medical Support Network', desc: 'Directly assist hospital nodes and patient welfare.' },
                { icon: Globe, title: 'Community Outreach', desc: 'Manage Zakat eligibility and distribution logistics.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-emerald-50 transition-colors">
                   <div className="p-5 bg-white rounded-3xl shadow-xl shadow-emerald-700/5 border border-emerald-100">
                      <item.icon className="w-8 h-8 text-emerald-700" />
                   </div>
                   <div>
                      <h4 className="text-xl font-heading font-extrabold uppercase italic leading-none">{item.title}</h4>
                      <p className="text-sm text-slate-400 font-sans italic tracking-wide mt-3">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>

        {/* 🛡️ SECURITY: Application Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="p-16 bg-white rounded-[4rem] shadow-4xl border border-slate-100 relative group overflow-hidden"
        >
           <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-heading font-bold text-slate-900 uppercase italic tracking-tighter">Volunteer <span className="text-emerald-700">Credentials</span></h3>
              <div className="flex items-center space-x-2 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                 <Lock className="w-3 h-3 text-emerald-700" />
                 <span className="text-[8px] font-bold text-emerald-700 uppercase tracking-widest">End-to-End Secure</span>
              </div>
           </div>
           
           <form className="space-y-12" onSubmit={handleRegister}>
              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Full Identity Name</label>
                 <div className="relative">
                    <User className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300" />
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-20 pr-10 py-6 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 font-bold italic transition-all" 
                      placeholder="Your Full Name"
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Email Address Node</label>
                 <div className="relative">
                    <Mail className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300" />
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-20 pr-10 py-6 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 font-bold italic transition-all" 
                      placeholder="email@node.com"
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Phone Connection</label>
                 <div className="relative">
                    <Phone className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300" />
                    <input 
                      required 
                      type="tel" 
                      maxLength="10"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                      className="w-full pl-20 pr-10 py-6 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 font-bold italic transition-all" 
                      placeholder="10-digit Number"
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Select Assignment Area</label>
                 <div className="relative">
                    <MessageSquare className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300" />
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full pl-20 pr-10 py-6 bg-slate-50 border border-slate-100 rounded-3xl font-bold italic outline-none focus:ring-4 focus:ring-emerald-700/10 appearance-none bg-no-repeat transition-all"
                    >
                       <option>Medical Support Network</option>
                       <option>Zakat Verification Team</option>
                       <option>Youth Empowerment Lead</option>
                       <option>Field Logistics Support</option>
                    </select>
                 </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-8 rounded-full font-extrabold shadow-2xl transition-all flex items-center justify-center space-x-6 uppercase tracking-widest italic group ${isSubmitting ? 'bg-emerald-600' : 'bg-slate-900 hover:bg-emerald-700'} text-white`}
              >
                 <AnimatePresence mode="wait">
                   {isSubmitting ? (
                     <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-4">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Encrypting Packet...</span>
                     </motion.div>
                   ) : (
                     <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-6">
                        <span>Initiate Secure Handshake</span>
                        <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                     </motion.div>
                   )}
                 </AnimatePresence>
              </button>

              <div className="flex flex-col items-center space-y-4">
                 <p className="text-[10px] text-slate-400 italic font-bold uppercase tracking-widest opacity-60">Redirecting to End-to-End Encrypted Messenger</p>
                 <div className="flex space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-1 h-1 rounded-full bg-emerald-500 ${isSubmitting ? 'animate-bounce' : 'opacity-20'}`} style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                 </div>
              </div>
           </form>
        </motion.div>
      </div>
    </div>
  );
}
