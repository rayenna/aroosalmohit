/* ==========================================================================
   AROOS AL MOHIT — Main JavaScript
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. Navigation: scroll behaviour + hamburger
   -------------------------------------------------------------------------- */
(function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (!nav) return;

  // Scroll → solid nav
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside tap (mobile)
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
})();

/* --------------------------------------------------------------------------
   2. Scroll Progress Bar
   -------------------------------------------------------------------------- */
(function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* --------------------------------------------------------------------------
   3. Hero: GSAP / CSS entrance animation
   -------------------------------------------------------------------------- */
(function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.hero__label',    { opacity: 1, x: 0,  duration: 0.8, delay: 0.2 })
      .to('.hero__title',    { opacity: 1, y: 0,  duration: 0.9 }, '-=0.4')
      .to('.hero__subtitle', { opacity: 1, y: 0,  duration: 0.9 }, '-=0.5')
      .to('.hero__ctas',     { opacity: 1, y: 0,  duration: 0.8 }, '-=0.5');

    // Subtle parallax on scroll
    gsap.to('.hero__bg', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  } else {
    // Fallback CSS animation
    hero.classList.add('hero-animate-in');
    hero.querySelectorAll('.hero__label, .hero__title, .hero__subtitle, .hero__ctas').forEach(el => {
      el.style.opacity = '1';
    });
  }
})();

/* --------------------------------------------------------------------------
   4. Stats Counter (CountUp.js)
   -------------------------------------------------------------------------- */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  let counted = false;

  const runCounters = () => {
    if (counted) return;
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      counted = true;
      counters.forEach(el => {
        const target = parseFloat(el.dataset.count);
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;

        if (typeof CountUp !== 'undefined') {
          const cu = new CountUp(el, target, {
            duration: 2.5,
            useEasing: true,
            useGrouping: true,
            decimalPlaces: decimals,
          });
          if (!cu.error) cu.start();
        } else {
          // Vanilla fallback
          let start = 0;
          const step = target / 80;
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            el.textContent = decimals ? start.toFixed(decimals) : Math.floor(start);
            if (start >= target) clearInterval(timer);
          }, 25);
        }
      });
    }
  };

  window.addEventListener('scroll', runCounters, { passive: true });
  runCounters();
})();

/* --------------------------------------------------------------------------
   5. AOS Init
   -------------------------------------------------------------------------- */
(function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 50,
    });
  }
})();

/* --------------------------------------------------------------------------
   6. Swiper Carousels
   -------------------------------------------------------------------------- */
(function initSwipers() {
  if (typeof Swiper === 'undefined') return;

  // Vessels carousel
  if (document.querySelector('.vessels-swiper')) {
    new Swiper('.vessels-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: false,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: '.vessels-swiper .swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.vessels-swiper .swiper-button-next',
        prevEl: '.vessels-swiper .swiper-button-prev',
      },
      breakpoints: {
        640:  { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
  }

  // Testimonials carousel
  if (document.querySelector('.testimonials-swiper')) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 6000, disableOnInteraction: false },
      pagination: { el: '.testimonials-swiper .swiper-pagination', clickable: true },
      breakpoints: {
        768:  { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }
})();

/* --------------------------------------------------------------------------
   7. Vanilla Tilt (3D card effect)
   -------------------------------------------------------------------------- */
(function initTilt() {
  if (typeof VanillaTilt === 'undefined') return;
  const cards = document.querySelectorAll('[data-tilt]');
  if (!cards.length) return;
  VanillaTilt.init(cards, {
    max: 8,
    speed: 400,
    glare: true,
    'max-glare': 0.1,
    scale: 1.02,
  });
})();

/* --------------------------------------------------------------------------
   8. Reveal on Scroll (IntersectionObserver)
   -------------------------------------------------------------------------- */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* --------------------------------------------------------------------------
   9. Active nav link highlighting
   -------------------------------------------------------------------------- */
(function initActiveNav() {
  const links = document.querySelectorAll('.nav__link');
  const path  = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (path.endsWith(href) || (href === 'index.html' && (path === '/' || path.endsWith('/')))) {
      link.classList.add('active');
    }
  });
})();

/* --------------------------------------------------------------------------
   10. Contact Form handling (Formspree)
   -------------------------------------------------------------------------- */
(function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        form.style.display = 'none';
        if (success) {
          success.classList.add('show');
        }
      } else {
        const json = await res.json();
        alert(json.error || 'Something went wrong. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
})();

/* --------------------------------------------------------------------------
   11. Hero background zoom-in on load
   -------------------------------------------------------------------------- */
(function initHeroBgZoom() {
  const bg = document.querySelector('.hero__bg');
  if (!bg) return;
  setTimeout(() => { bg.style.transform = 'scale(1)'; }, 100);
})();

/* --------------------------------------------------------------------------
   12. Smooth anchor scrolling
   -------------------------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
