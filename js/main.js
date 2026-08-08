const theme = document.querySelector(".header__nav-theme");
const body = document.querySelector("body");
theme.addEventListener("click", function () {
    body.classList.toggle("dark-body")
})

const hamburger = document.querySelector(".hamburger__button");
const nav = document.querySelector(".header__nav")
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger__button--active");
    nav.classList.toggle("header__nav-mobile")
})