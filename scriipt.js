// JavaScript for slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides[currentSlide].style.opacity = 0;
    slides[index].style.opacity = 1;
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

setInterval(nextSlide, 4000); // Change slide every 5 seconds
