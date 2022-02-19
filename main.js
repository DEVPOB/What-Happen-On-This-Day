function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}
function Date_clock(){
    var d = new Date();
    var D = d.getDate();
    var M = d.getMonth()+1;
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
    setInterval(Date_clock,10);

}
function CheckDay(){
    const d = new Date();
    var D = d.getDate();
    var M = d.getMonth()+1;
    if(D == "19" && M == "2"){
        document.getElementById('videobg').src='/Video/Iwo jima.mp4'
    }
    if(D == "20" && M == "2"){
        document.getElementById('videobg').src='/Video/luner moon.mp4'
    }
    if(D == "21" && M == "2"){
        document.getElementById('videobg').src='/Video/CommunistArrive.mp4'
    }
    if(D == "22" && M == "2"){
        document.getElementById('videobg').src='/Video/Clone.mp4'
    }
    if(D == "23" && M == "2"){
        document.getElementById('videobg').src='/Video/sanambindon.mp4'
    }
    if(D == "24" && M == "2"){
        // document.getElementById('videobg').src='/video/'
    }
    
}
CheckDay();
Date_clock();

