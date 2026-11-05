# AGENTS.md — BuddyBridge

## Project Overview

BuddyBridge ([buddybridge.us](https://buddybridge.us)) is a marketplace connecting seniors with teen volunteers for everyday help. It's an MVP with 3-5 volunteers where admin manually coordinates requests via email.

## Tech Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Supabase (Postgres + file storage for volunteer photos and site gallery images)
- Resend (email notifications to admin)
- Hosted on Vercel (Vercel Analytics + Speed Insights)
- Bun as package manager (`bun install`, `bun dev`, `bun run build`); Next.js still runs on Node
- Zod validates all server action input (`lib/validation.ts`)
- React Email templates for notifications (`emails/`, preview with `bun run email`)
- Cloudflare Turnstile spam check on public forms (skipped when keys are unset)
- Sentry error tracking (disabled when DSN unset; never collects request bodies — they contain seniors' addresses)
- Typed Supabase client from `lib/database.types.ts` (regenerate with `bun run gen:types`)

## Database

Three tables in Supabase — see `supabase/schema.sql` for full schema:
- `volunteers` — profiles with categories (text[]) and availability (jsonb)
- `help_requests` — includes senior_address, links to volunteer via FK
- `site_images` — metadata for pilot gallery / homepage photos stored in Supabase Storage

RLS is enabled. Volunteer profiles are publicly readable, but `email`/`phone` are hidden from the anon role; only select `PUBLIC_VOLUNTEER_COLUMNS` for anything sent to the browser. Writes use service role key (bypasses RLS).

Storage buckets `volunteer-photos` and `site-images` are public for reads.
