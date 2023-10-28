var today = new Date();
var date = today.toLocaleDateString();
var time = today.toLocaleTimeString();

document.getElementById('date').innerHTML = date + ' ' + time;

setInterval(function() {
    var today = new Date();
    var date = today.toLocaleDateString();
    var time = today.toLocaleTimeString();
    document.getElementById('date').innerHTML = date + ' ' + time;
  }, 1000); // 1000 milisaniye = 1 saniye  