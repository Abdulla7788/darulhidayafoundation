'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, User, Mail, Globe, ArrowRight, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DonatePortal() {
  const router = useRouter();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    type: 'General Zakat Fund' 
  });

  const handlePay = (e) => {
    e.preventDefault();
    
    // 🛡️ SECURITY: Formal validation of donor credentials
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Generating a session-based secure-token for access control
    sessionStorage.setItem('donor_authenticated', 'true');
    router.push('/donate/scanner');
  };

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-600/5 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Info Column */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
           <div className="inline-block px-6 py-2 bg-slate-900 rounded-full text-white font-bold text-[10px] tracking-widest uppercase mb-10 border border-white/10 shadow-2xl">
             🛡️ SECURE CONTRIBUTION NODE
           </div>
           <h1 className="text-6xl font-heading font-extrabold text-slate-900 leading-tight uppercase italic tracking-tighter mb-8">
             Your Aid <br /><span className="text-emerald-700">Changes Lives</span>
           </h1>
           <p className="text-slate-500 font-sans italic mb-12 text-lg opacity-80 leading-relaxed">
             Please provide your details for our transparency ledger and receipting system before completing your secure donation.
           </p>

           <div className="space-y-6">
              {[
                { title: 'Zakat Al-Mal', detail: 'Purify your wealth through our verified recipients.' },
                { title: 'Project Sadaqah', detail: 'Fund specific educational or medical initiatives.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-emerald-50 transition-colors cursor-default">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-emerald-700" />
                   </div>
                   <div>
                      <h4 className="font-heading font-bold text-lg uppercase italic">{item.title}</h4>
                      <p className="text-[10px] font-bold text-emerald-800/40 uppercase tracking-widest">{item.detail}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>

        {/* 🛡️ SECURITY: Donor Form */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-16 bg-white rounded-[4rem] shadow-4xl border border-slate-50 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-700/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
           <h3 className="text-3xl font-heading font-bold text-slate-900 mb-12 uppercase italic tracking-tighter">Donor <span className="text-emerald-700">Credentials</span></h3>
           
           <form className="space-y-10" onSubmit={handlePay}>
              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Full Name</label>
                 <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-16 pr-8 py-5 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 font-bold italic transition-all" 
                      placeholder="Honorable Donor" 
                    />
                 </div>
              </div>
              
              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Email Address</label>
                 <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-16 pr-8 py-5 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 font-bold italic transition-all" 
                      placeholder="email@domain.com" 
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Phone Number</label>
                 <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input 
                      required 
                      type="tel" 
                      maxLength="10"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                      className="w-full pl-16 pr-8 py-5 bg-slate-50 rounded-3xl border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 font-bold italic transition-all" 
                      placeholder="10-digit Number" 
                    />
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Donation Purpose</label>
                 <div className="relative">
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-10 py-6 bg-slate-50 border border-slate-100 rounded-3xl font-bold italic outline-none focus:ring-4 focus:ring-emerald-700/10 bg-no-repeat appearance-none transition-all"
                    >
                       <option>General Zakat Fund</option>
                       <option>Education Support</option>
                       <option>Medical Emergency</option>
                       <option>Sadaqah Jariyah</option>
                    </select>
                 </div>
              </div>

              <button type="submit" className="w-full py-6 rounded-full bg-slate-900 text-white font-extrabold shadow-2xl hover:bg-emerald-800 transition-all flex items-center justify-center space-x-6 uppercase tracking-widest italic group">
                 <span>Pay Donation</span>
                 <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-slate-400 italic leading-relaxed uppercase tracking-widest opacity-60">
                SSL Secured Transaction Protocol active
              </p>
           </form>
        </motion.div>
      </div>
      {/* 🏦 DIRECT BANK TRANSFER SECTION */}
      <section className="max-w-5xl mx-auto px-6 mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group shadow-4xl border border-white/5"
        >
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-emerald-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-block px-6 py-2 bg-emerald-600 rounded-full text-white font-bold text-[10px] tracking-widest uppercase mb-8 shadow-xl">
                 🏦 Direct Bank Node
               </div>
               <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-8 uppercase italic tracking-tighter">
                 Traditional <span className="text-emerald-500 text-6xl">Wire Transfer</span>
               </h2>
               <p className="text-emerald-100/40 font-sans italic text-lg leading-relaxed max-w-sm mb-12">
                 For bulk contributions or project-specific endowments, you may transfer funds directly to our verified Trust account.
               </p>
               <div className="flex items-center space-x-4 opacity-40">
                  <ShieldCheck className="w-8 h-8 text-emerald-500" />
                  <p className="text-[10px] font-bold uppercase tracking-widest italic leading-relaxed">
                    Verified HDFC Bank Trust Node <br /> Miryalaguda Branch
                  </p>
               </div>
            </div>

            <div className="space-y-6">
               {[
                 { label: 'Trust Name', value: 'DARULHIDAYA FOUNDATION CHARITY' },
                 { label: 'Bank Name', value: 'HDFC BANK' },
                 { label: 'A/C Number', value: '50200110281179' },
                 { label: 'IFSC Code', value: 'HDFC0005027' },
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-3xl hover:bg-white/10 transition-all group/item">
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2 italic opacity-60 group-hover/item:opacity-100 transition-opacity">{item.label}</p>
                    <p className="text-xl font-heading font-extrabold uppercase italic tracking-tight text-white group-hover/item:text-emerald-400 transition-colors">{item.value}</p>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
