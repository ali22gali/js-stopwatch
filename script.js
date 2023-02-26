var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function start(){
  timer = true;
  stopwatch(); 
}
function stop(){
    timer =false;

}
function reset(){
    timer =false;
    count = 0;
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("count").innerHTML = count;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hr").innerHTML = hr;

}

function stopwatch(){
    if (timer == true){
        count = count + 1;
        document.getElementById("count").innerHTML = count;
        if (count == 100){
            count = 0;
            sec =sec+1;
            document.getElementById("count").innerHTML = count;
            document.getElementById("sec").innerHTML = sec;
        }
        if (sec == 60){
            count = 0;
            sec = 0;
            min =min+1;
            document.getElementById("count").innerHTML = count;
            document.getElementById("sec").innerHTML = sec;
            document.getElementById("min").innerHTML = min;
        }
        if (min == 60){
            count = 0;
            sec = 0;
            min = 0;
            hr =hr+1;
            document.getElementById("count").innerHTML = count;
            document.getElementById("sec").innerHTML = sec;
            document.getElementById("min").innerHTML = min;
            document.getElementById("hr").innerHTML = hr;
        }
        setTimeout("stopwatch()",10);
    }
}