function openHome() {
  document.getElementById("home").style.visibility = "visible";
  document.getElementById("brain").style.visibility = "hidden";
  document.getElementById("heart").style.visibility = "hidden";
  document.getElementById("shadow").style.visibility = "hidden";
}

function openBrain() {
  document.getElementById("home").style.visibility = "hidden";
  document.getElementById("brain").style.visibility = "visible";
  document.getElementById("heart").style.visibility = "hidden";
  document.getElementById("shadow").style.visibility = "hidden";
}

function openHeart() {
  document.getElementById("home").style.visibility = "hidden";
  document.getElementById("brain").style.visibility = "hidden";
  document.getElementById("heart").style.visibility = "visible";
  document.getElementById("shadow").style.visibility = "hidden";
}

function openShadow() {
  document.getElementById("home").style.visibility = "hidden";
  document.getElementById("brain").style.visibility = "hidden";
  document.getElementById("heart").style.visibility = "hidden";
  document.getElementById("shadow").style.visibility = "visible";
}