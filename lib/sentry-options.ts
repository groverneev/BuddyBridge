import type * as Sentry from "@sentry/nextjs";

// Shared Sentry settings. Form submissions carry seniors' names, phone numbers
// and home addresses, so the SDK must never collect request data or user info.
export const sentryOptions: Parameters<typeof Sentry.init>[0] = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: false,
    httpBodies: [],
    urlQueryParams: false,
  },
};
