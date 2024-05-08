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
}
function closeNav() {
  document.querySelector(".nav-hamburger").classList.add("closeNavBar");
  document.querySelector(".nav-hamburger").classList.remove("openNavBar");
  document.querySelector("html").classList.remove("overflow-y-hidden")
}


// const listDrop = document.querySelectorAll("#listDrop");
// const dropDown = document.querySelectorAll("#dropDown");
// const toggleDrop = document.querySelectorAll("#toggleDrop");
// const toggleUp = document.querySelectorAll("#toggleUp");

// console.log(btnDrop);

// listDrop.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     dropDown[i].classList.toggle("h-[100px]");
//     dropDown[i].classList.toggle("opacity-100");
//     toggleDrop[i].classList.toggle("hidden");
//     toggleUp[i].classList.toggle("hidden");
//   });
// });

// dropClick.addEventListener("click", function () {
//   addStyle.style.height = "100px";
//   addStyle.style.opacity = "1";
//   toggleDrop.classList.toggle("hidden");
//   toggleUp.classList.toggle("hidden");
// });

// dropClose.addEventListener("click", function () {
//   addStyle.style.height = "0px";
//   addStyle.style.opacity = "0";
//   toggleDrop.classList.toggle("hidden");
//   toggleUp.classList.toggle("hidden");
// });

// let accordionBtn = document.querySelectorAll("#accordion-btn");
// let accordionDropdown = document.querySelectorAll("#accordion-dropdown");
// let plusIcon = document.querySelectorAll("#plus-icon");
// let closeIcon = document.querySelectorAll("#close-icon");

//Toggle Drobdown sub-info
// let accordionBtn = document.querySelectorAll("#accordion-btn");
// let accordionDropdown = document.querySelectorAll("#accordion-dropdown");
// let plusIcon = document.querySelectorAll("#plus-icon");
// let closeIcon = document.querySelectorAll("#close-icon");
// accordionBtn.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     accordionDropdown[i].classList.toggle("h-[100px]");
//     plusIcon[i].classList.toggle("hidden");
//     closeIcon[i].classList.toggle("hidden");
//   });
// });
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
