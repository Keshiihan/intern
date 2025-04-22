let currentSlide = 0;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const cards = track.querySelectorAll('.review-card');
  const cardWidth = cards[0].offsetWidth;
  const gap = 0; 

  
  track.style.transform = `translateX(-${(cardWidth + gap) * currentSlide}px)`;
}

function nextSlide() {
  const track = document.getElementById('carouselTrack');
  const totalSlides = track.querySelectorAll('.review-card').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  const track = document.getElementById('carouselTrack');
  const totalSlides = track.querySelectorAll('.review-card').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
