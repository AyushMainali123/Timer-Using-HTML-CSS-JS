"use strict";
let timeInHr = document.querySelector(`section .hour`);
let timeInMin = document.querySelector(`section .min`);
let timeInSec = document.querySelector(`section .sec`);
timeInHr.textContent = prompt("Enter Hour");
timeInMin.textContent = prompt("Enter Minute");
timeInSec.textContent = prompt("Enter Second");
const myButton = document.querySelector('button');
let hrHand = Number(timeInHr.innerHTML);
let minHand = Number(timeInMin.innerHTML);
let secHand = Number(timeInSec.innerHTML);
const myMusic = document.querySelector('#myMusic');
if(hrHand < 0){
    hrHand = 0;
    timeInHr.textContent = 0;
}
if(minHand >= 60){
    minHand = 59;
    timeInMin.textContent = 59;
}else if(minHand < 0){
    minHand = 0;
    timeInMin.textContent = 0;
}
if(secHand >= 60){
    secHand = 59;
    timeInSec.innerHTML = 59;
}else if(secHand < 0){
    secHand = 0;
    timeInSec.textContent = 0;
}

let myintervalID = setInterval(function(){

    if(secHand > 0){
        secHand--;
        timeInSec.innerHTML = secHand;
    }
    else{
        if(minHand > 0){
            secHand = 59;
            minHand--;
            timeInSec.innerHTML = secHand;
            timeInMin.innerHTML = minHand;
        }
        else{
            if(hrHand > 0){
                secHand = 59;
                minHand = 59;
                hrHand--;
                timeInSec.innerHTML = secHand;
                timeInMin.innerHTML = minHand;
                timeInHr.innerHTML = hrHand;
            }
            else{
                secHand = 0;
                timeInSec.innerHTML = secHand;
                timeInHr.innerHTML = hrHand;
                playMusic();
                myMusic.loop = true;
                myButton.style.display = 'block';
                myButton.onclick = pauseMusic;
                clearInterval(myintervalID);
            }
        }

    }


}, 1000)

function playMusic(){
    myMusic.play();
}
function pauseMusic(){
    myMusic.pause();
    myButton.style.display = 'none';
}
