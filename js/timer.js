function setTime() {
	
    var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

    if (hours <= 9) {
        hours = "0" + hours;
    } else {
        hours = date.getHours();
    };

    if (minutes <= 9) {
        minutes = "0" + minutes;
    } else {
        minutes = date.getMinutes();
    };

    if (seconds <= 9) {
        seconds = "0" + seconds;
    } else {
        seconds = date.getSeconds();
    };

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
    window.setTimeout("setTime()", "1000");
};

setTime();