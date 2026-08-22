insert into storage.buckets (id, name, public)
values ('profile-images', 'profile-images', true)
on conflict (id) do update
set public = excluded.public;

alter table storage.objects enable row level security;

drop policy if exists "profile images are publicly readable" on storage.objects;
create policy "profile images are publicly readable"
on storage.objects
for select
using (bucket_id = 'profile-images');

drop policy if exists "authenticated users can upload their own images" on storage.objects;
create policy "authenticated users can upload their own images"
on storage.objects
for insert
with check (
  bucket_id = 'profile-images'
  and auth.role() = 'authenticated'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists "authenticated users can update their own images" on storage.objects;
create policy "authenticated users can update their own images"
on storage.objects
for update
using (
  bucket_id = 'profile-images'
  and auth.role() = 'authenticated'
  and split_part(name, '/', 1) = auth.uid()::text
)
with check (
  bucket_id = 'profile-images'
  and auth.role() = 'authenticated'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists "authenticated users can delete their own images" on storage.objects;
create policy "authenticated users can delete their own images"
on storage.objects
for delete
using (
  bucket_id = 'profile-images'
  and auth.role() = 'authenticated'
  and split_part(name, '/', 1) = auth.uid()::text
);

