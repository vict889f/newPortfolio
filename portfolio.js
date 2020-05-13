"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector(".the_container").addEventListener("scroll", scrolling);
  document.querySelector("#mere").addEventListener("click", readMore);
  document.querySelector("#menu_kasse").addEventListener("click", toogleMenu);
  //   randomBackground();
}

function scrolling() {
  console.log("scrolling");

  const cnt = document.querySelector(".the_container");

  const ratio = (cnt.scrollTop / (cnt.scrollHeight - cnt.clientHeight)) * 100;

  document.getElementById("myBar").style.width = ratio + "%";
}

//Funktion til 'læsmere box'
function readMore() {
  console.log("readMore");
  document.querySelector("#box").classList.toggle("stor");
  document.querySelector("#box").classList.toggle("lille");
}

function toogleMenu() {
  document.querySelector("#nav").classList.toggle("hidden");

  let erSkjult = document.querySelector("#nav").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menu_kasse").textContent = "MENU";
  } else {
    document.querySelector("#menu_kasse").textContent = "CLOSE";
  }
}
