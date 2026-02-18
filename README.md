# BuddyBridge

**[buddybridge.us](https://buddybridge.us)**

A marketplace-style platform connecting seniors with trusted teen volunteers for everyday help — tech setup, household tasks, companionship, and more. Built as an MVP with manual admin coordination.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (Postgres + Storage)
- **Email:** Resend
- **Hosting:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

- Create a project at [supabase.com](https://supabase.com)
- Run `supabase/schema.sql` in the SQL Editor to create tables and storage bucket

### 3. Set up Resend

- Create an account at [resend.com](https://resend.com)
- Generate an API key

### 4. Configure environment

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key
- `RESEND_API_KEY` — Resend API key
- `ADMIN_EMAIL` — Email to receive notifications

### 5. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx                        # Landing page
  about/page.tsx                  # About page
  helpers/
    page.tsx                      # Browse volunteers (server component)
    helpers-client.tsx            # Client-side filtering
    [id]/
      page.tsx                    # Volunteer profile
      profile-client.tsx          # Request help button + modal trigger
  volunteer/signup/page.tsx       # Volunteer registration form
  request/success/page.tsx        # Request confirmation
  actions/
    request-help.ts               # Server action: submit help request
    volunteer-signup.ts            # Server action: register volunteer
components/
  Header.tsx                      # Navbar with mobile hamburger menu
  Footer.tsx                      # Footer with contact info
  VolunteerCard.tsx               # Volunteer card for browse grid
  CategoryFilter.tsx              # Category filter pills
  RequestHelpModal.tsx            # Help request form modal
lib/
  supabase.ts                     # Supabase client (lazy init)
  resend.ts                       # Resend client (lazy init)
  categories.ts                   # Service categories constant
  types.ts                        # TypeScript types
supabase/
  schema.sql                      # Database schema
```

## How It Works

1. **Seniors** browse volunteer profiles at `/helpers`, filter by category, and submit a help request
2. **Admin** receives an email notification with request details and manually coordinates with the volunteer
3. **Volunteers** sign up at `/volunteer/signup` with their skills, availability, and a profile photo

## Database Schema

**`volunteers`** — name, email, phone, photo_url, bio, categories (text[]), availability (jsonb)

**`help_requests`** — volunteer_id (FK), senior_name, senior_phone, senior_email, senior_address, description, preferred_date, status

## Service Categories

- Tech Help
- Household Tasks
- Errands
- Companionship
- Paperwork & Forms
