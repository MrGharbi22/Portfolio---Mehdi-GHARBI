/* ===== TRANSLATIONS ===== */
const translations = {
  en: {
    nav: { home: "HOME", about: "ABOUT", projects: "PROJECTS", testimonial: "TESTIMONIAL", contact: "CONTACT" },
    hero: { lines: ["MY", "ARTISTIC", "PLAYGROUND."], topNav: ["HOME", "DIGITAL", "AND FILM", "PHOTOGRAPHY"], year: "2 0 2 1  —  2 0 2 5" },
    projects: { photography: "Photography", videography: "Videography", film: "FILM", digital: "DIGITAL" },
    photo: { learnMore: "LEARN MORE", filmPhotography: "film photography", digitalPhotography: "digital photography" },
    video: { all: "All", vertical: "Vertical", horizontal: "Horizontal" },
    about: {
      title: "ABOUT",
      philosophyLabel: "01 — PHILOSOPHY",
      philosophyTitle: ["SEEING", "BEYOND", "THE FRAME"],
      philosophyP1: "A visual storyteller exploring the boundaries between digital and film photography. My work captures the raw essence of moments — the textures of time, the weight of memory, and the quiet poetry found in everyday life.",
      philosophyP2: "Based in Brest, France, I draw inspiration from the landscapes, people, and stories that surround me. Each project is an experiment in seeing / finding beauty in the overlooked, meaning in the mundane.",
      approachLabel: "02 — APPROACH",
      approachTitle: ["HONEST,", "INTIMATE,", "PERSONAL"],
      approachText: "Whether shooting on film or digital, my approach remains the same: raw, intentional, and deeply personal. I believe every frame should breathe — carrying the atmosphere of the moment it was born in.",
      expertiseLabel: "03 — EXPERTISE",
      cta: "LET'S CREATE SOMETHING TOGETHER",
      ctaButton: "GET IN TOUCH",
      stats: [{ label: "Years of Experience", value: "4+" }, { label: "Projects Completed", value: "30+" }, { label: "Countries Explored", value: "5" }],
      skills: ["Film Photography", "Digital Photography", "Videography", "Color Grading", "Post-Production", "Art Direction"],
    },
    contact: {
      title: "CONTACT", emailLabel: "01 — EMAIL", socialLabel: "02 — SOCIAL", locationLabel: "03 — LOCATION",
      location: "Brest, France", sayHello: "SAY HELLO", nameField: "YOUR NAME", emailField: "YOUR EMAIL", messageField: "YOUR MESSAGE", send: "SEND MESSAGE",
      sending: "SENDING...", sent: "MESSAGE SENT — I'LL GET BACK TO YOU SOON",
    },
    testimonial: {
      title: "WORDS", cta: "WANT TO BE PART OF THE STORY?", ctaButton: "WORK WITH ME",
      items: [
        { quote: "An extraordinary eye for capturing the invisible threads between moments. Every photograph tells a story that words cannot.", author: "Sarah M.", role: "Art Director" },
        { quote: "The raw authenticity in every shot is remarkable. Working with this artist changed how I see photography entirely.", author: "Ahmed K.", role: "Gallery Curator" },
        { quote: "There's a timelessness to this work that transcends the medium. Film or digital — the soul of the image always shines through.", author: "Marie L.", role: "Creative Director" },
      ],
    },
    footer: {
      brand1: "MEHDI", brand2: "GHARBI.",
      navigation: "NAVIGATION", connect: "CONNECT",
      copyright: "©2025 MEHDI GHARBI — ALL RIGHTS RESERVED", tagline: "DESIGNED & BUILT WITH ♡",
      links: ["Home", "About", "Projects", "Testimonial", "Contact"],
    },
    marquee: "PHOTOGRAPHY — VIDEOGRAPHY — FILM — DIGITAL — ART DIRECTION — ",
  },
  fr: {
    nav: { home: "ACCUEIL", about: "À PROPOS", projects: "PROJETS", testimonial: "TÉMOIGNAGES", contact: "CONTACT" },
    hero: { lines: ["MON", "TERRAIN DE JEU", "ARTISTIQUE."], topNav: ["ACCUEIL", "NUMÉRIQUE", "ET FILM", "PHOTOGRAPHIE"], year: "2 0 2 1  —  2 0 2 5" },
    projects: { photography: "Photographie", videography: "Vidéographie", film: "FILM", digital: "NUMÉRIQUE" },
    photo: { learnMore: "EN SAVOIR PLUS", filmPhotography: "photographie film", digitalPhotography: "photographie numérique" },
    video: { all: "Tout", vertical: "Vertical", horizontal: "Horizontal" },
    about: {
      title: "À PROPOS",
      philosophyLabel: "01 — PHILOSOPHIE",
      philosophyTitle: ["VOIR", "AU-DELÀ", "DU CADRE"],
      philosophyP1: "Un conteur visuel explorant les frontières entre la photographie numérique et argentique. Mon travail capture l'essence brute des moments — les textures du temps, le poids de la mémoire, et la poésie silencieuse du quotidien.",
      philosophyP2: "Basé à Brest, France, je m'inspire des paysages, des gens et des histoires qui m'entourent. Chaque projet est une expérience de regard — trouver la beauté dans l'oublié, le sens dans le banal.",
      approachLabel: "02 — APPROCHE",
      approachTitle: ["HONNÊTE,", "INTIME,", "PERSONNEL"],
      approachText: "Que ce soit en argentique ou en numérique, mon approche reste la même : brute, intentionnelle et profondément personnelle. Je crois que chaque image doit respirer — portant l'atmosphère du moment où elle est née.",
      expertiseLabel: "03 — EXPERTISE",
      cta: "CRÉONS QUELQUE CHOSE ENSEMBLE",
      ctaButton: "ME CONTACTER",
      stats: [{ label: "Années d'Expérience", value: "4+" }, { label: "Projets Réalisés", value: "30+" }, { label: "Pays Explorés", value: "5" }],
      skills: ["Photographie Argentique", "Photographie Numérique", "Vidéographie", "Étalonnage", "Post-Production", "Direction Artistique"],
    },
    contact: {
      title: "CONTACT", emailLabel: "01 — EMAIL", socialLabel: "02 — RÉSEAUX", locationLabel: "03 — LOCALISATION",
      location: "Brest, France", sayHello: "DITES BONJOUR", nameField: "VOTRE NOM", emailField: "VOTRE EMAIL", messageField: "VOTRE MESSAGE", send: "ENVOYER",
      sending: "ENVOI EN COURS...", sent: "MESSAGE ENVOYÉ — JE VOUS RECONTACTERAI BIENTÔT",
    },
    testimonial: {
      title: "TÉMOIGNAGES", cta: "ENVIE DE FAIRE PARTIE DE L'HISTOIRE ?", ctaButton: "TRAVAILLER AVEC MOI",
      items: [
        { quote: "Un regard extraordinaire pour capturer les fils invisibles entre les moments. Chaque photographie raconte une histoire que les mots ne peuvent pas.", author: "Sarah M.", role: "Directrice Artistique" },
        { quote: "L'authenticité brute dans chaque cliché est remarquable. Travailler avec cet artiste a changé ma vision de la photographie.", author: "Ahmed K.", role: "Curateur de Galerie" },
        { quote: "Il y a une intemporalité dans ce travail qui transcende le médium. Argentique ou numérique — l'âme de l'image brille toujours.", author: "Marie L.", role: "Directrice Créative" },
      ],
    },
    footer: {
      brand1: "MEHDI", brand2: "GHARBI.",
      navigation: "NAVIGATION", connect: "CONNEXION",
      copyright: "©2025 MEHDI GHARBI — TOUS DROITS RÉSERVÉS", tagline: "CONÇU & CONSTRUIT AVEC ♡",
      links: ["Accueil", "À Propos", "Projets", "Témoignages", "Contact"],
    },
    marquee: "PHOTOGRAPHIE — VIDÉOGRAPHIE — FILM — NUMÉRIQUE — DIRECTION ARTISTIQUE — ",
  },
};

/* ===== STATE ===== */
let currentLang = localStorage.getItem("lang") || "en";
if (currentLang !== "en" && currentLang !== "fr") currentLang = "en";
function t() { return translations[currentLang]; }

/* ===== SMOOTH SCROLL (Lenis) ===== */
function initSmoothScroll() {
  if (typeof Lenis === "undefined") return;
  const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier: 2 });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

/* ===== PREMIUM 2-LAYER CURSOR ===== */
function initCursor() {
  const ring = document.getElementById("cursor-ring");
  const dot = document.getElementById("cursor-dot");
  if (!ring || !dot || window.innerWidth < 768) return;

  let mX = -200, mY = -200;
  let rX = -200, rY = -200;
  let dX = -200, dY = -200;
  const halfRing = 18, halfDot = 2.5;

  document.addEventListener("mousemove", (e) => { mX = e.clientX; mY = e.clientY; });

  function animate() {
    // Ring: slower spring (lazy follow)
    rX += (mX - halfRing - rX) * 0.30;
    rY += (mY - halfRing - rY) * 0.30;
    ring.style.transform = `translate3d(${rX}px,${rY}px,0)`;
    // Dot: fast follow
    dX += (mX - halfDot - dX) * 0.55;
    dY += (mY - halfDot - dY) * 0.55;
    dot.style.transform = `translate3d(${dX}px,${dY}px,0)`;
    requestAnimationFrame(animate);
  }
  animate();

  const hoverTargets = "a, button, [role='button'], .img-zoom, .cursor-view, .video-card, .carousel-btn, .carousel-dot, .grid-img";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) { ring.classList.add("active"); dot.classList.add("active"); }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) { ring.classList.remove("active"); dot.classList.remove("active"); }
  });
}

/* ===== SCROLL PROGRESS ===== */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = h > 0 ? `scaleX(${window.scrollY / h})` : "scaleX(0)";
  }, { passive: true });
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => { btn.classList.toggle("open"); menu.classList.toggle("open"); document.body.style.overflow = menu.classList.contains("open") ? "hidden" : ""; });
  menu.querySelectorAll("a").forEach((a) => { a.addEventListener("click", () => { btn.classList.remove("open"); menu.classList.remove("open"); document.body.style.overflow = ""; }); });
}

/* ===== PAGE TRANSITIONS ===== */
function initPageTransitions() {
  const overlay = document.querySelector(".page-transition");
  if (!overlay) return;
  // Detect incoming direction from sessionStorage
  const inDir = sessionStorage.getItem("transitionDir") || "v";
  sessionStorage.removeItem("transitionDir");
  overlay.classList.add(inDir === "h" ? "leaving-h" : "leaving");
  overlay.addEventListener("animationend", function handler() {
    overlay.classList.remove("leaving", "leaving-h");
    overlay.removeEventListener("animationend", handler);
  });
  // Intercept internal links
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto")) return;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const isHorizontal = link.dataset.transitionDir === "h" ||
        (document.body.dataset.page === "home" && (href.includes("projects") || href.startsWith("projects")));
      if (isHorizontal) {
        sessionStorage.setItem("transitionDir", "h");
        overlay.classList.add("entering-h");
      } else {
        overlay.classList.add("entering");
      }
      setTimeout(() => { window.location.href = href; }, 700);
    });
  });
  // Hero click — horizontal
  const hero = document.querySelector(".hero[data-dest]");
  if (hero) {
    hero.addEventListener("click", () => {
      sessionStorage.setItem("transitionDir", "h");
      overlay.classList.add("entering-h");
      setTimeout(() => { window.location.href = hero.dataset.dest; }, 700);
    });
  }
}

/* ===== LANGUAGE SWITCH ===== */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updateTranslations();
}

function updateTranslations() {
  const tr = t();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = key.split(".").reduce((obj, k) => obj && obj[k], tr);
    if (val !== undefined && typeof val === "string") el.textContent = val;
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => { btn.classList.toggle("active", btn.dataset.lang === currentLang); });
  document.querySelectorAll(".mobile-lang-switcher button").forEach((btn) => {
    const isActive = btn.dataset.lang === currentLang;
    btn.style.opacity = isActive ? "1" : "0.4";
    btn.style.borderBottom = isActive ? "1px solid var(--fg)" : "none";
  });
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-btn, .mobile-lang-switcher button").forEach((btn) => { btn.addEventListener("click", () => setLanguage(btn.dataset.lang)); });
  updateTranslations();
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal:not(.visible)");
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  reveals.forEach((el) => observer.observe(el));
}

/* ===== LIGHTBOX ===== */
let lightboxImages = [], lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images; lightboxIndex = index;
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
  updateLightbox();
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.style.overflow = "";
}
function updateLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.querySelector(".lightbox-counter").textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  const img = lb.querySelector(".lightbox-img");
  img.style.opacity = "0";
  setTimeout(() => { img.src = lightboxImages[lightboxIndex]; img.style.opacity = "1"; }, 150);
}
function lightboxNext() { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; updateLightbox(); }
function lightboxPrev() { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; updateLightbox(); }
function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lightbox-nav.prev").addEventListener("click", (e) => { e.stopPropagation(); lightboxPrev(); });
  lb.querySelector(".lightbox-nav.next").addEventListener("click", (e) => { e.stopPropagation(); lightboxNext(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "ArrowLeft") lightboxPrev();
  });
}

/* ===== VIDEO LIGHTBOX ===== */
function openVideoLightbox(orientation, videoUrl) {
  const vl = document.getElementById("video-lightbox");
  if (!vl) return;
  const content = vl.querySelector(".video-content");
  content.className = "video-content";
  const isVertical = orientation === "vertical";
  const style = isVertical
    ? "height:85vh;aspect-ratio:9/16;border:none;display:block;margin:auto"
    : "width:85vw;max-width:1200px;aspect-ratio:16/9;border:none;display:block;margin:auto";

  if (videoUrl && videoUrl.endsWith('.mp4')) {
    // Local mp4 file — use <video> tag
    content.innerHTML = `<video src="${videoUrl}" style="${style}" controls autoplay playsinline></video>`;
  } else if (videoUrl && !videoUrl.includes('XXXXXXX')) {
    // YouTube / Vimeo embed
    content.innerHTML = `<iframe src="${videoUrl}?autoplay=1" style="${style}" allow="autoplay;fullscreen" allowfullscreen></iframe>`;
  } else {
    content.innerHTML = `<p style="color:rgba(245,240,235,.5);font-family:var(--font-display);letter-spacing:.35em;font-size:.8rem">COMING SOON</p>`;
  }
  vl.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeVideoLightbox() {
  const vl = document.getElementById("video-lightbox");
  if (!vl) return;
  vl.querySelector(".video-content").innerHTML = "";
  vl.classList.remove("open");
  document.body.style.overflow = "";
}
function initVideoLightbox() {
  const vl = document.getElementById("video-lightbox");
  if (!vl) return;
  vl.addEventListener("click", (e) => { if (e.target === vl) closeVideoLightbox(); });
  vl.querySelector(".lightbox-close").addEventListener("click", closeVideoLightbox);
  document.addEventListener("keydown", (e) => { if (vl.classList.contains("open") && e.key === "Escape") closeVideoLightbox(); });
}

/* ===== EMAILJS ===== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector(".submit-btn");
    const successMsg = form.querySelector(".form-success");
    const tr = t();
    btn.textContent = tr.contact.sending;
    btn.disabled = true;
    try {
      // EmailJS — replace these with your real IDs
      if (typeof emailjs !== "undefined") {
        await emailjs.sendForm("service_wez319g", "template_7kr60vf", form);
      }
      btn.textContent = tr.contact.send;
      btn.disabled = false;
      form.reset();
      if (successMsg) { successMsg.textContent = tr.contact.sent; successMsg.classList.add("show"); setTimeout(() => successMsg.classList.remove("show"), 5000); }
    } catch (err) {
      btn.textContent = tr.contact.send;
      btn.disabled = false;
      console.error("EmailJS error:", err);
    }
  });
}

/* ===== LOADING SCREEN ===== */
function initLoadingScreen() {
  const ls = document.querySelector(".loading-screen");
  if (!ls) return;
  const bar = ls.querySelector(".progress-bar");
  const text = ls.querySelector(".progress-text");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    if (progress >= 100) { progress = 100; clearInterval(interval); setTimeout(() => ls.classList.add("done"), 600); }
    const p = Math.min(Math.round(progress), 100);
    bar.style.width = p + "%";
    text.textContent = p + "%";
  }, 120);
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initCursor();
  initScrollProgress();
  initMobileMenu();
  initLangSwitcher();
  initScrollReveal();
  initLightbox();
  initVideoLightbox();
  initContactForm();
  initLoadingScreen();
  // Page transitions — init after a small delay to let page render
  requestAnimationFrame(() => initPageTransitions());
});

/* ===== STAGGERED IMAGE REVEAL ===== */
function initImageReveal() {
  const items = document.querySelectorAll('.image-grid-3 .grid-img, .mosaic-grid .mosaic-item, .bottom-gallery .gallery-item');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((el) => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initImageReveal);

/* ===== UNIVERSAL CAROUSEL ===== */
function initCarousel(wrapId, trackId, prevId, nextId, dotsId, counterId, autoplay) {
  const wrap = document.getElementById(wrapId);
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  const dotsWrap = document.getElementById(dotsId);
  const counter = document.getElementById(counterId);
  if (!wrap || !track) return;

  const slides = Array.from(track.children);
  let current = 0;
  let isDragging = false, startX = 0, dragDelta = 0;
  let autoTimer = null;
  const total = slides.length;

  // Build dots
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i+1));
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    });
  }

  function updateCounter() {
    if (counter) counter.textContent = String(current+1).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
  }

  function goTo(idx) {
    slides[current].classList.remove('active');
    if (dotsWrap) dotsWrap.children[current].classList.remove('active');
    current = (idx + total) % total;
    slides[current].classList.add('active');
    if (dotsWrap) dotsWrap.children[current].classList.add('active');
    track.style.transform = `translateX(-${current * 100}%)`;
    updateCounter();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { resetAuto(); goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { resetAuto(); goTo(current + 1); });

  // Keyboard nav when hovered
  wrap.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });
  wrap.setAttribute('tabindex', '0');

  // Drag/swipe
  function onDragStart(x) { isDragging = true; startX = x; dragDelta = 0; wrap.style.cursor = 'grabbing'; }
  function onDragMove(x) {
    if (!isDragging) return;
    dragDelta = x - startX;
    track.style.transform = `translateX(calc(-${current * 100}% + ${dragDelta * 0.4}px))`;
  }
  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    wrap.style.cursor = '';
    if (dragDelta < -50) goTo(current + 1);
    else if (dragDelta > 50) goTo(current - 1);
    else track.style.transform = `translateX(-${current * 100}%)`;
    resetAuto();
  }
  wrap.addEventListener('mousedown', e => onDragStart(e.clientX));
  window.addEventListener('mousemove', e => { if (isDragging) onDragMove(e.clientX); });
  window.addEventListener('mouseup', onDragEnd);
  wrap.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
  wrap.addEventListener('touchmove', e => onDragMove(e.touches[0].clientX), { passive: true });
  wrap.addEventListener('touchend', onDragEnd);

  // Autoplay
  function startAuto() {
    if (!autoplay) return;
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }
  startAuto();
  updateCounter();
}
