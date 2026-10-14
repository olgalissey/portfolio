// Nav behaviour that shared.css depends on: the scrolled (frosted) state,
// and publishing the nav's measured height as --nav-h for sticky offsets.
// index.html has its own larger script and sets these up itself.
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function measureNav() {
    document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
  }
  measureNav();
  window.addEventListener('resize', measureNav);
  // Web fonts can change the logo's rendered height after first paint.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureNav);

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
})();
