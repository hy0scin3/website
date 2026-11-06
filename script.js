const i18n = {
  en: {
    subtitle: 'FOOTBALL EDITS',
    socialsHeading: 'SOCIALS & STORE',
    brandsHeading: "BRANDS I'VE WORKED WITH",
    contactHeading: 'PROMO & INQUIRIES',
    copyHint: 'Click email to copy',
    copied: 'Email copied!',
    openMail: 'Open mail app ↗'
  },
  pt: {
    subtitle: 'EDITS DE FUTEBOL',
    socialsHeading: 'REDES SOCIAIS & LOJA',
    brandsHeading: 'EMPRESAS QUE JÁ COLABOREI',
    contactHeading: 'CONTATO PARA PROMO',
    copyHint: 'Clique no e-mail para copiar',
    copied: 'E-mail copiado!',
    openMail: 'Abrir aplicativo de e-mail ↗'
  },
  es: {
    subtitle: 'EDITS DE FÚTBOL',
    socialsHeading: 'REDES SOCIALES Y TIENDA',
    brandsHeading: 'MARCAS CON LAS QUE COLABORÉ',
    contactHeading: 'CONTACTO PARA PROMO',
    copyHint: 'Haz clic en el correo para copiar',
    copied: '¡Correo copiado!',
    openMail: 'Abrir aplicación de correo ↗'
  },
  fr: {
    subtitle: 'EDITS DE FOOTBALL',
    socialsHeading: 'RÉSEAUX SOCIAUX & BOUTIQUE',
    brandsHeading: 'MARQUES PARTENAIRES',
    contactHeading: 'CONTACT PROMO',
    copyHint: "Cliquez sur l'e-mail pour copier",
    copied: 'E-mail copié !',
    openMail: 'Ouvrir l’application mail ↗'
  }
};

let currentLang = 'en';

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

  // Default to English
  applyLanguage('en');

  // Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Copy email functionality
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
