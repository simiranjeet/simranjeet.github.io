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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function hamburgur() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
    console.log(menu.style.display)
  if (menu.style.display === "block" ) {
       menu.style.display ="none";
  }else{
    menu.style.display ="block";
  }
}