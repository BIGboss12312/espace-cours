-- ================================================================
-- 🔐 PERMISSIONS — PROFESSEUR vs ÉLÈVE
-- ================================================================
-- Collez ce code dans : Supabase → SQL Editor → New Query → Run
-- ================================================================


-- ── 1. Fonction : vérifier si l'utilisateur est un professeur ──
CREATE OR REPLACE FUNCTION public.is_prof()
RETURNS boolean LANGUAGE sql SECURITY DEFINER STABLE AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.students
    WHERE id = auth.uid() AND role = 'prof'
  );
$$;


-- ── 2. PERMISSIONS SUR live_status ─────────────────────────────

-- Supprimer les anciennes permissions trop permissives
DROP POLICY IF EXISTS "Modifier le statut live" ON public.live_status;
DROP POLICY IF EXISTS "Lire le statut live"     ON public.live_status;

-- ✅ TOUT LE MONDE connecté peut LIRE le statut live
CREATE POLICY "Eleves peuvent lire le live"
  ON public.live_status FOR SELECT
  TO authenticated USING (true);

-- 🔒 SEULEMENT LE PROF peut démarrer/arrêter le live
CREATE POLICY "Prof peut modifier le live"
  ON public.live_status FOR UPDATE
  TO authenticated
  USING (public.is_prof())
  WITH CHECK (public.is_prof());


-- ── 3. PERMISSIONS SUR videos ──────────────────────────────────

-- Supprimer les anciennes permissions
DROP POLICY IF EXISTS "Lire les vidéos"    ON public.videos;
DROP POLICY IF EXISTS "Ajouter une vidéo"  ON public.videos;
DROP POLICY IF EXISTS "Modifier une vidéo" ON public.videos;

-- ✅ TOUT LE MONDE connecté peut LIRE les vidéos visibles
CREATE POLICY "Eleves peuvent lire les videos"
  ON public.videos FOR SELECT
  TO authenticated USING (is_visible = true);

-- 🔒 SEULEMENT LE PROF peut AJOUTER une vidéo
CREATE POLICY "Prof peut ajouter une video"
  ON public.videos FOR INSERT
  TO authenticated WITH CHECK (public.is_prof());

-- 🔒 SEULEMENT LE PROF peut MODIFIER une vidéo
CREATE POLICY "Prof peut modifier une video"
  ON public.videos FOR UPDATE
  TO authenticated
  USING (public.is_prof())
  WITH CHECK (public.is_prof());

-- 🔒 SEULEMENT LE PROF peut SUPPRIMER une vidéo
CREATE POLICY "Prof peut supprimer une video"
  ON public.videos FOR DELETE
  TO authenticated USING (public.is_prof());


-- ── 4. PERMISSIONS SUR students ────────────────────────────────

DROP POLICY IF EXISTS "Lire son profil" ON public.students;

-- Chaque élève lit son propre profil
CREATE POLICY "Lire son propre profil"
  ON public.students FOR SELECT
  TO authenticated USING (auth.uid() = id);

-- Le prof peut lire TOUS les profils
CREATE POLICY "Prof lit tous les profils"
  ON public.students FOR SELECT
  TO authenticated USING (public.is_prof());


-- ── 5. CRÉER LE COMPTE PROFESSEUR ──────────────────────────────
-- Remplacez l'email et le mot de passe puis exécutez ce bloc

-- D'abord, créez le compte via Authentication → Users → Add user
-- Ensuite, exécutez cette requête pour lui donner le rôle PROF :

-- UPDATE auth.users
-- SET raw_user_meta_data = jsonb_build_object(
--   'name',   'Professeur Hamdi',
--   'role',   'prof',
--   'classe', 'Professeur'
-- )
-- WHERE email = 'VOTRE_EMAIL_PROF@exemple.com';


-- ── 6. VÉRIFICATION FINALE ─────────────────────────────────────
SELECT
  schemaname,
  tablename,
  policyname,
  cmd as operation,
  CASE WHEN roles::text LIKE '%authenticated%' THEN '✅' ELSE '❓' END as actif
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('live_status', 'videos', 'students')
ORDER BY tablename, cmd;

-- ✅ Vous devriez voir les permissions listées pour chaque table
