  const fadeItems = document.querySelectorAll('.fade-price');
  fadeItems.forEach((el, i) => {
    setTimeout(() => el.style.opacity = 1, 500 + i * 100);
  });
});

  let currentSlideIndex = 0;

  const updateSlidePosition = () => {
    const offset = slideWidth * currentSlideIndex;
    track.style.transform = `translateX(-${offset}px)`;
  };

  nextButton.addEventListener("click", () => {
    if (currentSlideIndex < slides.length - 2) {
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
document.querySelectorAll(".faq-section details").forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    document.querySelectorAll(".faq-section details").forEach((detail) => {
      if (detail !== targetDetail) detail.removeAttribute("open");
    });
  });
});
