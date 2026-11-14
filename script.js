const i18n = {
  en: {
    subtitle: 'FOOTBALL EDITS',
    ttFollowers: 'Followers',
    ttLikes: 'Likes',
    ytSubs: 'Subscribers',
    ytViews: 'Views',
    softwareHeading: 'SOFTWARE & TOOLS',
    aeRole: 'VFX, Motion & Compositing',
    aeDesc: 'High-impact visual effects, smooth velocity sync, shakes, 3D camera tracking, and custom glow compositing.',
    prRole: 'Timeline & Sound Design',
    prDesc: 'Precision match-cut assembly, frame-accurate beat syncing, SFX layering, and final mastering.',
    drRole: 'Color Grading & Finishing',
    drDesc: 'Cinematic color grading, custom LUTs, HDR contrast, and studio-grade visual polish.',
    blRole: '3D Elements & Environments',
    blDesc: '3D scenes, stadium lighting, custom 3D typography, and dynamic camera animations.',
    ccRole: 'Short-Form & Viral Pacing',
    ccDesc: 'Fast-turnaround vertical edits, dynamic captions, and trend-ready delivery for TikTok & Reels.',
    krRole: 'Digital Art & Frame Paint',
    krDesc: 'Custom hand-drawn frame-by-frame effects, thumbnails, masking, and stylized artwork.',
    socialsHeading: 'SOCIALS & STORE',
    brandsHeading: "BRANDS I'VE WORKED WITH",
    contactHeading: 'PROMO & INQUIRIES',
    copyHint: 'Click email to copy',
    copied: 'Email copied!',
    openMail: 'Open mail app ↗'
  },
  pt: {
    subtitle: 'EDITS DE FUTEBOL',
    ttFollowers: 'Seguidores',
    ttLikes: 'Curtidas',
    ytSubs: 'Inscritos',
    ytViews: 'Views',
    softwareHeading: 'SOFTWARES QUE USO',
    aeRole: 'VFX, Motion & Composição',
    aeDesc: 'Efeitos visuais de alto impacto, sincronia de velocity, shakes, câmera 3D e composição de glows.',
    prRole: 'Timeline & Sound Design',
    prDesc: 'Cortes precisos na batida, montagem de lances, camadas de efeitos sonoros (SFX) e finalização.',
    drRole: 'Color Grading & Finalização',
    drDesc: 'Correção de cor cinematográfica, LUTs próprios, contraste HDR e acabamento visual de estúdio.',
    blRole: 'Elementos & Cenários 3D',
    blDesc: 'Modelagem de cenas 3D, iluminação, textos tridimensionais e animações dinâmicas de câmera.',
    ccRole: 'Formato Curto & Ritmo Viral',
    ccDesc: 'Edições verticais ágeis, efeitos dinâmicos e entrega otimizada para TikTok, Reels e Shorts.',
    krRole: 'Arte Digital & Frame a Frame',
    krDesc: 'Efeitos desenhados quadro a quadro, recortes avançados, thumbnails e estilização visual.',
    socialsHeading: 'REDES SOCIAIS & LOJA',
    brandsHeading: 'EMPRESAS QUE JÁ COLABOREI',
    contactHeading: 'CONTATO PARA PROMO',
    copyHint: 'Clique no e-mail para copiar',
    copied: 'E-mail copiado!',
    openMail: 'Abrir aplicativo de e-mail ↗'
  },
  es: {
    subtitle: 'EDITS DE FÚTBOL',
    ttFollowers: 'Seguidores',
    ttLikes: 'Me gusta',
    ytSubs: 'Suscriptores',
    ytViews: 'Vistas',
    softwareHeading: 'SOFTWARE QUE USO',
    aeRole: 'VFX, Motion y Composición',
    aeDesc: 'Efectos visuales de alto impacto, sincronización de velocity, shakes, cámara 3D y composición.',
    prRole: 'Timeline y Diseño Sonoro',
    prDesc: 'Cortes precisos al ritmo, montaje de jugadas, capas de efectos de sonido (SFX) y masterización.',
    drRole: 'Color Grading y Acabado',
    drDesc: 'Etalonaje cinematográfico, LUTs personalizados, contraste HDR y acabado visual de estudio.',
    blRole: 'Elementos y Entornos 3D',
    blDesc: 'Escenas 3D, iluminación, tipografía tridimensional y animaciones dinámicas de cámara.',
    ccRole: 'Formato Corto y Ritmo Viral',
    ccDesc: 'Ediciones verticales ágiles, efectos dinámicos y entrega optimizada para TikTok y Reels.',
    krRole: 'Arte Digital y Cuadro a Cuadro',
    krDesc: 'Efectos dibujados a mano cuadro a cuadro, miniaturas, máscaras y arte estilizado.',
    socialsHeading: 'REDES SOCIALES Y TIENDA',
    brandsHeading: 'MARCAS CON LAS QUE COLABORÉ',
    contactHeading: 'CONTACTO PARA PROMO',
    copyHint: 'Haz clic en el correo para copiar',
    copied: '¡Correo copiado!',
    openMail: 'Abrir aplicación de correo ↗'
  },
  fr: {
    subtitle: 'EDITS DE FOOTBALL',
    ttFollowers: 'Abonnés',
    ttLikes: "J'aime",
    ytSubs: 'Abonnés',
    ytViews: 'Vues',
    softwareHeading: 'LOGICIELS UTILISÉS',
    aeRole: 'VFX, Motion & Compositing',
    aeDesc: 'Effets visuels percutants, synchronisation velocity, shakes, tracking 3D et glows sur mesure.',
    prRole: 'Montage & Sound Design',
    prDesc: 'Assemblage précis sur le rythme, superposition SFX et mastérisation finale.',
    drRole: 'Étalonnage & Finition',
    drDesc: 'Étalonnage cinématographique, LUTs personnalisés, contraste HDR et finition studio.',
    blRole: 'Éléments & Scènes 3D',
    blDesc: 'Scènes 3D, éclairage, typographie 3D sur mesure et animations de caméra dynamiques.',
    ccRole: 'Format Court & Rythme Viral',
    ccDesc: 'Montages verticaux rapides et livraison optimisée pour TikTok, Reels et Shorts.',
    krRole: 'Art Numérique & Image par Image',
    krDesc: 'Effets dessinés image par image, miniatures, masques et illustrations stylisées.',
    socialsHeading: 'RÉSEAUX SOCIAUX & BOUTIQUE',
    brandsHeading: 'MARQUES PARTENAIRES',
    contactHeading: 'CONTACT PROMO',
    copyHint: "Cliquez sur l'e-mail pour copier",
    copied: 'E-mail copié !',
    openMail: 'Ouvrir l’application mail ↗'
  }
};

let currentLang = 'en';

function formatCompact(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B+';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M+';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K+';
  }
  return String(num);
}

function animateCounter(el, targetValue, duration = 1100) {
  if (!el || !targetValue) return;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(targetValue * eased);
    el.textContent = formatCompact(current);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = formatCompact(targetValue);
    }
  }

  requestAnimationFrame(tick);
}

async function loadAndRenderStats() {
  const map = {
    tiktokFollowers: document.getElementById('stat-tt-followers'),
    tiktokLikes: document.getElementById('stat-tt-likes'),
    youtubeSubscribers: document.getElementById('stat-yt-subs'),
    youtubeViews: document.getElementById('stat-yt-views')
  };

  let data = {
    tiktokFollowers: 332800,
    tiktokLikes: 27200000,
    youtubeSubscribers: 463000,
    youtubeViews: 164264010
  };

  try {
    const res = await fetch('stats.json', { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      data = { ...data, ...json };
    }
  } catch {
    // Fallback to embedded values when opened via file://
  }

  Object.entries(map).forEach(([key, el]) => {
    if (el && data[key]) {
      animateCounter(el, Number(data[key]));
    }
  });
}

function applyLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  applyLanguage('en');
  loadAndRenderStats();

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Supabase-style expanding software accordion (hover, focus, or click)
  const panels = document.querySelectorAll('.sw-panel');
  panels.forEach((panel) => {
    const activate = () => {
      panels.forEach((p) => p.classList.remove('active'));
      panel.classList.add('active');
    };
    panel.addEventListener('mouseenter', activate);
    panel.addEventListener('focus', activate);
    panel.addEventListener('click', activate);
  });

  // Copy email
  const copyBtn = document.getElementById('copy-email');
  const feedback = document.getElementById('copy-feedback');
  const email = 'hyoscine7@gmail.com';
  let timer = null;

  if (copyBtn && feedback) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const temp = document.createElement('input');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }

      feedback.textContent = i18n[currentLang].copied;
      feedback.classList.add('copied');

      clearTimeout(timer);
      timer = setTimeout(() => {
        feedback.textContent = i18n[currentLang].copyHint;
        feedback.classList.remove('copied');
      }, 2400);
    });
  }
});
