let button = document.querySelector(".Generate-button");
let number = document.querySelector(".number");

function getRandomNumber(  min, max ){   
    let numberArray=[];
    for (i = 0 ; i <= 100; i++ ){
        numberArray[i]=Math.floor(Math.random(),0+ i);

    }
    
    return numberArray
    
}
