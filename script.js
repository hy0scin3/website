const i18n = {
  en: {
    subtitle: 'FOOTBALL EDITS',
    ttFollowers: 'TikTok Followers',
    ttLikes: 'TikTok Likes',
    ytSubs: 'YouTube Subscribers',
    ytViews: 'YouTube Views',
    socialsHeading: 'SOCIALS & STORE',
    brandsHeading: "BRANDS I'VE WORKED WITH",
    contactHeading: 'PROMO & INQUIRIES',
    copyHint: 'Click email to copy',
    copied: 'Email copied!',
    openMail: 'Open mail app ↗'
  },
  pt: {
    subtitle: 'EDITS DE FUTEBOL',
    ttFollowers: 'Seguidores TikTok',
    ttLikes: 'Curtidas TikTok',
    ytSubs: 'Inscritos YouTube',
    ytViews: 'Views no YouTube',
    socialsHeading: 'REDES SOCIAIS & LOJA',
    brandsHeading: 'EMPRESAS QUE JÁ COLABOREI',
    contactHeading: 'CONTATO PARA PROMO',
    copyHint: 'Clique no e-mail para copiar',
    copied: 'E-mail copiado!',
    openMail: 'Abrir aplicativo de e-mail ↗'
  },
  es: {
    subtitle: 'EDITS DE FÚTBOL',
    ttFollowers: 'Seguidores TikTok',
    ttLikes: 'Me gusta TikTok',
    ytSubs: 'Suscriptores YouTube',
    ytViews: 'Vistas en YouTube',
    socialsHeading: 'REDES SOCIALES Y TIENDA',
    brandsHeading: 'MARCAS CON LAS QUE COLABORÉ',
    contactHeading: 'CONTACTO PARA PROMO',
    copyHint: 'Haz clic en el correo para copiar',
    copied: '¡Correo copiado!',
    openMail: 'Abrir aplicación de correo ↗'
  },
  fr: {
    subtitle: 'EDITS DE FOOTBALL',
    ttFollowers: 'Abonnés TikTok',
    ttLikes: "J'aime TikTok",
    ytSubs: 'Abonnés YouTube',
    ytViews: 'Vues YouTube',
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

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

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
