function dugme1() {
  if (document.getElementById("prva_godina").style.visibility == "hidden") {
    document.getElementById("prva_godina").style.visibility = "visible";
  } else {
    document.getElementById("prva_godina").style.visibility = "hidden";
  }
}; function dugme2() {
  if (document.getElementById("druga_godina").style.visibility == "hidden") {
    document.getElementById("druga_godina").style.visibility = "visible";
  } else {
    document.getElementById("druga_godina").style.visibility = "hidden";
  }
}; function dugme3() {
  if (document.getElementById("treca_godina").style.visibility == "hidden") {
    document.getElementById("treca_godina").style.visibility = "visible";
  } else {
    document.getElementById("treca_godina").style.visibility = "hidden";
  }
}; function dugme4() {
  if (document.getElementById("cetvrta_godina").style.visibility == "hidden") {
    document.getElementById("cetvrta_godina").style.visibility = "visible";
  } else {
    document.getElementById("cetvrta_godina").style.visibility = "hidden";
  }
};
function myFunction() {
  var x = document.getElementById("meniGl");
  if (x.className === "meniGl") {
    x.className += " responsive";
  } else {
    x.className = "meniGl";
  }
}
setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let currentTime = hour + ":"
    + min + ":" + sec;
  document.getElementById("clock")
    .innerHTML = currentTime;
}

showTime(); 

function ispis(){
  alert("Podaci obrisani")
}
