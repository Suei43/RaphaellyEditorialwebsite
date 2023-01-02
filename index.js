
const hamburger = document.querySelector("#hamburger")
const menuIcons = document.querySelector(".menuicons")
const navRespond = document.querySelector("#navrespond")
const resNav1 = document.querySelector("#resnavlinks1")
const resNav2 = document.querySelector("#resnavlinks2")
const resNav3 = document.querySelector("#resnavlinks3")
const resNav4 = document.querySelector("#resnavlinks4")
const resNav5 = document.querySelector("#resnavlinks5")
const html = document.documentElement
const mail = document.getElementById('instamail')
const line = document.querySelector('.line')

let menuOpen;
function openMenu(){
    menuIcons.classList.add('animatee')
    html.addEventListener('click', closeMenuOnBodyClick)
}
function closeMenu(){
    menuIcons.classList.remove('animatee')
    html.removeEventListener('click',closeMenuOnBodyClick)
}
function closeMenuOnBodyClick(event){
    closeMenu();
}
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    menuIcons.classList.toggle("activer")
    navRespond.classList.toggle("active")
    line.classList.toggle("active")
})
mail.addEventListener("click", ()=>{
    mail.style.backgroundColor = '#d61d1d'
})
document.querySelectorAll(".main-text").forEach(n =>n.addEventListener("click",
() => {
    hamburger.classList.remove("active")
    navRespond.classList.remove("active")
    menuIcons.classList.remove("activer")
    line.classList.remove("active")
}
))
resNav1.addEventListener("click",()=>{
    resNav1.classList.add("bg-active")
})
resNav2.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navRespond.classList.remove("active")
    menuIcons.classList.remove("activer")
    line.classList.remove("active")
    resNav2.classList.add("bg-active")
})
resNav3.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navRespond.classList.remove("active")
    menuIcons.classList.remove("activer")
    line.classList.remove("active")
    resNav3.classList.add("bg-active")
})
resNav4.addEventListener("click",()=>{
    resNav4.classList.add("bg-active")
})
resNav5.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navRespond.classList.remove("active")
    menuIcons.classList.remove("activer")
    line.classList.remove("active")
    resNav5.classList.add("bg-active")
})
