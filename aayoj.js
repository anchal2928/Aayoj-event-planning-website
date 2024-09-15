let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-inner .vendor');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

var overlay = document.getElementById("overlay");

function toggleOverlay() {
    overlay.classList.toggle("active");
   }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }