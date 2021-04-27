var days = document.querySelector("#days");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var startCount = [ 30, 00, 00, 00 ];

setInterval(() => {
    startCount[3] -= 1;

    if (startCount[3] < 0) {
        startCount[3] = 60;
        startCount[2] -= 1;
    }

    if (startCount[2] < 0) {
        startCount[2] = 60;
        startCount[1] -= 1;
    }

    if (startCount[1] < 0) {
        startCount[1] = 24;
        startCount[0] -= 1;
    }

    if (startCount[0] < 0) {
        startCount[0] = 0;
    }

    var d0 = "";
    var h0 = "";
    var m0 = "";
    var s0 = "";

    if (startCount[0] < 10) {
        d0 = "0";
    }

    if (startCount[1] < 10) {
        h0 = "0";
    }

    if (startCount[2] < 10) {
        m0 = "0";
    }

    if (startCount[3] < 10) {
        s0 = "0";
    }

    days.innerHTML = d0 + startCount[0];
    hours.innerHTML = h0 + startCount[1];
    minutes.innerHTML = m0 + startCount[2];
    seconds.innerHTML = s0 + startCount[3];

}, 1000);