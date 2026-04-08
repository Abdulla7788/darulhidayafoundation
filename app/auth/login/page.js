'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, ChevronRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email.trim(), 
          password: password.trim() 
        })
      });

      const data = await res.json();

      if (data.success) {
        router.push('/admin');
      } else {
        setError(data.error || 'Identity verification failed.');
      }
    } catch (err) {
      setError('Communication with secure node failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-emerald-500 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500 rounded-full blur-[150px]" />
        </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-4xl">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 mb-8">
                    <ShieldCheck className="w-10 h-10 text-emerald-500" />
                </div>
                <h1 className="text-4xl font-heading font-extrabold text-white italic uppercase tracking-tighter mb-2">Secure Gate</h1>
                <p className="text-emerald-500/50 font-bold tracking-[0.3em] text-[10px] uppercase">Administrative Authentication</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-4">Authorized Identifier</label>
                    <div className="relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input 
                            required
                            type="text" 
                            placeholder="darulhidayafoundation@mt"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans italic"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-4">Encrypted Key</label>
                    <div className="relative">
                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input 
                            required
                            type="password" 
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans italic"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && (
                    <motion.p 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-bold uppercase tracking-widest text-red-500 text-center"
                    >
                        {error}
                    </motion.p>
                )}

                <button 
                    disabled={loading}
                    className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/20"
                >
                    {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            Open Secure Node
                            <ChevronRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </div>

        <p className="text-center mt-12 text-white/20 text-[10px] uppercase font-bold tracking-[0.5em]">
            DARUL HIDAYA FOUNDATION • CYBER CORE
        </p>
      </motion.div>
    </div>
  );
}
