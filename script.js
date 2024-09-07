let pOne =document.querySelector(".pone");
let btnOne =document.querySelector(".btnone");
let inOne =document.querySelector(".inone");
let error =document.querySelector(".error1");
let divOne = document.querySelector(".p1")

let divTwo = document.querySelector(".p2")
let pTwo =document.querySelector(".ptwo");
let btnTwo =document.querySelector(".btntwo");
let inTwo =document.querySelector(".intwo");
let errortwo =document.querySelector(".error2");
let Chance = document.querySelector(".chance")

let count=3;

btnOne.addEventListener("click", function () {
    if (!inOne.value) {
        error.innerHTML="enter something";
        
        
    }else if(isNaN(inOne.value)){
        error.innerHTML="Enter Number";
        
    }else if(!(inOne.value<10 && inOne.value>0)){
        error.innerHTML="Enter 1 to 10";
    } else{
             divOne.style.display="none";
             divTwo.style.display="block";
             Chance.innerHTML=`Chance :${count}`;
           }
    
    
})



btnTwo.addEventListener("click", function () {
    if (!inTwo.value) {
        errortwo.innerHTML="enter something";
        
        
    }else if(isNaN(inTwo.value)){
        errortwo.innerHTML="Enter Number";
        
    }else if(!(inTwo.value<10 && inTwo.value>0)){
        errortwo.innerHTML="guess num in  1 to 10";
    } else{
        if(count>1){
            count--
            Chance.innerHTML=`Chance :${count}`;
            if(inOne.value==inTwo.value){
                pTwo.innerHTML="Player Two Winner";
                btnTwo.style.display="none"
                errortwo.style.display="none";
                Chance.style.display="none"
            }

        }else{
            pTwo.innerHTML="Player Two Loser"
            btnTwo.style.display="none"
           
            
            errortwo.style.display="none";
        }
        
    }



})
