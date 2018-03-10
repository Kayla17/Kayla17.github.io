var week = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var w = days[week.getDay()];

var day = new Date();
var d = day.getDate();

var mnth = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = months[mnth.getMonth()];

var year = new Date();
var y = year.getFullYear();

var currentDate = w + ", " + d + " " + m + " " + y;

document.getElementById("currentdate").innerHTML = (currentDate);

