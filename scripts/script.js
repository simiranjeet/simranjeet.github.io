document.addEventListener('DOMContentLoaded', function() {
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let index = 0;
const totalSlides = carousel.children.length;

function showSlide(newIndex) {
    index = newIndex;
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

prevButton.addEventListener('click', function() {
    showSlide(index - 1);
});

nextButton.addEventListener('click', function() {
    nextSlide();
});

setInterval(nextSlide, 3000); // Change slide every 3 seconds
});