import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // 🛡️ SECURITY: HSTS (HTTP Strict Transport Security)
  // Ensure the browser only connects via HTTPS for 1 year
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // 🛡️ SECURITY: XSS Protection
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // 🛡️ SECURITY: Prevent Framing
  response.headers.set('X-Frame-Options', 'DENY');

  // 🛡️ SECURITY: Content Type Sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // 🛡️ SECURITY: Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: '/(.*)', // Apply security to ALL routes
};
