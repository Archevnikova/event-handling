let hideTextButtton = document.querySelector(".hide-text");
let text = document.querySelector(".text");
hideTextButtton.onclick = function (){
    text.classList.toggle("show");
}