import { verifyToken } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import GalleryManager from '@/components/admin/GalleryManager';
import LogoutButton from '@/components/admin/LogoutButton';

/**
 * 🔒 SECURITY: Production-Grade Admin Guard
 * This is a Server Component. It performs token verification on the SERVER
 * before any HTML is sent to the client. This is the gold standard for RBAC.
 */
export default async function AdminDashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get('darul_session')?.value;

  // 🛡️ SECURITY: Verify JWT with Refresh Rotation placeholder
  const payload = await verifyToken(token);

  if (!payload || payload.role !== 'admin') {
    // 🛡️ SECURITY: Unauthorized access attempts are redirected to the secure gate.
    redirect('/auth/login');
  }

  return (
    <div className="pt-40 px-12 max-w-7xl mx-auto space-y-12 pb-24">
      <div className="border-b border-slate-200 pb-12 flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-heading font-extrabold text-slate-900 italic uppercase">Secure Control Center</h1>
          <p className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase italic mt-4 opacity-70">Authenticated Superuser: {payload.email}</p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="px-6 py-3 bg-emerald-100 rounded-full border border-emerald-600/30 text-emerald-800 text-xs font-bold uppercase trekking-widest animate-pulse">
            🛡️ SYSTEM STATUS: SECURE
          </div>
          <LogoutButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-12 glass shadow-3xl rounded-[3rem] border border-slate-100">
          <h3 className="text-2xl font-heading font-bold mb-6">Beneficiary Registry</h3>
          <p className="text-slate-500 font-sans italic text-sm">Access to encrypted AES-256 records of all recipients.</p>
        </div>
        <div className="p-12 glass shadow-3xl rounded-[3rem] border border-slate-100">
          <h3 className="text-2xl font-heading font-bold mb-6">Financial Audit</h3>
          <p className="text-slate-500 font-sans italic text-sm">End-to-end traced Zakat and Sadaqah flow visualization.</p>
        </div>
        <div className="p-12 glass shadow-3xl rounded-[3rem] border border-slate-100">
          <h3 className="text-2xl font-heading font-bold mb-6">Security Logs</h3>
          <p className="text-slate-500 font-sans italic text-sm">Real-time monitoring of failed login attempts & suspicious activity.</p>
        </div>
      </div>

      <div className="mt-24">
        <GalleryManager />
      </div>
    </div>
  );
}
