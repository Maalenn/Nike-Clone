var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-bar").style.top = "0";
  } else {
    document.querySelector(".nav-bar").style.top = "-115px";
  }
  prevScrollpos = currentScrollPos;
};

const slideShow = function () {
  document.query;
};

function openNav() {
  document.querySelector(".nav-hamburger").classList.add("openNavBar");
  document.querySelector(".nav-hamburger").classList.remove("closeNavBar");
}
function closeNav() {
  document.querySelector(".nav-hamburger").classList.add("closeNavBar");
  document.querySelector(".nav-hamburger").classList.remove("openNavBar");
}

let currentSlide = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;

  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: "smooth" });
}
