var hours = 0 ;
var minutes = 0 ;
var sec = 0 ;
var msec = 0 ;
var hourHeading= document.getElementById("hours")
var minHeading= document.getElementById("minutes")
var secHeading= document.getElementById("seconds")
var msecHeading= document.getElementById("milliseconds")
var interval;

function timer(){
   msec++
   msecHeading.innerHTML=msec;
   if (msec>=100){
       sec++
       secHeading.innerHTML=sec;
       msec=0;
   }
   else if(sec>=60){
    minutes++
    sec=0
    minHeading.innerHTML=min;  
   }
   else if(min>=60){
       hours++
       minutes=0
       hourHeading.innerHTML=hours
   }
}

function startTimer(){
interval=setInterval(timer,10);
document.getElementById("start").disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}

function resetTimer(){
    stopTimer();
    hours=0;
    minutes=0;
    sec=0;
    msec=0;
    hourHeading.innerHTML=hours;
    minHeading.innerHTML=minutes;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
  
}