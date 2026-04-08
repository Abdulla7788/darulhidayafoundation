'use client';
import React from 'react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/auth/login');
    } catch (err) {
      console.error('Logout failed');
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="inline-flex items-center gap-2 px-6 py-2 bg-red-50 text-red-600 rounded-full border border-red-100 font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm"
    >
      <LogOut className="w-3 h-3" />
      Log Out
    </button>
  );
}
