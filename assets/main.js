//Toggle navbar 
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");


navToggle.addEventListener("click" , () => {
    navMenu.classList.add("active-nav");
    navToggle.style.display = "none";
    navClose.style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("active-nav");
    navClose.style.display = "none";
    navToggle.style.display = "block";
    document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
})

const changeBackground = (x) => {
    if(x.matches) {
        document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
        navMenu.classList.remove("active-nav");
        navClose.style.display = "none";
        navToggle.style.display = "none";   
    }else {
        navToggle.style.display = "block";
    }
}

let x = window.matchMedia("(min-width:768px)");

changeBackground(x)
x.addListener(changeBackground);