// function for sccroll bar
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