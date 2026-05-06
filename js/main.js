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
    scrollOverflow:     false,

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
});
