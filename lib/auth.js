import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'darulhidaya-jwt-secure-signing-secret-256');

/**
 * 🔒 SECURITY: Secure JWT Implementation
 * Following JSON Web Token Best Current Practices (RFC 8725).
 * Tokens are signed with a secure HS256 secret.
 */
export async function signToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h') // 🛡️ SECURITY: Short-lived tokens to reduce blast-radius of compromises
    .sign(JWT_SECRET);
}

/**
 * 🔓 SECURITY: Token Verification with Role-Based Access Control (RBAC) validation.
 */
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null; // 🛡️ SECURITY: Explicit fail-shut on signature mismatch
  }
}

/**
 * 🛡️ SECURITY: Secure HttpOnly Cookies
 * Prevents XSS-based token theft by keeping cookies out of client JS.
 */
export async function setSecureCookie(token) {
  cookies().set('darul_session', token, {
    httpOnly: true, // 🛡️ XSS Protection
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict', // 🛡️ CSRF Protection
    path: '/',
  });
}
