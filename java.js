"use strict";

// -------------------Generer et random nummer---------------------------------
// const rand = Math.random() * 2;
// const randomNum = Math.round(rand);
// console.log(randomNum);
let randomNum1 = 0;
let randomNum2 = 0;
let randomNum3 = 0;

//---------------------Kører ud fra rock-knap-------------------------
document.querySelector(".rock").addEventListener("click", runRock);

function runRock() {
  document
    .getElementById("player1")
    .classList.remove("rock", "paper", "scissors");
  document
    .getElementById("player2")
    .classList.remove("rock", "paper", "scissors");
  document.getElementById("draw").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");

  randomNum1 = Math.floor(Math.random() * 3);
  console.log(randomNum1);

  // console.log("runRock kører nu");
  document.getElementById("player1").classList.add("shake");
  document.getElementById("player2").classList.add("shake");
  document
    .getElementById("player1")
    .addEventListener("animationend", stopAnimation1);
}
function stopAnimation1() {
  document
    .getElementById("player1")
    .removeEventListener("animationend", stopAnimation1);

  document.getElementById("player1").classList.remove("shake");
  document.getElementById("player2").classList.remove("shake");

  document.getElementById("player1").classList.add("rock");

  if (randomNum1 === 0) {
    document.getElementById("player2").classList.add("rock");
    document.getElementById("draw").classList.remove("hidden");
  } else if (randomNum1 === 1) {
    document.getElementById("player2").classList.add("paper");
    document.getElementById("lose").classList.remove("hidden");
  } else if (randomNum1 === 2) {
    document.getElementById("player2").classList.add("scissors");
    document.getElementById("win").classList.remove("hidden");
  }
}

//---------------------Kører ud fra paper-knap-------------------------
document.querySelector(".paper").addEventListener("click", runPaper);

function runPaper() {
  document
    .getElementById("player1")
    .classList.remove("rock", "paper", "scissors");
  document
    .getElementById("player2")
    .classList.remove("rock", "paper", "scissors");
  document.getElementById("draw").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");

  randomNum2 = Math.floor(Math.random() * 3);
  console.log(randomNum2);

  document.getElementById("player1").classList.add("shake");
  document.getElementById("player2").classList.add("shake");
  document
    .getElementById("player1")
    .addEventListener("animationend", stopAnimation2);
}

function stopAnimation2() {
  document
    .getElementById("player1")
    .removeEventListener("animationend", stopAnimation2);

  document.getElementById("player1").classList.remove("shake");
  document.getElementById("player2").classList.remove("shake");
  document.getElementById("player1").classList.add("paper");

  if (randomNum2 == 0) {
    document.getElementById("player2").classList.add("rock");
    document.getElementById("win").classList.remove("hidden");
  } else if (randomNum2 == 1) {
    document.getElementById("player2").classList.add("paper");
    document.getElementById("draw").classList.remove("hidden");
  } else if (randomNum2 == 2) {
    document.getElementById("player2").classList.add("scissors");
    document.getElementById("lose").classList.remove("hidden");
  }
}

//---------------------Kører ud fra scissor-knap-------------------------
document.querySelector(".scissors").addEventListener("click", runScissor);

function runScissor() {
  document
    .getElementById("player1")
    .classList.remove("rock", "paper", "scissors");
  document
    .getElementById("player2")
    .classList.remove("rock", "paper", "scissors");
  document.getElementById("draw").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");

  randomNum3 = Math.floor(Math.random() * 3);
  console.log(randomNum3);

  document.getElementById("player1").classList.add("shake");
  document.getElementById("player2").classList.add("shake");
  document
    .getElementById("player1")
    .addEventListener("animationend", stopAnimation3);
}

function stopAnimation3() {
  document
    .getElementById("player1")
    .removeEventListener("animationend", stopAnimation3);

  document.getElementById("player1").classList.remove("shake");
  document.getElementById("player2").classList.remove("shake");
  document.getElementById("player1").classList.add("scissors");

  if (randomNum3 == 0) {
    document.getElementById("player2").classList.add("rock");
    document.getElementById("lose").classList.remove("hidden");
  } else if (randomNum3 == 1) {
    document.getElementById("player2").classList.add("paper");
    document.getElementById("win").classList.remove("hidden");
  } else if (randomNum3 == 2) {
    document.getElementById("player2").classList.add("scissors");
    document.getElementById("draw").classList.remove("hidden");
  }
}
