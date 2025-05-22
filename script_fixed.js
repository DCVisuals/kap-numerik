
document.addEventListener('DOMContentLoaded', () => {
  const scrollToKap = document.querySelector('a[href="#kap"]');
  if (scrollToKap) {
    scrollToKap.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#kap').scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.querySelectorAll(".faq-section details").forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      document.querySelectorAll(".faq-section details").forEach((detail) => {
        if (detail !== targetDetail) detail.removeAttribute("open");
      });
    });
  });
});
