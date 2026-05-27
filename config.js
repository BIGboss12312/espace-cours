// ================================================================
// ⚙️  CONFIGURATION — MON ESPACE COURS EN LIGNE
// ================================================================
// Ce fichier contient tous les réglages de votre site.
// Modifiez les valeurs entre guillemets pour personnaliser.
// ================================================================

// --- 📌 Informations générales du site ---
const SITE = {
  name:          "Espace Cours",
  subtitle:      "6ème Année — Enseignement de Base",
  arabicTitle:   "فضاء الدروس",
  arabicGrade:   "السنة السادسة ابتدائي",
  arabicGreeting:"مرحباً بكم في منصة التعلّم الرقمي",
  teacher:       "Votre Professeur",
  school:        "École Primaire",
};

// --- 🔐 Supabase (votre base de données gratuite) ---
// Pour activer :
//   1. Allez sur https://supabase.com → votre projet
//   2. Settings → API → copiez "Project URL" et "anon public"
//   3. Collez-les ci-dessous (JAMAIS la clé service_role ou sb_secret !)
const SUPABASE_URL      = "https://basrddayshfetmcdylrd.supabase.co"; // ✅ URL correcte
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhc3JkZGF5c2hmZXRtY2R5bHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4OTkxMTQsImV4cCI6MjA5NTQ3NTExNH0.6MvAoRQNSmSacEs9JQnaQEva1snkN8WiSydYTpZ2HuY"; // ← à remplacer par la clé "anon public"

// --- 🧪 Mode Démonstration ---
// true  = fonctionne sans Supabase (parfait pour tester)
// false = utilise Supabase pour les vrais élèves
const DEMO_MODE = true; // Passez à false après avoir mis la vraie clé anon

// Comptes de démo pour tester
const DEMO_USERS = [
  {
    email:    "prof@demo.tn",
    password: "prof123",
    name:     "Professeur Hamdi",
    role:     "prof",
    classe:   "Professeur",
  },
  {
    email:    "eleve@demo.tn",
    password: "eleve123",
    name:     "Ahmed Ben Ali",
    role:     "eleve",
    classe:   "6ème A",
  },
];

// --- 📡 Cours en Direct (Live) ---
// Mettez LIVE_NOW = true quand vous commencez un live
const LIVE_NOW         = false;
const LIVE_YOUTUBE_ID  = ""; // Remplacez par l'ID YouTube de votre live (la partie après v=)
const LIVE_SUBJECT     = "mnadarat";
const LIVE_TOPIC       = "الكسور";

// --- 📚 Matière unique : الرياضيات ---
const SUBJECTS = {
  math: { label: "Mathématiques", arabic: "الرياضيات", icon: "📐", color: "#1d4ed8", gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)" },
};

// --- 🗂️ Types de contenu (les 4 catégories) ---
// C'est ici que vous choisissez le type de chaque vidéo
const TYPES = {
  mnadarat:  { label: "مناضرات",  subtitle: "Cours & Leçons",          icon: "📖", color: "#1d4ed8", gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)" },
  imtihane:  { label: "امتحانات", subtitle: "Examens & Contrôles",      icon: "📝", color: "#dc2626", gradient: "linear-gradient(135deg,#7f1d1d,#ef4444)" },
  tamareen:  { label: "تمارين",   subtitle: "Exercices & Entraînement", icon: "✏️", color: "#059669", gradient: "linear-gradient(135deg,#064e3b,#34d399)" },
  wadiyat:   { label: "وضعيات",   subtitle: "Situations-Problèmes",     icon: "🧩", color: "#7c3aed", gradient: "linear-gradient(135deg,#4c1d95,#8b5cf6)" },
};

// --- 🎬 Vos Vidéos ---
// Pour chaque vidéo, remplissez :
//   subject   : toujours "math"
//   type      : "mnadarat" | "imtihane" | "tamareen" | "wadiyat"
//   youtubeId : la partie après "v=" dans l'URL YouTube
//     Exemple: https://youtube.com/watch?v=dQw4w9WgXcQ → youtubeId: "dQw4w9WgXcQ"
const VIDEOS = [

  // ── مناضرات (Cours) ──────────────────────────────────────────
  {
    id: 1,
    title:       "الكسور — مناضرة 1",
    subject:     "math",
    type:        "mnadarat",
    duration:    "20 min",
    date:        "20 Mai 2026",
    youtubeId:   "", // ← Mettez votre ID YouTube ici
    description: "مناضرة في الكسور البسيطة مع أمثلة من الحياة اليومية.",
    views: 52,
  },
  {
    id: 2,
    title:       "الأعداد الكبيرة — مناضرة 2",
    subject:     "math",
    type:        "mnadarat",
    duration:    "18 min",
    date:        "18 Mai 2026",
    youtubeId:   "",
    description: "قراءة وكتابة الأعداد الكبيرة حتى المليون.",
    views: 38,
  },
  {
    id: 3,
    title:       "الأشكال الهندسية — مناضرة 3",
    subject:     "math",
    type:        "mnadarat",
    duration:    "22 min",
    date:        "15 Mai 2026",
    youtubeId:   "",
    description: "التعرف على الأشكال الهندسية وخصائصها.",
    views: 44,
  },

  // ── امتحانات (Examens) ───────────────────────────────────────
  {
    id: 4,
    title:       "امتحان الفصل الأول — الرياضيات",
    subject:     "math",
    type:        "imtihane",
    duration:    "30 min",
    date:        "10 Mai 2026",
    youtubeId:   "",
    description: "مراجعة وتصحيح امتحان الفصل الأول في الرياضيات.",
    views: 67,
  },
  {
    id: 5,
    title:       "فرض مراقبة — الأعداد والعمليات",
    subject:     "math",
    type:        "imtihane",
    duration:    "25 min",
    date:        "5 Mai 2026",
    youtubeId:   "",
    description: "تصحيح فرض المراقبة في الأعداد والعمليات الأربع.",
    views: 55,
  },

  // ── تمارين (Exercices) ───────────────────────────────────────
  {
    id: 6,
    title:       "تمارين في الكسور — الجمع والطرح",
    subject:     "math",
    type:        "tamareen",
    duration:    "15 min",
    date:        "12 Mai 2026",
    youtubeId:   "",
    description: "تمارين تطبيقية على جمع وطرح الكسور مع التصحيح.",
    views: 48,
  },
  {
    id: 7,
    title:       "تمارين على الضرب والقسمة",
    subject:     "math",
    type:        "tamareen",
    duration:    "17 min",
    date:        "8 Mai 2026",
    youtubeId:   "",
    description: "تمارين متدرجة في الضرب والقسمة مع تصحيح مفصّل.",
    views: 41,
  },
  {
    id: 8,
    title:       "تمارين في القياسات والوحدات",
    subject:     "math",
    type:        "tamareen",
    duration:    "13 min",
    date:        "3 Mai 2026",
    youtubeId:   "",
    description: "تمارين على تحويل وحدات الطول والوزن والسعة.",
    views: 33,
  },

  // ── وضعيات (Situations-problèmes) ───────────────────────────
  {
    id: 9,
    title:       "وضعية — في السوق",
    subject:     "math",
    type:        "wadiyat",
    duration:    "16 min",
    date:        "14 Mai 2026",
    youtubeId:   "",
    description: "وضعية مسألة: حساب الثمن والباقي في موقف من الحياة اليومية.",
    views: 39,
  },
  {
    id: 10,
    title:       "وضعية — بناء منزل",
    subject:     "math",
    type:        "wadiyat",
    duration:    "20 min",
    date:        "7 Mai 2026",
    youtubeId:   "",
    description: "وضعية إدماجية: حساب المساحات والتكاليف في مشروع بناء.",
    views: 29,
  },
  {
    id: 11,
    title:       "وضعية — رحلة مدرسية",
    subject:     "math",
    type:        "wadiyat",
    duration:    "14 min",
    date:        "1 Mai 2026",
    youtubeId:   "",
    description: "توظيف الرياضيات في تنظيم رحلة مدرسية: العدد، التكلفة، المسافة.",
    views: 36,
  },
];

// --- 📅 Planning des prochains cours ---
const SCHEDULE = [
  { date: "الاثنين 2 جوان",   time: "14h00", type: "mnadarat", topic: "الكسور — الجمع والطرح",         icon: "📖" },
  { date: "الأربعاء 4 جوان", time: "10h00", type: "tamareen",  topic: "تمارين على الأعداد العشرية",    icon: "✏️" },
  { date: "الجمعة 6 جوان",   time: "14h00", type: "wadiyat",   topic: "وضعية — المساحة والمحيط",       icon: "🧩" },
];

// ================================================================
// 🔐 FONCTIONS D'AUTHENTIFICATION — Ne pas modifier
// ================================================================

let _supabaseClient = null;

function _initSupabase() {
  if (!_supabaseClient && !DEMO_MODE && typeof supabase !== 'undefined') {
    _supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
}

async function loginUser(email, password) {
  const em = email.trim().toLowerCase();

  if (DEMO_MODE) {
    const user = DEMO_USERS.find(u => u.email === em && u.password === password);
    if (user) {
      localStorage.setItem('__session', JSON.stringify({
        email:  user.email,
        name:   user.name,
        classe: user.classe,
        role:   user.role || 'eleve',
      }));
      return { ok: true };
    }
    return { ok: false, msg: "Email ou mot de passe incorrect.\n\n🎓 Professeur : prof@demo.tn / prof123\n👤 Élève : eleve@demo.tn / eleve123" };
  }

  try {
    _initSupabase();
    const { data, error } = await _supabaseClient.auth.signInWithPassword({ email: em, password });
    if (error) throw error;
    const meta = data.user.user_metadata || {};
    localStorage.setItem('__session', JSON.stringify({
      email:  data.user.email,
      name:   meta.name  || em.split('@')[0],
      classe: meta.classe || '6ème',
      role:   meta.role  || 'eleve',
      id:     data.user.id,
    }));
    return { ok: true };
  } catch (e) {
    return { ok: false, msg: e.message || "Erreur de connexion." };
  }
}

async function logoutUser() {
  localStorage.removeItem('__session');
  if (!DEMO_MODE && _supabaseClient) await _supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}

function getSession() {
  try { return JSON.parse(localStorage.getItem('__session')); }
  catch { return null; }
}

function requireLogin() {
  const s = getSession();
  if (!s) { window.location.href = 'index.html'; return null; }
  return s;
}

function getInitials(name) {
  return (name || '?').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

// ── Role helpers ──
function isTeacher() {
  const s = getSession();
  return s && s.role === 'prof';
}

// ── Demo live state (stored in localStorage for testing) ──
function getDemoLive() {
  try { return JSON.parse(localStorage.getItem('__demo_live') || '{}'); }
  catch { return {}; }
}
function isLiveActive() {
  if (DEMO_MODE) return getDemoLive().active === true;
  return LIVE_NOW;
}
function getLiveTopic() {
  if (DEMO_MODE) return getDemoLive().topic || LIVE_TOPIC;
  return LIVE_TOPIC;
}
function getLiveYoutubeId() {
  if (DEMO_MODE) return getDemoLive().youtubeId || LIVE_YOUTUBE_ID;
  return LIVE_YOUTUBE_ID;
}
