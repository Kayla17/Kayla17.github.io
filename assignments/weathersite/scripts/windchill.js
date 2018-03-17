var a = (90 + 66) / 2;

var f = 35.74 + .6215 * a - 35.75 * Math.pow(5, .16) + .4275 * a * Math.pow(5, .16);

document.getElementById("windchill").innerHTML = (f.toFixed(0)); 

//formula: f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
