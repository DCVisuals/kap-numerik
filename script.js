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
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-btn.next");
  const prevButton = document.querySelector(".carousel-btn.prev");
  const slideWidth = slides[0].getBoundingClientRect().width + 16;

  let currentSlideIndex = 0;

  const updateSlidePosition = () => {
    const offset = slideWidth * currentSlideIndex;
    track.style.transform = `translateX(-${offset}px)`;
  };

  nextButton.addEventListener("click", () => {
    if (currentSlideIndex < slides.length - 3) {
      currentSlideIndex++;
      updateSlidePosition();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlidePosition();
    }
  });
});
