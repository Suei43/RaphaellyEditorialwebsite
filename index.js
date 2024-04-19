const body = document.querySelector("body");
const hamburgerWrapper = document.querySelector(".hamburga");
const hamburger = document.querySelector("#hamburger");
const cancel = document.querySelector("#cancel");
const menuIcons = document.querySelector(".menuicons");
const navRespond = document.querySelector("#navrespond");
const resNav1 = document.querySelector("#resnavlinks1");
const resNav2 = document.querySelector("#resnavlinks2");
const resNav3 = document.querySelector("#resnavlinks3");
const resNav4 = document.querySelector("#resnavlinks4");
const resNav5 = document.querySelector("#resnavlinks5");
const mail = document.getElementById("instamail");

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

mail.addEventListener("click", () => {
  mail.style.backgroundColor = "#d61d1d";
});

document.querySelectorAll(".main-text").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("disabled");
    cancel.classList.remove("active");
    navRespond.classList.remove("active");
    menuIcons.classList.remove("activer");
  })
);

resNav1.addEventListener("click", (e) => {
  e.stopPropagation();
  resNav1.classList.add("bg-active");
});

resNav2.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.remove("disabled");
  cancel.classList.remove("active");
  navRespond.classList.remove("active");
  menuIcons.classList.remove("activer");
  resNav2.classList.add("bg-active");
});

resNav3.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.remove("disabled");
  cancel.classList.remove("active");
  navRespond.classList.remove("active");
  menuIcons.classList.remove("activer");
  resNav3.classList.add("bg-active");
});

resNav4.addEventListener("click", (e) => {
  e.stopPropagation();
  resNav4.classList.add("bg-active");
});

resNav5.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.remove("disabled");
  cancel.classList.remove("active");
  navRespond.classList.remove("active");
  menuIcons.classList.remove("activer");
  resNav5.classList.add("bg-active");
});
