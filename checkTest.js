
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

    result.textContent = (sum/5)*100  + "%" + " ответов верные";
    stop.textContent = "1";
    check.disabled = true;
}

function remake(){
        var answer1 = document.getElementsByName("answer1");
        var answer2 = document.getElementsByName("answer2");
        var answer3 = document.getElementsByName("answer3");
        var answer4 = document.getElementsByName("answer4");
        var answer5 = document.getElementsByName("answer5");
        answer1[0].checked = false;
        answer1[1].checked = false;
        answer1[2].checked = false;
        answer2[0].checked = false;
        answer2[1].checked = false;
        answer2[2].checked = false;
        answer3[0].checked = false;
        answer3[1].checked = false;
        answer3[2].checked = false;
        answer4[0].checked = false;
        answer4[1].checked = false;
        answer4[2].checked = false;
        answer5[0].checked = false;
        answer5[1].checked = false;
        refreshTimer();

}

