'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Youtube, Instagram, ArrowUpRight, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010409] text-slate-400 pt-32 pb-16 overflow-hidden relative border-t border-emerald-900/20">
      {/* 🛡️ PREMIUM THEME ACCENTS */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-600/5 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-emerald-900/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 relative z-10">
        {/* Branding */}
        <div className="space-y-12">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-emerald-600/20 overflow-hidden shadow-2xl transition-transform hover:-rotate-6">
              <img src="/foundationlogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-2xl font-heading font-extrabold text-white tracking-tight uppercase italic leading-none">DARULHIDAYA</p>
              <p className="text-[10px] font-sans font-bold text-emerald-500 uppercase tracking-widest mt-1">Foundation</p>
            </div>
          </div>
          <p className="text-lg italic leading-relaxed font-heading font-bold text-slate-500/80">
            "The best of people are those that bring most benefit to the rest of mankind." 
            <br />
            <span className="text-emerald-500 font-heading font-extrabold mt-6 block">— Prophet Muhammad (PBUH)</span>
          </p>
          <div className="flex items-center space-x-4">
            {[
              { Icon: Instagram, url: 'https://www.instagram.com/darulhidayafoundation?igsh=a3BqejR0NDJnejY=' },
              { Icon: Youtube, url: 'https://youtube.com/@darulhidayafoundation?si=WzRgX1CSYjXey2xI' },
            ].map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-4 border border-emerald-900/30 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-500 bg-emerald-950/20 backdrop-blur-xl group">
                <social.Icon className="w-5 h-5 mx-auto group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Nodes */}
        <div>
           <h4 className="text-white font-heading font-extrabold text-2xl mb-12 uppercase tracking-tighter italic">Strategic Nodes</h4>
           <ul className="space-y-6">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Campaigns', path: '/causes' },
                { name: 'Volunteer Portal', path: '/volunteer-portal' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Privacy Policy', path: '/policy' },
              ].map((link) => (
                <li key={link.name}>
                   <Link href={link.path} className="text-sm font-heading font-extrabold uppercase italic tracking-widest text-slate-400 hover:text-emerald-400 transition-all flex items-center group">
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                   </Link>
                </li>
              ))}
           </ul>
        </div>

        {/* Contact Matrix */}
        <div className="space-y-12">
           <h4 className="text-white font-heading font-extrabold text-2xl mb-12 uppercase tracking-tighter italic">Secure Contact</h4>
           <ul className="space-y-10">
              <li className="flex items-start space-x-6 group">
                 <div className="w-10 h-10 rounded-full bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <MapPin className="w-5 h-5 text-emerald-500 group-hover:text-white" />
                 </div>
                 <span className="text-xs font-heading font-bold italic leading-relaxed text-slate-400 mt-2">D. No: 1-1 MATTAMPALLY (V/M), SURYAPET (Dist) 508204</span>
              </li>
              <li className="flex items-center space-x-6 group">
                 <div className="w-10 h-10 rounded-full bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-500 group-hover:text-white" />
                 </div>
                 <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-white italic">+91 98664 55800</span>
              </li>
              <li className="flex items-center space-x-6 group">
                 <div className="w-10 h-10 rounded-full bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-500 group-hover:text-white" />
                 </div>
                 <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-emerald-500 italic">Chairman: +91 84648 16913</span>
              </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase italic text-slate-600">
        <p>© {currentYear} DARULHIDAYA FOUNDATION. ALL ASSETS SECURED.</p>
        <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 opacity-60">
           <p>GOVT REG: BOOK IV-04-2025</p>
           <p>NGO DARPAN: CSR 12A 80G AAFTD0247HE20251</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
