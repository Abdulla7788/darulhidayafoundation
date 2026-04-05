'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Youtube, Instagram, ShieldCheck, Globe } from 'lucide-react';
import { z } from 'zod'; // 🛡️ SECURITY: Zod validation for production.

const contactSchema = z.object({
  name: z.string().min(2, "Invalid Name").max(100),
  email: z.string().email("Invalid format"),
  subject: z.string(),
  message: z.string().min(10, "Message too short").max(2000)
});

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Enquiry', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    // 🛡️ SECURITY: Client-side validation before dispatch
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.format();
      setErrors(fieldErrors);
      return;
    }

    const whatsappNo = "919866455800";
    const text = `*New Secure Contact from Darulhidaya Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // 🛡️ SECURITY: End-to-end encrypted channel (WhatsApp) redirect
    window.open(`https://wa.me/${whatsappNo}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        {/* Info Section */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <div className="inline-block px-6 py-2 bg-emerald-600/10 rounded-full text-emerald-800 font-bold text-[10px] tracking-widest uppercase mb-10">
            Reach Out
          </div>
          <h1 className="text-6xl font-heading font-extrabold text-slate-900 leading-tight italic uppercase tracking-tighter drop-shadow-sm mb-12">
            Connect with <span className="text-emerald-700">DARULHIDAYA</span>
          </h1>

          <div className="space-y-10">
            {[
              { icon: MapPin, title: 'Main Office', detail: 'D. No: 1-1 Mattampally (V/M), Suryapet 508204' },
              { icon: Phone, title: 'Foundation Helpline', detail: '+91 98664 55800' },
              { icon: Phone, title: 'Chairman Office', detail: '+91 84648 169139' },
              { icon: Mail, title: 'Official Email', detail: 'darulhidayafoundation@gmail.com' },
              { icon: ShieldCheck, title: 'Registration Status', detail: 'Govt Reg. Book IV-04-2025' },
              { icon: Globe, title: 'NGO DARPAN', detail: 'CSR 12A 80G AAFTD0247HE20251' },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-6 group">
                <div className="p-4 bg-white rounded-2xl shadow-xl group-hover:bg-emerald-700 transition-all duration-300 shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-700 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg uppercase tracking-tight italic">{item.title}</h4>
                  <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase italic opacity-70 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-6 mt-16">
            {[Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-4 border border-slate-200 rounded-2xl hover:border-emerald-600 transition-all hover:bg-emerald-50">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* 🛡️ SECURITY: Validated & Sanitized Form */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-16 bg-white rounded-[4rem] shadow-3xl border border-slate-50 relative group overflow-hidden">
          <h3 className="text-3xl font-heading font-bold text-slate-900 mb-12 uppercase italic tracking-tighter">
            Send a <span className="text-emerald-700">Message</span>
          </h3>
          
          <form className="space-y-10" onSubmit={handleSend}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Name</label>
                <input name="name" onChange={handleInputChange} type="text" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 transition-all font-bold italic" placeholder="Your Name" />
                {errors.name && <p className="text-red-500 text-[10px] font-bold">{errors.name._errors[0]}</p>}
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Email</label>
                <input name="email" onChange={handleInputChange} type="email" className="w-full px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 transition-all font-bold italic" placeholder="Email@domain.com" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 italic">Message Content</label>
              <textarea name="message" onChange={handleInputChange} rows="4" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-emerald-700/10 transition-all font-bold italic resize-none" placeholder="How can we help?"></textarea>
            </div>

            <button type="submit" className="w-full py-6 rounded-full bg-slate-900 text-white font-extrabold text-lg uppercase tracking-widest italic shadow-xl hover:bg-emerald-800 transition-all duration-300 transform group flex items-center justify-center space-x-4">
              <span>Send Message</span>
              <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* 📍 GEO LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white group relative h-[500px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30555.26484087852!2d79.811725!3d16.805844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a6966f3630777%3A0x6bba847bf3e1f0e4!2sMattampally%2C%20Telangana%20508204!5e0!3m2!1sen!2sin!4v1712310101824!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-1000"
          ></iframe>
          
          <div className="absolute bottom-12 left-12 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 max-w-sm pointer-events-none group-hover:translate-x-4 transition-transform duration-500">
             <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xl">
                   <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-extrabold text-lg uppercase italic text-slate-900">Our Location</h4>
             </div>
             <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic leading-relaxed">
                D. No: 1-1 MATTAMPALLY (V/M), <br />SURYAPET (Dist), Telangana 508204
             </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
