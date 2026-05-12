/* ============================================================
   NEXTI — main.js
   fullPage.js + GSAP animations per section
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

// ─── helpers ────────────────────────────────────────────────
function animateIn(targets, vars, staggerBase) {
  gsap.to(targets, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.9,
    ease: 'power3.out',
    stagger: staggerBase || 0,
    ...vars
  });
}

// ─── Animations per section ─────────────────────────────────
// ── Title animation: fast blur + subtle rise ────────────────
function titleReveal() {
  return { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.65, ease: 'power3.out' };
}

// ── Text animation: slower blur dissolve ────────────────────
function textReveal() {
  return { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.0, ease: 'power3.out' };
}

function animHero() {
  const tl = gsap.timeline();
  tl.to('#hero-logo',       { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.55, ease: 'power3.out' })
    .to('#hero-tagline',    titleReveal(),                                                    '-=0.2')
    .to('#hero-sub',        textReveal(),                                                     '-=0.5')
    .to('#hero-actions',    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },         '-=0.7')
    .to('#scroll-indicator',{ opacity: 1, duration: 0.5, ease: 'power2.out' },               '-=0.3');
}

function animServidores() {
  const tl = gsap.timeline();
  tl.to('#srv-badge',       { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'back.out(1.7)' })
    .to('#srv-title',       titleReveal(),                                                    '-=0.15')
    .to('#srv-text',        textReveal(),                                                     '-=0.5')
    .to('#srv-features li', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.45,
                              stagger: 0.08, ease: 'power2.out' },                           '-=0.7')
    .to('#srv-btn',         { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },        '-=0.2');
}

function animRedes() {
  const tl = gsap.timeline();
  tl.to('#net-badge',       { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'back.out(1.7)' })
    .to('#net-title',       titleReveal(),                                                    '-=0.15')
    .to('#net-text',        textReveal(),                                                     '-=0.5')
    .to('#net-features li', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.45,
                              stagger: 0.08, ease: 'power2.out' },                           '-=0.7')
    .to('#net-btn',         { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },        '-=0.2');
}

function animInfra() {
  const tl = gsap.timeline();
  tl.to('#inf-badge',       { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'back.out(1.7)' })
    .to('#inf-title',       titleReveal(),                                                    '-=0.15')
    .to('#inf-text',        textReveal(),                                                     '-=0.5')
    .to('#inf-features li', { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.45,
                              stagger: 0.08, ease: 'power2.out' },                           '-=0.7')
    .to('#inf-btn',         { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },        '-=0.2');
}

function animContato() {
  const tl = gsap.timeline();
  tl.to('#ct-title',       titleReveal())
    .to('#ct-sub',         textReveal(),                                                      '-=0.5')
    .to('#ct-cards',       { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },          '-=0.6')
    .to('.contact-card',   { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.4,
                             stagger: 0.1, ease: 'back.out(1.4)' },                          '-=0.5')
    .to('#ct-footer',      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },          '-=0.2');
}

// Map index → animation function
const sectionAnims = [animHero, animServidores, animRedes, animInfra, animContato];

// Track which sections have been animated (so we only run once)
const animated = new Set();

function runAnim(index) {
  if (animated.has(index)) return;
  animated.add(index);
  const fn = sectionAnims[index];
  if (fn) {
    // afterLoad already fires post-transition — minimal delay just to let browser paint
    setTimeout(fn, 30);
  }
}

// ─── Set initial hidden states for all animated elements ────
function setInitialStates() {
  // Hero
  gsap.set('#hero-logo',        { opacity: 0, filter: 'blur(8px)', y: 20 });
  gsap.set('#hero-tagline',     { opacity: 0, filter: 'blur(6px)', y: 25 });
  gsap.set('#hero-sub',         { opacity: 0, filter: 'blur(14px)', y: 15 });
  gsap.set('#hero-actions',     { opacity: 0, y: 25 });
  gsap.set('#scroll-indicator', { opacity: 0 });

  // Servidores
  gsap.set('#srv-badge',        { opacity: 0, scale: 0.6, filter: 'blur(8px)' });
  gsap.set('#srv-title',        { opacity: 0, filter: 'blur(6px)', y: 25 });
  gsap.set('#srv-text',         { opacity: 0, filter: 'blur(14px)', y: 15 });
  gsap.set('#srv-features li',  { opacity: 0, filter: 'blur(8px)', y: 10 });
  gsap.set('#srv-btn',          { opacity: 0, y: 20 });

  // Redes
  gsap.set('#net-badge',        { opacity: 0, scale: 0.6, filter: 'blur(8px)' });
  gsap.set('#net-title',        { opacity: 0, filter: 'blur(6px)', y: 25 });
  gsap.set('#net-text',         { opacity: 0, filter: 'blur(14px)', y: 15 });
  gsap.set('#net-features li',  { opacity: 0, filter: 'blur(8px)', y: 10 });
  gsap.set('#net-btn',          { opacity: 0, y: 20 });

  // Infraestrutura
  gsap.set('#inf-badge',        { opacity: 0, scale: 0.6, filter: 'blur(8px)' });
  gsap.set('#inf-title',        { opacity: 0, filter: 'blur(6px)', y: 25 });
  gsap.set('#inf-text',         { opacity: 0, filter: 'blur(14px)', y: 15 });
  gsap.set('#inf-features li',  { opacity: 0, filter: 'blur(8px)', y: 10 });
  gsap.set('#inf-btn',          { opacity: 0, y: 20 });

  // Contato
  gsap.set('#ct-title',         { opacity: 0, filter: 'blur(6px)', y: 25 });
  gsap.set('#ct-sub',           { opacity: 0, filter: 'blur(14px)', y: 15 });
  gsap.set('#ct-cards',         { opacity: 0, y: 20 });
  gsap.set('.contact-card',     { opacity: 0, filter: 'blur(6px)', y: 15 });
  gsap.set('#ct-footer',        { opacity: 0, y: 20 });
}

// ─── fullPage.js init ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  setInitialStates();

  new fullpage('#fullpage', {
    anchors:            ['hero', 'servidores', 'redes', 'infraestrutura', 'contato'],
    menu:               '#navbar',
    navigation:         true,
    navigationPosition: 'right',
    navigationTooltips: ['Início', 'Servidores', 'Redes', 'Infraestrutura', 'Contato'],
    showActiveTooltip:  true,
    scrollingSpeed:     1100,
    easingcss3:         'cubic-bezier(0.77, 0, 0.175, 1)',
    css3:               true,
    fitToSection:       true,
    scrollOverflow:     true,

    afterLoad: function (origin, destination, direction) {
      const idx = destination.index;

      // Mark bg zoom active
      document.querySelectorAll('.fp-section').forEach(s => s.classList.remove('active'));
      destination.item.classList.add('active');

      // Navbar style
      const navbar = document.getElementById('navbar');
      if (idx === 0) {
        navbar.classList.remove('scrolled');
      } else {
        navbar.classList.add('scrolled');
      }

      runAnim(idx);
    }
  });

  // Run hero on load
  runAnim(0);
  document.querySelector('#section-hero').classList.add('active');

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    this.classList.toggle('active');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // ─── Pull-to-refresh (mobile, hero only) ──────────────────
  initPullToRefresh();
});

// ─── Pull-to-refresh ─────────────────────────────────────────
function initPullToRefresh() {
  // Only on touch devices
  if (!('ontouchstart' in window)) return;

  const THRESHOLD   = 80;   // px to drag before triggering reload
  const MAX_PULL    = 120;  // max visual pull distance
  let currentSection = 0;

  // Track current section index via fullPage API
  document.addEventListener('fp:afterLoad', (e) => {
    currentSection = e.detail?.destination?.index ?? 0;
  });
  // Also hook into the afterLoad via a MutationObserver on .fp-section.active
  const fpSections = document.querySelectorAll('.fp-section');
  const sectionObs = new MutationObserver(() => {
    fpSections.forEach((s, i) => {
      if (s.classList.contains('active')) currentSection = i;
    });
  });
  fpSections.forEach(s => sectionObs.observe(s, { attributes: true, attributeFilter: ['class'] }));

  // Create indicator element
  const indicator = document.createElement('div');
  indicator.id = 'ptr-indicator';
  indicator.innerHTML = `
    <div id="ptr-spinner"></div>
    <span id="ptr-label">Solte para atualizar</span>
  `;
  document.body.appendChild(indicator);

  let touchStartY = 0;
  let pulling     = false;
  let triggered   = false;

  document.addEventListener('touchstart', (e) => {
    if (currentSection !== 0) return;
    touchStartY = e.touches[0].clientY;
    pulling     = false;
    triggered   = false;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (currentSection !== 0) return;

    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY <= 0) {
      // Swiping up — reset
      resetIndicator();
      return;
    }

    pulling = true;
    const pull = Math.min(deltaY * 0.5, MAX_PULL); // dampen movement

    // Show and move indicator
    indicator.style.transform = `translateX(-50%) translateY(${pull}px)`;
    indicator.style.opacity   = String(Math.min(pull / THRESHOLD, 1));

    if (pull >= THRESHOLD * 0.7) {
      indicator.classList.add('ptr-ready');
    } else {
      indicator.classList.remove('ptr-ready');
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!pulling || triggered) return;

    const indicatorY = parseFloat(indicator.style.transform.match(/translateY\(([^)]+)px\)/)?.[1] || 0);

    if (indicatorY >= THRESHOLD * 0.5) {
      triggered = true;
      indicator.classList.add('ptr-loading');
      document.getElementById('ptr-label').textContent = 'Atualizando…';

      // Short delay so the user sees the spinner
      setTimeout(() => window.location.reload(), 600);
    } else {
      resetIndicator();
    }
  }, { passive: true });

  function resetIndicator() {
    pulling = false;
    indicator.style.transform = 'translateX(-50%) translateY(0px)';
    indicator.style.opacity   = '0';
    indicator.classList.remove('ptr-ready', 'ptr-loading');
  }
}

// ─── Custom Cursor ────────────────────────────────────────────
function initCustomCursor() {
  // Não roda em dispositivos touch
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  let isHovered = false;

  // Segue o mouse em tempo real (dot) + lag para o ring
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // RAF loop: dot segue instantâneo, ring com lerp suave
  (function render() {
    // Dot: posição direta
    gsap.set(dot, { x: mouseX, y: mouseY });

    if (!isHovered) {
      // Ring: interpolação suave (lerp factor 0.12)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
    }

    requestAnimationFrame(render);
  })();

  // ── Hover sobre elementos interativos ──
  const hoverTargets = document.querySelectorAll(
    'a, button, .btn, .contact-card, .service-badge, .nav-hamburger, #fp-nav ul li a'
  );

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      isHovered = true;
      dot.classList.add('is-hovered');
      ring.classList.add('is-hovered');

      const box = el.getBoundingClientRect();
      const cx  = box.left + box.width / 2;
      const cy  = box.top  + box.height / 2;
      const size = Math.max(box.width, box.height) * 1.1;

      gsap.to(ring, {
        duration: 0.25,
        x: cx,
        y: cy,
        width: size,
        height: size,
        ease: 'power2.out'
      });
    });

    el.addEventListener('mouseleave', () => {
      isHovered = false;
      dot.classList.remove('is-hovered');
      ring.classList.remove('is-hovered');

      gsap.to(ring, {
        duration: 0.35,
        width: 36,
        height: 36,
        ease: 'back.out(1.5)'
      });
    });
  });

  // Desaparece ao sair da janela
  document.addEventListener('mouseleave', () => {
    gsap.to([dot, ring], { duration: 0.3, opacity: 0 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([dot, ring], { duration: 0.3, opacity: 1 });
  });
}

// Chama initCustomCursor dentro do DOMContentLoaded (já definido acima)
// Não podemos reabrir o evento, então chamamos logo após:
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomCursor);
} else {
  initCustomCursor();
}

