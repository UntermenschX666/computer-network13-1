var interval;

function startTimer(minutes, seconds) {
    var timeObj = document.getElementById("time");
    function myTimer(){
        var stop = document.getElementById("stop");
        seconds--;

        if(seconds === -1){
            seconds = 59;
            minutes -= 1;
        }

        var timeString = minutes + ":" + seconds;
        timeObj.textContent = timeString;
        if(seconds === 0 && minutes === 0){
            alert("Время вышло!");
            document.location.href = "index.html";
            clearInterval(interval);
        }

        if(stop.textContent == 1){
            clearInterval(interval);

        }

    }
    interval = setInterval(myTimer, 1000);
}

function refreshTimer() {
    clearInterval(interval);
    startTimer(2, 0)
}
