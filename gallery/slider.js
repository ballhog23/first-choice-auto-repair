const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;

// call slideshow
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(e) {
  let i;
  // if the index of our elements are greater than the max
  if (e > slides.length) {slideIndex = 1}
  // if the index of our elements is less than the min
  if (e < 1) {slideIndex = 11}
  // iterate through collection of slide elements
  for (i = 0; i < slides.length; i++) {
      // hide previous photo
      slides[i].style.display = "none";
  }
  // change dots to current slide
  for (i = 0; i < dots.length; i++) {
      // append active to the class name
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // show the actual slide photo
  slides[slideIndex - 1].style.display = "block";
  // show and highlight the actual slide dot by appending active to the class name
  dots[slideIndex - 1].className += " active";
}