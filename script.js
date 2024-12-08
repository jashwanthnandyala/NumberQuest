"use strict";
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highScore = 0;

const displayContent = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayContent("⛔️ No Number");
  } else if (secretNumber === guess) {
    displayContent("🎉Correct Number!!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "10rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (score > 0) {
    if (secretNumber < guess) {
      displayContent("📈too high!");
      score--;
      document.querySelector(".score").textContent = score;
    } else if (secretNumber > guess) {
      displayContent("📉too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "💥You lost the game!";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Number(Math.trunc(Math.random() * 30) + 1);
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "7rem";
  displayContent("start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
