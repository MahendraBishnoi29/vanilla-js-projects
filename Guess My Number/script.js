"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //when there's no input
    document.querySelector(".message").textContent =
      "🙂 Please Enter A Number First";
  } else if (guess === secretNumber) {
    //If Answer Is Correct
    document.querySelector(".message").textContent = "🥳 Correct Answer!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > highscore ? "😚 Too Big" : "🤦‍♂️ Too Low!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game 😭");
      document.querySelector("body").style.backgroundColor = "#e22020";
      document.querySelector(".score").textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 0) {
    //     document.querySelector(".message").textContent = "😚 Too Big!!";
    //     document.querySelector(".score").textContent = score--;
    //   } else {
    //     document.querySelector(".message").textContent = "You Lost The Game 😭";
    //     document.querySelector("body").style.backgroundColor = "#e22020";
    //     document.querySelector(".score").textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    // if (score > 0) {
    //   document.querySelector(".message").textContent = "🤦‍♂️ Too Low!!";
    //   document.querySelector(".score").textContent = score--;
    // } else {
    //   document.querySelector(".message").textContent = "You Lost The Game 😭";
    //   document.querySelector("body").style.backgroundColor = "#e22020";
    //   document.querySelector(".score").textContent = 0;
    // }
  }
});

//Play Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
