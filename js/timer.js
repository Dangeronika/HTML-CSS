function timer() {
  hour = "00";
  minute = "00";
  second = "00";
  let tick = setInterval(function(){
    document.getElementById("tiker").innerHTML = hour + ":" + minute + ":" + second; 
    second++;

    if (second>59) {
      second = 0;
      minute++;

      if (minute >59) {
        minute = 0;
        hour++;
      }
    }
  },1000)
}