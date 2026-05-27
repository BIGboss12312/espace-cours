// ================================================================
// 🌐  SYSTÈME DE LANGUE — Français ↔ العربية
// ================================================================

const TRANSLATIONS = {
  fr: {
    // Direction
    '__dir':  'ltr',
    // Navbar
    'nav-home':       'Accueil',
    'nav-videos':     'Vidéos',
    'nav-direct':     'Direct',
    'nav-logout':     'Déconnexion',
    'logo-sub':       '6ème Année — Programme Tunisien',
    'nav-live-label': 'EN DIRECT',
    // Left panel (login page)
    'left-heading':       'Apprenez<br/>\u00e0 votre rythme',
    'left-desc':          'Accédez \u00e0 vos cours de math\u00e9matiques : mna\u00e0rat, examens, exercices et situations-probl\u00e8mes.',
    'feat-mnadarat':      'مناضرات — Cours',
    'feat-mnadarat-sub':  'Regardez les le\u00e7ons expliqu\u00e9es en d\u00e9tail',
    'feat-imtihane':      'امتحانات — Examens',
    'feat-imtihane-sub':  'Corrections des devoirs et examens',
    'feat-tamareen':      'تمارين و وضعيات',
    'feat-tamareen-sub':  'Exercices progressifs et situations-probl\u00e8mes',
    'feat-direct':        'Cours en direct 📡',
    'feat-direct-sub':    'Rejoignez le professeur en temps r\u00e9el',
    'left-footer':        '\u00a9 2026 Espace Cours Tunisie — Plateforme priv\u00e9e',
    // Login page
    'login-title':    'Connexion',
    'login-subtitle': 'Entrez vos identifiants pour accéder à vos cours',
    'label-email':    '📧 Adresse Email',
    'label-password': '🔑 Mot de passe',
    'ph-email':       'votre.email@example.com',
    'ph-password':    '••••••••',
    'btn-login':      'Se connecter',
    'login-footer':   'Accès réservé aux élèves invités par le professeur',
    // Accueil
    'stat-label-videos':   'Vidéos de cours',
    'stat-label-types':    'Types de cours',
    'stat-label-next':     'Prochain direct',
    'stat-label-students': 'Élèves inscrits',
    'section-types':    '📐 Types de Cours',
    'section-recent':   '🎬 Cours Récents',
    'section-schedule': '📅 Prochains Cours en Direct',
    'btn-see-videos':   'Voir les vidéos →',
    'btn-all-courses':  'Tous les cours →',
    'btn-go-videos':    '🎬 Voir les vidéos',
    'btn-go-direct':    '📡 Cours en direct',
    // Videos
    'videos-page-title':    '📚 Tous les Cours Vidéo',
    'videos-page-subtitle': 'Retrouvez toutes vos leçons enregistrées, classées par type',
    'videos-page-arabic':   'جميع الدروس المسجّلة — مصنّفة حسب النوع',
    'search-ph':            'Rechercher un cours...',
    'filter-all':           '🎯 الكل — Tout',
    // Direct
    'direct-offline-title': 'Cours bientôt disponible',
    'direct-offline-desc':  'Le cours en direct n\'a pas encore commencé. Revenez à l\'heure indiquée.',
    'direct-next-title':    '📅 Prochain Cours Direct',
    'direct-tips-title':    '💡 Conseils',
    'tip-1': 'Utilisez des écouteurs pour mieux entendre le professeur',
    'tip-2': 'Préparez votre cahier et un stylo avant le cours',
    'tip-3': 'Vérifiez votre connexion internet avant de rejoindre',
    'tip-4': 'Coupez votre micro si vous regardez depuis YouTube Live',
    'tip-5': 'Posez vos questions dans le chat YouTube',
    'btn-all-videos-short': '🎬 Voir tous les cours enregistrés',
  },
  ar: {
    // Direction
    '__dir':  'rtl',
    // Navbar
    'nav-home':       'الرئيسية',
    'nav-videos':     'الدروس',
    'nav-direct':     'البث المباشر',
    'nav-logout':     'خروج',
    'logo-sub':       'السنة السادسة — البرنامج التونسي',
    'nav-live-label': 'مباشر',
    // Left panel (login page)
    'left-heading':       'تعلّم<br/>بالوتيرة التي تناسبك',
    'left-desc':          'ادخل وشاهد دروس الرياضيات: مناضرات، امتحانات، تمارين، وضعيات.',
    'feat-mnadarat':      'مناضرات',
    'feat-mnadarat-sub':  'دروس مشروحة بالتفصيل — شاهد متى شئت',
    'feat-imtihane':      'امتحانات',
    'feat-imtihane-sub':  'تصحيح الفروض والامتحانات السابقة',
    'feat-tamareen':      'تمارين و وضعيات',
    'feat-tamareen-sub':  'تدرّب على تمارين متدرجة ومسائل إدماجية',
    'feat-direct':        'بث مباشر 📡',
    'feat-direct-sub':    'انضمّ إلى البّث المباشر مع الأستاذ',
    'left-footer':        '© 2026 فضاء الدروس تونس — منصّة خاصة بالتلاميذ',
    // Login page
    'login-title':    'تسجيل الدخول',
    'login-subtitle': 'أدخل بياناتك للوصول إلى دروسك',
    'label-email':    '📧 البريد الإلكتروني',
    'label-password': '🔑 كلمة المرور',
    'ph-email':       'بريدك@example.com',
    'ph-password':    '••••••••',
    'btn-login':      'دخول',
    'login-footer':   'الدخول مخصص للتلاميذ المسجلين فقط',
    // Accueil
    'stat-label-videos':   'مقطع درس',
    'stat-label-types':    'أنواع الدروس',
    'stat-label-next':     'البث القادم',
    'stat-label-students': 'تلميذ مسجل',
    'section-types':    'أنواع الدروس 📐',
    'section-recent':   'أحدث الدروس 🎬',
    'section-schedule': 'الدروس المباشرة القادمة 📅',
    'btn-see-videos':   '← عرض الدروس',
    'btn-all-courses':  '← جميع الدروس',
    'btn-go-videos':    '🎬 مشاهدة الدروس',
    'btn-go-direct':    '📡 البث المباشر',
    // Videos
    'videos-page-title':    '📚 جميع دروس الرياضيات',
    'videos-page-subtitle': 'جميع الدروس المسجّلة مصنّفة حسب النوع',
    'videos-page-arabic':   'اختر النوع أو ابحث عن درس',
    'search-ph':            'ابحث عن درس...',
    'filter-all':           '🎯 الكل',
    // Direct
    'direct-offline-title': 'الدرس سيبدأ قريباً',
    'direct-offline-desc':  'لم يبدأ الدرس المباشر بعد. عُد في الوقت المحدد في البرنامج.',
    'direct-next-title':    '📅 الدرس المباشر القادم',
    'direct-tips-title':    '💡 نصائح',
    'tip-1': 'استخدم سماعات الأذن لتسمع الأستاذ بشكل أفضل',
    'tip-2': 'جهّز كراسك وقلمك قبل بداية الدرس',
    'tip-3': 'تحقق من اتصالك بالإنترنت قبل الانضمام',
    'tip-4': 'أوقف الميكروفون إذا كنت تشاهد من YouTube',
    'tip-5': 'اطرح أسئلتك في الدردشة على YouTube',
    'btn-all-videos-short': '🎬 مشاهدة جميع الدروس المسجلة',
  }
};

// ── Get / Set language ──────────────────────────────────────────
function getLang() {
  return localStorage.getItem('__lang') || 'fr';
}
function setLang(lang) {
  localStorage.setItem('__lang', lang);
}

// ── Apply translations to the page ─────────────────────────────
function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  // 1. Set page direction
  document.documentElement.setAttribute('dir', t['__dir']);
  document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'fr');

  // 2. Update all elements with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (el.tagName === 'INPUT') {
      el.placeholder = t[key];
    } else if (t[key].includes('<')) {
      // Contains HTML (e.g. <br/>)
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  // 3. Update the toggle button itself
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    if (lang === 'fr') {
      btn.innerHTML = `<span class="lt-flag">🇹🇳</span><span class="lt-text">AR</span>`;
      btn.title = 'التبديل إلى العربية';
    } else {
      btn.innerHTML = `<span class="lt-flag">🇫🇷</span><span class="lt-text">FR</span>`;
      btn.title = 'Passer au Français';
    }
  }

  // 4. RTL-specific navbar adjustments
  const navRight = document.querySelector('.navbar-right');
  const navLinks = document.querySelector('.nav-links');
  if (navRight) {
    navRight.style.marginLeft = lang === 'ar' ? '0'    : 'auto';
    navRight.style.marginRight= lang === 'ar' ? 'auto' : '';
  }
  if (navLinks) {
    navLinks.style.marginLeft = lang === 'ar' ? '0'    : '24px';
    navLinks.style.marginRight= lang === 'ar' ? '24px' : '';
  }

  // 5. Left panel text direction
  const leftPanel = document.querySelector('.left-center');
  if (leftPanel) {
    leftPanel.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  }
  const leftDesc = document.querySelector('.left-desc');
  if (leftDesc && lang === 'ar') {
    leftDesc.style.fontFamily = "'Tajawal', sans-serif";
    leftDesc.style.fontSize   = '16px';
  } else if (leftDesc) {
    leftDesc.style.fontFamily = '';
    leftDesc.style.fontSize   = '';
  }
  // Feature items text direction
  document.querySelectorAll('.feature-text span, .feature-text small').forEach(el => {
    el.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : '';
    el.style.direction  = lang === 'ar' ? 'rtl' : 'ltr';
    el.style.display    = 'block';
  });
}

// ── Toggle between FR and AR ────────────────────────────────────
function toggleLang() {
  const current = getLang();
  const next    = current === 'fr' ? 'ar' : 'fr';
  setLang(next);
  applyLang(next);
  // Animate the button
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    btn.style.transform = 'scale(0.85)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 180);
  }
}

// ── Auto-apply on page load ─────────────────────────────────────
// We use DOMContentLoaded to wait for the DOM (called after config.js)
function initLang() {
  applyLang(getLang());
}
