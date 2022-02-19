function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}
function clock(){
    const d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var am_or_pm = document.getElementById('am_or_pm');
    if (h >= 12) {
        am_or_pm = "PM"
    }
    else {
        am_or_pm = "AM"
    }
    
    let time = h + ":" + m + ":" + s + " " + am_or_pm;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

}
setInterval(clock,10);

