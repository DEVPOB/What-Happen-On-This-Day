function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}
function Date_clock(){
    const d = new Date();
    let D = d.getDate()
    let M = d.getMonth()+1
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    var am_or_pm = document.getElementById('am_or_pm');
    if (h >= 12) {
        am_or_pm = "PM"
    }
    else {
        am_or_pm = "AM"
    }
    document.getElementById('day').innerHTML = D;
    document.getElementById('month').innerHTML = M;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('pm_am').innerHTML = am_or_pm

}
function CheckDay(){
    console.log(Date_clock())
}
setInterval(Date_clock,10);

