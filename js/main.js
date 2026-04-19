let fade = document.querySelector(".fade-layer");
fade.addEventListener("click",showsearch)
let outside = document.querySelector(".hover");
outside.addEventListener("mouseover",showsearch)

function showsearch(){
    let outside = document.querySelector("aside");
    outside.classList.toggle("show");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
}

document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function MyFunction(){
  alert('Error')
}