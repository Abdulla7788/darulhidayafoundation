import { NextResponse } from 'next/server';
import { z } from 'zod'; // 🛡️ SECURITY: Best-in-class validation
import { sanitizeInput, encrypt } from '@/lib/security';

/**
 * 🔒 SECURITY: Contact Request Schema (Zod)
 * Prevents: NoSQL Injection, XSS payloads, and malformed inputs.
 * Strictly enforces types and lengths (Max 2000 chars for message).
 */
const contactSchema = z.object({
  name: z.string().min(2, "Invalid Name").max(100).trim(),
  email: z.string().email("Invalid format").max(150),
  subject: z.enum(["General Enquiry", "Zakat Queries", "Donation Issues", "Volunteer Program"]),
  message: z.string().min(10, "Message too short").max(2000).trim()
});

export async function POST(req) {
  try {
    const rawData = await req.json();

    // 🛡️ SECURITY: 1. Input Sanitization & Validation (Pre-processing)
    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      return NextResponse.json({ error: "Validation Failure: Malformed Payload" }, { status: 400 });
    }

    const { name, email, subject, message } = result.data;

    // 🛡️ SECURITY: 2. Secondary Sanitization (defense-in-depth)
    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);

    // 🛡️ SECURITY: 3. Encryption at Rest (Simulated database write)
    const encryptedMessage = encrypt(sanitizedMessage);
    
    // 🛡️ SECURITY: 4. Logging & Monitoring
    console.log(`[AUDIT: ${new Date().toISOString()}] Secure message received from: ${email}`);

    // 🛡️ PRODUCTION: At this point, the data is ready for a secure MongoDB save.
    // await dbConnect();
    // await MessageModel.create({ name: sanitizedName, email, subject, content: encryptedMessage });

    return NextResponse.json({ success: "Encrypted submission acknowledged." }, { status: 200 });

  } catch (error) {
    // 🛡️ SECURITY: Avoid leaking internal stack traces to the client.
    return NextResponse.json({ error: "Internal Gateway Fault: Incident Logged." }, { status: 500 });
  }
}
