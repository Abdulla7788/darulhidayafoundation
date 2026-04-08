import { NextResponse } from 'next/server';
import { signToken, setSecureCookie } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // 🛡️ SECURITY: Administrative credentials for gallery management
    if (email?.trim().toLowerCase() === 'darulhidayafoundation@mt' && password?.trim() === 'darulhidaya@mt123') {
      const token = await signToken({ 
        email, 
        role: 'admin',
        id: 'admin_001'
      });

      await setSecureCookie(token);

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
