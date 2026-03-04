let fade = document.querySelector(".fade-layer");
fade.addEventListener("mouseover",showsearch)
let Search = document.querySelector(".hover");
menu.addEventListener("mouseover",showsearch)

function showsearch(){
    let Search = document.querySelector("body");
    Search.classList.toggle("show");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
}