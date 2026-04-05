'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Globe, Home, ShieldCheck, Image as ImageIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Gallery', path: '/gallery', icon: ImageIcon },
    { title: 'Campaigns', path: '/causes', icon: Heart },
    { title: 'Donate', path: '/donate', icon: ShieldCheck },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 border-b border-white/10 ${isScrolled ? 'bg-white/70 backdrop-blur-2xl shadow-2xl py-2' : 'bg-white/30 backdrop-blur-2xl py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-600/20 bg-white shadow-xl transition-all group-hover:rotate-6">
            <img src="/foundationlogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block">
            <p className="text-xl font-heading font-extrabold tracking-tight italic uppercase leading-none">DARULHIDAYA</p>
            <p className="text-[10px] font-sans font-bold text-emerald-700 uppercase tracking-widest mt-1">Foundation</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-12">
          <Link href="/" className="p-3 bg-white/20 rounded-xl hover:bg-emerald-600 transition-all group/home shadow-xl border border-white/30">
            <Home className="w-5 h-5 text-slate-800 group-hover/home:text-white transition-colors" />
          </Link>

          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.path} 
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-emerald-700 flex items-center space-x-2 ${pathname === link.path ? 'text-emerald-700' : 'text-slate-600'}`}
            >
              {link.icon && <link.icon className={`w-3.5 h-3.5 ${link.title === 'Campaigns' ? 'fill-current text-rose-500' : ''}`} />}
              <span>{link.title}</span>
              {pathname === link.path && <motion.div layoutId="nav-underline" className="h-0.5 bg-emerald-700 mt-1" />}
            </Link>
          ))}

          <Link href="/volunteer-portal" className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-emerald-800 shadow-xl transition-all border border-slate-700">
            Join as a Volunteer
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }} 
            className="fixed inset-0 w-full h-screen bg-emerald-950 z-[100] flex flex-col items-center justify-center lg:hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-900/50 to-transparent" />

            {/* Menu Header (Logo & Close) */}
            <div className="absolute top-0 left-0 w-full px-8 h-28 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                 <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 bg-white">
                   <img src="/foundationlogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-white font-heading font-extrabold text-xl leading-none uppercase italic">Darulhidaya</p>
                    <p className="text-emerald-400 font-sans font-bold text-[8px] uppercase tracking-widest mt-1">Foundation</p>
                 </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative"
                  >
                    <span className="text-5xl md:text-6xl font-heading font-extrabold uppercase italic text-white/90 transition-all hover:text-emerald-400 tracking-tight">
                      {link.title}
                    </span>
                    <motion.div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500 absolute -bottom-2" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10"
              >
                <Link 
                  href="/volunteer-portal" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-emerald-600 text-white px-12 py-6 rounded-full font-heading font-extrabold text-lg uppercase italic tracking-widest shadow-2xl hover:bg-emerald-500 transition-all active:scale-95 border border-emerald-400/30"
                >
                  Join as Volunteer
                </Link>
              </motion.div>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-12 text-emerald-500/30 font-sans font-bold text-[10px] uppercase tracking-[0.5em]">
              Establishing the Legacy
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
