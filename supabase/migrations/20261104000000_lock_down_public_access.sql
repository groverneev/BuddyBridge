-- Lock down public (anon key) access.
-- The app only talks to Supabase with the service role key, which bypasses RLS
-- and column privileges, so none of this affects the site itself.

-- 1. Anyone with the anon key could upload files to both buckets.
drop policy if exists "Allow volunteer photo uploads" on storage.objects;
drop policy if exists "Allow site image uploads" on storage.objects;

-- 2. Volunteer contact details (teens' emails and phone numbers) were publicly
--    readable through the REST API. Keep profiles public, hide contact columns.
revoke select on table public.volunteers from anon, authenticated;
grant select (id, name, photo_url, bio, categories, availability, created_at)
  on table public.volunteers to anon, authenticated;
