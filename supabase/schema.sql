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

-- Site-managed images (pilot gallery, homepage hero, future marketing photos)
create table site_images (
  id uuid primary key default gen_random_uuid(),
  bucket text not null default 'site-images',
  path text not null unique,
  section text not null,
  alt_text text,
  caption text,
  width integer,
  height integer,
  sort_order integer not null default 0,
  is_featured boolean not null default false,
  created_at timestamptz not null default now(),
  constraint site_images_section_check
    check (section in ('pilot', 'homepage'))
);

-- Enable Row Level Security
alter table volunteers enable row level security;
alter table help_requests enable row level security;
alter table site_images enable row level security;

-- Public read access for volunteers (anyone can browse)
create policy "Volunteers are publicly readable"
  on volunteers for select
  using (true);

create policy "Site images are publicly readable"
  on site_images for select
  using (true);

-- Allow inserts from server (service role key bypasses RLS)
-- No client-side insert policies needed since we use service role key

-- Create storage bucket for volunteer photos
insert into storage.buckets (id, name, public)
values ('volunteer-photos', 'volunteer-photos', true)
on conflict do nothing;

insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true)
on conflict do nothing;

-- Allow public read access to volunteer photos
create policy "Volunteer photos are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'volunteer-photos');

create policy "Site images are publicly accessible"
  on storage.objects for select
  using (bucket_id = 'site-images');

-- Allow uploads to volunteer photos bucket (via service role)
create policy "Allow volunteer photo uploads"
  on storage.objects for insert
  with check (bucket_id = 'volunteer-photos');

create policy "Allow site image uploads"
  on storage.objects for insert
  with check (bucket_id = 'site-images');
