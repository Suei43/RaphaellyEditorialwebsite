const contact = document.querySelector('.contactus')
const readMore = document.querySelector('.read-more')
const Read = document.querySelector('.continue-read')
const hamburger = document.querySelector("#hamburger")
const menuIcons = document.querySelector(".menuicons")
const navRespond = document.querySelector("#navrespond")
const html = document.documentElement
const line = document.querySelector('.line')
const hideFirst = document.querySelectorAll(".hide-first")

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
document.querySelectorAll(".main-text").forEach(n =>n.addEventListener("click",
() => {
    hamburger.classList.remove("active")
    navRespond.classList.remove("active")
    menuIcons.classList.remove("activer")
    line.classList.remove("active")
}
))

readMore.addEventListener("click", ()=>{
    Read.style.display="block"
    readMore.classList.add("button-clicked")
    readMore.style.display="none"
    hideFirst.forEach((member)=>{
        member.classList.add("active")
    })
})
if(window.innerWidth<=550){
    hideFirst.forEach((member)=>{
        member.classList.add("active")
    })
}   