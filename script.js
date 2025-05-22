document.addEventListener('DOMContentLoaded', () => {
  const scrollToKap = document.querySelector('a[href="#kap"]');
  if (scrollToKap) {
    scrollToKap.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#kap').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const fadeItems = document.querySelectorAll('.fade-price');
  fadeItems.forEach((el, i) => {
    setTimeout(() => el.style.opacity = 1, 500 + i * 100);
  });
});
