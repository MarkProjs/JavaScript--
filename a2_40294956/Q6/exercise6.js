let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;

  if (slideIndex >= document.getElementsByClassName("slide").length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = document.getElementsByClassName("slide").length - 1;
  }

  showSlides();
}

showSlides();