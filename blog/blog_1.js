const body = document.querySelector("body");
const hamburgerWrapper = document.querySelector(".hamburga");
const hamburger = document.querySelector("#hamburger");
const cancel = document.querySelector("#cancel");
const contact = document.querySelector(".contactus");
const readMore = document.querySelector(".read-more");
const Read = document.querySelector(".continue-read");
const menuIcons = document.querySelector(".menuicons");
const navRespond = document.querySelector("#navrespond");
const html = document.documentElement;
const hideFirst = document.querySelectorAll(".hide-first");

function closeNav(e) {
  e.preventDefault();
  menuIcons.classList.remove("activer");
  navRespond.classList.remove("active");
  hamburger.classList.remove("disabled");
  cancel.classList.remove("active");
}

body.addEventListener("click", closeNav);

hamburgerWrapper.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("disabled");
  cancel.classList.toggle("active");
  menuIcons.classList.toggle("activer");
  navRespond.classList.toggle("active");
});

navRespond.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.querySelectorAll(".main-text").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("disabled");
    cancel.classList.remove("active");
    navRespond.classList.remove("active");
    menuIcons.classList.remove("activer");
  })
);

readMore.addEventListener("click", () => {
  Read.style.display = "block";
  readMore.classList.add("button-clicked");
  readMore.style.display = "none";
  hideFirst.forEach((member) => {
    member.classList.add("active");
  });
});

if (window.innerWidth <= 550) {
  hideFirst.forEach((member) => {
    member.classList.add("active");
  });
}
