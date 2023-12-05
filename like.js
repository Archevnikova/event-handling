let buttonLike = document.querySelector(".likes");
let numberLike = document.querySelector(".likes-number");
buttonLike.onclick=function(){
    if (buttonLike.classList.contains("add")){
        numberLike.textContent++;
    }
}