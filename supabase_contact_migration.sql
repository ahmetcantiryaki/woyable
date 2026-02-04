-- Create a table for contact form messages
create table if not exists contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  subject text,
  service text,
  message text not null,
  status text default 'new' -- 'new', 'read', 'archived'
);

-- Enable RLS
alter table contact_messages enable row level security;

-- Allow inserts from anyone (public form)
create policy "Allow inserts for everyone"
on contact_messages for insert
with check (true);

-- Allow select/update only for authenticated users (admins)
create policy "Allow access for admins"
on contact_messages for select
using (auth.role() = 'authenticated');
