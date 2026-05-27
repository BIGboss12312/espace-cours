-- ================================================================
-- 🗄️  BASE DE DONNÉES — ESPACE COURS EN LIGNE
-- ================================================================
-- Copiez TOUT ce code dans :
-- Supabase Dashboard → votre projet → SQL Editor → New Query
-- Puis cliquez "Run" (▶)
-- ================================================================


-- ================================================================
-- 1. TABLE : live_status
--    Le professeur active/désactive le direct depuis le site
-- ================================================================
create table if not exists public.live_status (
  id          integer primary key default 1,
  is_active   boolean   not null default false,
  youtube_id  text      not null default '',
  topic       text      not null default '',
  type        text      not null default 'mnadarat',
  updated_at  timestamp with time zone default now()
);

-- Insérer la ligne initiale (une seule ligne = un seul live à la fois)
insert into public.live_status (id, is_active, youtube_id, topic, type)
values (1, false, '', '', 'mnadarat')
on conflict (id) do nothing;

-- Activer la sécurité par ligne (RLS)
alter table public.live_status enable row level security;

-- Tous les utilisateurs connectés peuvent LIRE le statut live
create policy "Lire le statut live"
  on public.live_status for select
  to authenticated
  using (true);

-- Tous les utilisateurs connectés peuvent MODIFIER le statut live
-- (En production, vous pouvez restreindre aux profs uniquement)
create policy "Modifier le statut live"
  on public.live_status for update
  to authenticated
  using (true)
  with check (true);


-- ================================================================
-- 2. TABLE : videos
--    Stocker vos vidéos de cours (en plus de config.js)
-- ================================================================
create table if not exists public.videos (
  id           serial primary key,
  title        text    not null,
  type         text    not null
                check (type in ('mnadarat', 'imtihane', 'tamareen', 'wadiyat')),
  youtube_id   text    not null default '',
  duration     text    not null default '15 min',
  description  text    not null default '',
  published_at date    not null default current_date,
  views        integer not null default 0,
  is_visible   boolean not null default true,
  created_at   timestamp with time zone default now()
);

-- Activer RLS
alter table public.videos enable row level security;

-- Les élèves connectés peuvent LIRE les vidéos visibles
create policy "Lire les vidéos"
  on public.videos for select
  to authenticated
  using (is_visible = true);

-- Les utilisateurs connectés peuvent AJOUTER des vidéos (professeur)
create policy "Ajouter une vidéo"
  on public.videos for insert
  to authenticated
  with check (true);

-- Les utilisateurs connectés peuvent MODIFIER une vidéo
create policy "Modifier une vidéo"
  on public.videos for update
  to authenticated
  using (true);

-- Insérer quelques vidéos d'exemple
insert into public.videos (title, type, youtube_id, duration, description, published_at, views) values
  ('الكسور — مناضرة 1',          'mnadarat', '', '20 min', 'مناضرة في الكسور البسيطة مع أمثلة من الحياة اليومية.',  '2026-05-20', 52),
  ('الأعداد الكبيرة — مناضرة 2', 'mnadarat', '', '18 min', 'قراءة وكتابة الأعداد الكبيرة حتى المليون.',            '2026-05-18', 38),
  ('امتحان الفصل الأول',         'imtihane', '', '30 min', 'مراجعة وتصحيح امتحان الفصل الأول في الرياضيات.',       '2026-05-10', 67),
  ('تمارين في الكسور',           'tamareen', '', '15 min', 'تمارين تطبيقية على جمع وطرح الكسور مع التصحيح.',       '2026-05-12', 48),
  ('وضعية — في السوق',           'wadiyat',  '', '16 min', 'وضعية مسألة: حساب الثمن والباقي في موقف يومي.',        '2026-05-14', 39)
on conflict do nothing;


-- ================================================================
-- 3. TABLE : students (profil étendu des élèves)
--    Supabase Auth gère le login, cette table garde les infos
-- ================================================================
create table if not exists public.students (
  id         uuid primary key references auth.users(id) on delete cascade,
  name       text    not null default '',
  classe     text    not null default '6ème A',
  role       text    not null default 'eleve' check (role in ('eleve', 'prof')),
  created_at timestamp with time zone default now()
);

-- Activer RLS
alter table public.students enable row level security;

-- Chaque élève peut lire son propre profil
create policy "Lire son profil"
  on public.students for select
  to authenticated
  using (auth.uid() = id);

-- Insérer son profil à la première connexion (via trigger)
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.students (id, name, classe, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'classe', '6ème A'),
    coalesce(new.raw_user_meta_data->>'role', 'eleve')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Créer le trigger (crée le profil automatiquement à chaque nouvelle inscription)
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ================================================================
-- 4. VÉRIFICATION — Voir vos tables créées
-- ================================================================
select
  table_name,
  (select count(*) from information_schema.columns c
   where c.table_name = t.table_name) as colonnes
from information_schema.tables t
where table_schema = 'public'
  and table_name in ('live_status', 'videos', 'students')
order by table_name;

-- Si vous voyez 3 lignes → tout est créé avec succès ! ✅
