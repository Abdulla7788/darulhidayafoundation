'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
    const whatsappNo = "919866455800";
    const chairmanNo = "9184648169139";

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 flex flex-col space-y-3 md:space-y-4">
            {/* WhatsApp Floating Button */}
            <motion.a
                href={`https://wa.me/${whatsappNo}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 shadow-4xl rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all group relative border-2 md:border-4 border-white/20 backdrop-blur-xl"
            >
                <MessageCircle className="w-5 h-5 md:w-8 md:h-8 fill-white/20" />
                <span className="absolute right-[120%] top-1/2 -translate-y-1/2 px-4 py-2 bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl hidden md:block">
                    Chat on WhatsApp
                </span>
                <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-emerald-400 rounded-full animate-ping pointer-events-none" />
            </motion.a>

            {/* Chairman Calling Button */}
            <motion.a
                href={`tel:+${chairmanNo}`}
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 shadow-4xl rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-all group relative border-2 md:border-4 border-white/10"
            >
                <Phone className="w-5 h-5 md:w-7 md:h-7" />
                <span className="absolute right-[120%] top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-800 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl hidden md:block">
                    Call Chairman office
                </span>
            </motion.a>
        </div>
    );
};

export default FloatingContact;
