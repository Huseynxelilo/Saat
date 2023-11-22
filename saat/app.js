function clock(){
    let Aylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust",
"Sentyabr","Oktyabr","Noyabr","Dekabr"
]
let gunadlari = [
    "bazar günü",
    "bazar ertəsi",
    "çərşənbə axşamı",
    "çərşənbə",
    "cümə axşamı",
    "cümə",
    "şənbə"
]
let today = new Date();

document.getElementById("Date").innerHTML = (gunadlari[today.getDay()]+" "+
today.getDate()+' '+Aylar[today.getMonth()]+' '+today.getFullYear());

let h = today.getHours();
let m = today. getMinutes();
let s = today. getSeconds();
let day = h<11 ? 'AM' : 'PM';

h = h<10? '0'+h: h;
m = m<10? '0'+m: m;
s = s<10? '0'+s: s;

document.getElementById("hours").innerHTML = h;
document.getElementById('min').innerHTML = m;
document.getElementById('sec').innerHTML = s;


}let inter = setInterval(clock,200);