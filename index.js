function todayTimes() {
    var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    var cal = new Date();

    var thisYear = cal.getFullYear();
    var thisMonth = cal.getMonth() + 1;
    var thisDate = addZero(cal.getDate());
    var thisDay = cal.getDay();

    var am = "AM";
    var timeHours = cal.getHours();
    var timeMinutes = addZero(cal.getMinutes());
    var timeSeconds = addZero(cal.getSeconds());

    if (timeHours > 11) {
        am = "PM";
        if (timeHours >= 13) {
            timeHours = addZero(timeHours - 12);
        }
    }

    var calender = thisYear + "년 " + thisMonth + "월 " + thisDate + "일 " + week[thisDay];
    var time = am + " " + timeHours + ":" + timeMinutes + ":" + timeSeconds;

    document.getElementById("calender").innerHTML = calender;
    document.getElementById("clock").innerHTML = time;

    setTimeout(function () {todayTimes()}, 1000);
}

function addZero(number) {
    number = String(number);
    if (number.length < 2) {
        number = "0"+number;
    }
    return number;
}