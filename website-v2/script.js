// ============================================
// Reveal on scroll using IntersectionObserver
// ============================================
const revealElements = document.querySelectorAll('.reveal-on-scroll');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -80px 0px',
  }
);

revealElements.forEach((el) => observer.observe(el));

// ============================================
// Navigation: add border on scroll
// ============================================
const nav = document.querySelector('.nav');

const handleScroll = () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// ============================================
// Smooth scroll for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
