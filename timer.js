var timeObj = document.getElementById("time");
var seconds = 0;
var minutes = 2;

function myTimer(){
    var stop = document.getElementById("stop");
    seconds--;

    if(seconds === -1){
        seconds = 59;
        minutes -= 1;
    }

    var timeString = minutes + ":" + seconds
    timeObj.textContent = timeString;
    if(seconds === 0 && minutes === 0){
        clearInterval(interval);
    }

    if(stop.textContent == 1)
        clearInterval(interval);

}

var interval = setInterval(myTimer, 100);

