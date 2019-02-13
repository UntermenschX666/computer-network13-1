
function checkTest() {

    var result = document.getElementById("result");
    var stop = document.getElementById("stop");
    var check = document.getElementById("check")
    var answer1 = document.getElementsByName("answer1");
    var answer2 = document.getElementsByName("answer2");
    var answer3 = document.getElementsByName("answer3");
    var answer4 = document.getElementsByName("answer4");
    var answer5 = document.getElementsByName("answer5");
    var sum = 0;

    if(answer1[2].checked)
        sum++;
    if(answer2[1].checked)
        sum++;
    if(answer3[1].checked)
        sum++;
    if(answer4[0].checked || answer4[1].checked || answer4[2].checked)
        sum++;

    if(answer5[0].checked)
        sum++;

    result.textContent = (sum/5)*100  + "%";
    stop.textContent = "1";
    check.disabled = true;
}

