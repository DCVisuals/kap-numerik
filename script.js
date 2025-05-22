document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in, .fade-in-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  elements.forEach(el => observer.observe(el));
});
