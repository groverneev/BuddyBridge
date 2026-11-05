"use client";

import { Turnstile } from "@marsidev/react-turnstile";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/**
 * Cloudflare Turnstile widget. Adds a `cf-turnstile-response` field to the
 * surrounding form. Renders nothing when no site key is configured.
 */
export default function SpamCheck() {
  if (!siteKey) return null;
  return <Turnstile siteKey={siteKey} options={{ size: "flexible", theme: "light" }} />;
}
