var a = (90 + 66) / 2;

var f = 35.74 + .6215 * a - 35.75 * Math.pow(5, .16) + .4275 * a * Math.pow(5, .16);

document.getElementById("windchill").innerHTML = (f.toFixed(0));