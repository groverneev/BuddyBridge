-- BuddyBridge Database Schema
-- Run this in your Supabase SQL editor to set up the tables.

-- Volunteers table
create table volunteers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  photo_url text,
  bio text not null,
  categories text[] not null default '{}',
  availability jsonb not null default '{}',
  email text not null,
  phone text,
  created_at timestamptz not null default now()
);

-- Help requests table
create table help_requests (
  id uuid primary key default gen_random_uuid(),
  volunteer_id uuid not null references volunteers(id),
  senior_name text not null,
  senior_phone text not null,
  senior_email text,
  senior_address text not null,
  description text not null,
  preferred_date text not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed')),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table volunteers enable row level security;
alter table help_requests enable row level security;

-- Public read access for volunteers (anyone can browse)
create policy "Volunteers are publicly readable"
  on volunteers for select
  using (true);

-- Allow inserts from server (service role key bypasses RLS)
-- No client-side insert policies needed since we use service role key

-- Create storage bucket for volunteer photos
insert into storage.buckets (id, name, public)
values ('volunteer-photos', 'volunteer-photos', true)
on conflict do nothing;

-- Allow public read access to volunteer photos
create policy "Volunteer photos are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'volunteer-photos');

-- Allow uploads to volunteer photos bucket (via service role)
create policy "Allow volunteer photo uploads"
  on storage.objects for insert
  with check (bucket_id = 'volunteer-photos');
