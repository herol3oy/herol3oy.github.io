(function () {
  'use strict';

  var revealAll = function () {
    var all = document.querySelectorAll('.reveal');
    for (var i = 0; i < all.length; i++) {
      all[i].classList.add('is-visible');
    }
  };

  var year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var reduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  var targets = document.querySelectorAll('[data-reveal]');
  for (var i = 0; i < targets.length; i++) {
    observer.observe(targets[i]);
  }

  var hero = document.querySelectorAll('.hero .reveal');
  for (var j = 0; j < hero.length; j++) {
    hero[j].classList.add('is-visible');
  }
})();
