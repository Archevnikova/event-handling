let button = document.querySelector(".buttonPlus");
let progressbar = document.querySelector(".progress-bar")
button.onclick = function (){
    progressbar.value += 5;
}