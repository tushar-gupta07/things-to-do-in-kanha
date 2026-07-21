/* Things to Do in Kanha National Park — Interactions */

(function(){
  // Mobile menu toggle
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu after click (mobile)
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }

  // Active section highlight in nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.menu a[href^="#"]');
  if('IntersectionObserver' in window && sections.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, {rootMargin:'-45% 0px -45% 0px'});
    sections.forEach(s => io.observe(s));
  }

  // Back to top via logo
  document.querySelectorAll('.logo').forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });
})();
