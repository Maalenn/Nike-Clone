var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-bar").style.top = "0";
    document.querySelector(".nav-joinUs").classList.add("show")
    document.querySelector(".nav-joinUs").classList.remove("hide")
  } else {
    document.querySelector(".nav-bar").style.top = "-95px";
    document.querySelector(".nav-joinUs").classList.add("hide")
    document.querySelector(".nav-joinUs").classList.remove("show")
  }
  prevScrollpos = currentScrollPos;
};
let currentSlide = [];

function pushArrow(carouselIndex, n) {
  const carousels = document.querySelectorAll(".slideShow");

  if (!currentSlide[carouselIndex]) {
    currentSlide[carouselIndex] = 0;
  }

  const carousel = carousels[carouselIndex];
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;

  currentSlide[carouselIndex] = Math.max(0, Math.min(currentSlide[carouselIndex] + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide[carouselIndex] * imageWidth, behavior: "smooth" });
}

function openNav() {
  document.querySelector(".nav-hamburger").classList.add("openNavBar");
  document.querySelector(".nav-hamburger").classList.remove("closeNavBar");
  document.querySelector("html").classList.add("overflow-y-hidden")
  document.getElementById('background-blur').classList.remove('hidden');
}
function closeNav() {
  document.querySelector(".nav-hamburger").classList.add("closeNavBar");
  document.querySelector(".nav-hamburger").classList.remove("openNavBar");
  document.querySelector("html").classList.remove("overflow-y-hidden")
  document.getElementById('background-blur').classList.add('hidden');
}
let accordionBtn = document.querySelectorAll("#accordion-btn");
let accordionDropdown = document.querySelectorAll("#accordion-dropdown");
let plusIcon = document.querySelectorAll("#plus-icon");
let closeIcon = document.querySelectorAll("#close-icon");
accordionBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    accordionDropdown[i].classList.toggle("max-h-[300px]");
    plusIcon[i].classList.toggle("hidden");
    closeIcon[i].classList.toggle("hidden");
  });
});
