
let myRequest = new Request("/Json/Data.json")
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
    fetch(myRequest)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data[1].Date_Json)
        if(D == data[1].Date_Json  && M == data[1].Month_Json){
            document.getElementById('videobg').src=data[1].Event_Video_Json;
            document.getElementById('Today').innerHTML = data[1].Event_Content_Json;
            document.getElementById('Today').href=data[1].Event_Tolink_Json;
        }
    })
        
    
    
}
CheckDay();
Date_clock();


// if(D == "19" && M == "2"){
    //     document.getElementById('videobg').src='/Video/Iwo jima.mp4';
    //     document.getElementById('Today').innerHTML = 'Raising the Flag on Iwo Jima';
    //     document.getElementById('Today').href='https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima';
    // }
// if(D == "21" && M == "2"){
//     document.getElementById('videobg').src='/Video/CommunistArrive.mp4'
//     document.getElementById('Today').innerHTML = 'Communist Declaration of Intent';
//     document.getElementById('Today').href='https://en.wikipedia.org/wiki/Raising_the_Flag_on_Iwo_Jima';
// }
// if(D == "22" && M == "2"){
//     document.getElementById('videobg').src='/Video/Clone.mp4'
// }
// if(D == "23" && M == "2"){
//     document.getElementById('videobg').src='/Video/Iwo jima.mp4'
// }
// if(D == "24" && M == "2"){
     // document.getElementById('videobg').src='/video/'
// }