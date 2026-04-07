'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, ArrowRight, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ScannerPortal() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // 🛡️ SECURITY: Guarding the Secure QR Node from unauthorized access
    const handshakeToken = sessionStorage.getItem('donor_authenticated');
    if (!handshakeToken) {
       router.push('/donate');
    } else {
       setIsAuthenticated(true);
       setAmount(sessionStorage.getItem('donation_amount') || '0');
       // Optional: Clear token after access to prevent multi-use if desired
       // sessionStorage.removeItem('donor_authenticated');
    }
  }, [router]);

  if (!isAuthenticated) return (
     <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full" />
     </div>
  );

  return (
    <div className="pt-40 pb-24 bg-slate-950 min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 bg-emerald-600/10 rounded-full blur-[200px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          
          <div className="inline-flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-3xl shadow-4xl mb-6">
             <div className="p-6 bg-emerald-600 rounded-2xl shadow-xl mb-6">
                <ShieldCheck className="w-10 h-10 text-white" />
             </div>
             <div>
                <h2 className="text-3xl font-heading font-extrabold text-white uppercase italic tracking-tighter mb-4">Secure Donation <span className="text-emerald-500">Node</span></h2>
                 <div className="px-6 py-4 bg-red-600/10 rounded-2xl border border-red-600/20 text-red-500 font-bold text-xs tracking-widest uppercase italic shadow-sm">
                    {amount !== '0' ? `Contributing ₹${amount}` : 'Gateway Status: Maintenance'}
                    <p className="mt-2 text-[10px] opacity-80 leading-relaxed">Payment gateway not working. Please scan the QR below to complete your donation.</p>
                 </div>
             </div>
          </div>

          <div className="relative group max-w-[420px] mx-auto p-12 bg-white rounded-[5rem] shadow-4xl border-8 border-emerald-900/10 relative overflow-hidden">
             {/* Scanner Animation */}
             <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-1 bg-emerald-500/30 z-20 pointer-events-none"
             />

             <div className="relative z-10 aspect-square overflow-hidden rounded-[3rem] bg-slate-50 flex items-center justify-center p-8">
                <img 
                  src="/payment_scanner.jpeg" 
                  alt="Foundation QR Scanner" 
                  className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                />
             </div>
             
             <div className="mt-8 flex items-center justify-center space-x-4">
                <Zap className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">All UPI Apps Supported</span>
             </div>
          </div>

          <p className="text-white/40 font-sans italic text-lg max-w-xl mx-auto leading-relaxed">
            Your support changes lives. Please share a screenshot of the transaction with our helpline for your official receipt.
          </p>

          <div className="flex items-center justify-center pt-10">
             <Link href="/donate" className="px-16 py-8 bg-emerald-600 text-white rounded-full font-extrabold shadow-4xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center space-x-6 uppercase tracking-widest italic group">
                <span>Go Back to Donate</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>

          {/* Verification Badges */}
          <div className="flex items-center justify-center space-x-12 opacity-30 pt-16 border-t border-white/5">
             <p className="text-[10px] font-bold text-white uppercase tracking-widest italic tracking-tighter">Audit Verified</p>
             <p className="text-[10px] font-bold text-white uppercase tracking-widest italic tracking-tighter">End-to-End Traced</p>
             <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500" />
          </div>

        </motion.div>
      </div>
    </div>
  );
}
