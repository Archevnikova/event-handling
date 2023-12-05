$( "h1" ).addClass("show");
let number = document.querySelector(".number");

function getRandomNumber(){
    
    let min = 0;
    let max = 100;    
    let counter = Math.floor(Math.random()*(max-min+1)+min);
    number.textContent = counter;
   
}

