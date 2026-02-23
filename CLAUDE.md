# CLAUDE.md — BuddyBridge

## Project Overview

BuddyBridge ([buddybridge.us](https://buddybridge.us)) is a marketplace connecting seniors with teen volunteers for everyday help. It's an MVP with 3-5 volunteers where admin manually coordinates requests via email.

## Tech Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Supabase (Postgres + file storage for volunteer photos)
- Resend (email notifications to admin)
- Hosted on Vercel

## Key Architecture Decisions

- **No auth for seniors** — zero friction for elderly users. They just browse and submit a form.
- **Service role key on server only** — all Supabase writes go through server actions, never client-side.
- **Lazy client initialization** — `lib/supabase.ts` and `lib/resend.ts` use `getSupabase()` / `getResend()` to avoid crashes when env vars are missing at build time.
- **Server components + client wrappers** — browse page fetches data server-side, passes to a client component for filtering. Profile page is server-rendered, with a client component for the modal.
- **`force-dynamic`** on `/helpers` and `/helpers/[id]` to prevent static prerendering (needs live Supabase data).
- **Body size limit** set to 30mb in `next.config.ts` under `serverActions` (top-level, not `experimental`) for photo uploads. In Next.js 15+, `serverActions` is no longer under `experimental`.
- **Turbopack root** explicitly set to `__dirname` in `next.config.ts` — there is a stray `package-lock.json` at `/Users/neevgrover/` that causes Next.js to misdetect the workspace root, breaking Tailwind CSS resolution. Do not remove `turbopack.root`.

## Database

Two tables in Supabase — see `supabase/schema.sql` for full schema:
- `volunteers` — profiles with categories (text[]) and availability (jsonb)
- `help_requests` — includes senior_address, links to volunteer via FK

RLS is enabled. Volunteers are publicly readable. Writes use service role key (bypasses RLS).

Storage bucket `volunteer-photos` is public for reads.

## File Layout

- `app/` — all routes and server actions
- `components/` — shared UI components (Header, Footer, VolunteerCard, CategoryFilter, RequestHelpModal)
- `lib/` — types, constants, Supabase/Resend clients
- `supabase/` — SQL schema
- `public/` — static assets (neev.png creator headshot, meher.png volunteer headshot, icon.svg favicon)

## Design

- **Color scheme:** Emerald/teal gradient (inspired by earthdayartcontest.vercel.app). Primary color is `#047857`. Defined as CSS custom properties in `app/globals.css`.
- **Accessibility:** 18px base font, 48px min tap targets, high contrast, no hover-only interactions.
- **Mobile-first:** Hamburger nav, horizontally scrollable category filters, bottom-sheet modal, stacked availability view.

## Service Categories

Defined in `lib/categories.ts`: Tech Help, Household Tasks, Errands, Companionship, Paperwork & Forms. No transportation.

## Common Tasks

```bash
npm run dev          # Start dev server (turbopack)
npm run build        # Production build
npm run start        # Start production server
```

## Important Notes

- When making significant changes to the codebase, always update both `CLAUDE.md` and `README.md` to reflect the current state of the project.
- The Resend SDK returns `{ data, error }` and does NOT throw — always check the error field.
- Env vars are in `.env.local` (not committed). See `.env.example` for the template.
- Admin email is the single point of coordination — all request and signup notifications go there.
