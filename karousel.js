var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
  }
  slides[slideIndex-1].classList.add("active");
  slides[slideIndex-1].classList.add("animate-in");
  if (slides[slideIndex-2]) {
      slides[slideIndex-2].classList.add("prev");
      slides[slideIndex-2].classList.add("animate-out");
  }
  if (slides[slideIndex]) {
      slides[slideIndex].classList.add("next");
  }
}
