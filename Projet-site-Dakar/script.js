const faqResponseParents = document.querySelectorAll(".FAQ-icon");
const faqReponse = document.querySelectorAll(".FAQ-reponse");

faqResponseParents.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    faqReponse[index].classList.toggle("FAQ-reponse-reveal");
  });
});

const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector("nav");

menuHamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-bar-reveal");
});

// const btnText = document.querySelectorAll(".btn-text");

// btnText.forEach((icon, index) => {
//   icon.addEventListener("mouseover", () => {
//     btnText[index].classList.toggle("btn-text-hover");
//   });
