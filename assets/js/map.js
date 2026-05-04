/* ==========================================================================
   AROOS AL MOHIT — World Routes Map Animation
   ========================================================================== */

'use strict';

(function initWorldMap() {
  const mapContainer = document.querySelector('.world-routes__map-container');
  if (!mapContainer) return;

  // Observe when map enters viewport, then trigger animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateRoutes();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(mapContainer);

  function animateRoutes() {
    const paths = document.querySelectorAll('.route-path');
    paths.forEach((path, i) => {
      setTimeout(() => {
        path.classList.add('drawn');
      }, i * 600);
    });

    // Start dots after paths are drawn
    setTimeout(() => {
      document.querySelectorAll('.route-dot-container').forEach(container => {
        container.classList.add('active');
      });
      startDotAnimations();
    }, paths.length * 600 + 800);
  }

  function startDotAnimations() {
    const dots = document.querySelectorAll('.travelling-dot');
    dots.forEach(dot => {
      animateDotAlongPath(dot);
    });
  }

  function animateDotAlongPath(dotEl) {
    const pathId = dotEl.dataset.path;
    const path   = document.getElementById(pathId);
    if (!path) return;

    const duration  = parseInt(dotEl.dataset.duration) || 4000;
    const delay     = parseInt(dotEl.dataset.delay)    || 0;
    const pathLen   = path.getTotalLength();
    let   startTime = null;
    let   running   = false;

    function animate(timestamp) {
      if (!running) return;
      if (!startTime) startTime = timestamp;

      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeInOut(progress);
      const point    = path.getPointAtLength(eased * pathLen);

      dotEl.setAttribute('cx', point.x);
      dotEl.setAttribute('cy', point.y);
      dotEl.setAttribute('opacity', progress < 0.05 || progress > 0.92 ? progress < 0.05 ? progress / 0.05 : (1 - progress) / 0.08 : 1);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        startTime = null;
        setTimeout(() => { if (running) requestAnimationFrame(animate); }, 800);
      }
    }

    setTimeout(() => {
      running = true;
      requestAnimationFrame(animate);
    }, delay);
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

})();
