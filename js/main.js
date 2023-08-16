// Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: window.innerWidth >= 767 ? 3 : 1,
  slidesPerGroup: window.innerWidth >= 767 ? 3 : 1,
  spaceBetween: window.innerWidth >= 1124 ? 60 : 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Read More Button
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
let btnText = document.getElementById("show-more");

btnText.addEventListener("click", showMore);

function showMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "...read less";
    moreText.style.display = "inline";
  }
}
// Menu
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".header-links");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Fade Up Animation
AOS.init({
  throttleDelay: 0, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "easein-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});
