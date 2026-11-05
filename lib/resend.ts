import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

/** Sender for admin notifications. Set RESEND_FROM once buddybridge.us is verified in Resend. */
export const ADMIN_FROM = process.env.RESEND_FROM ?? "BuddyBridge <onboarding@resend.dev>";
