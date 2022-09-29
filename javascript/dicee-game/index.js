var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImagePath1 = "images/dice" + randomNumber1 + ".png";
var diceImagePath2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImagePath1);
document.querySelector(".img2").setAttribute("src", diceImagePath2);

var winnerText = "";

if (randomNumber1 > randomNumber2) {
  winnerText = "🚩 Player 1";
} else if (randomNumber2 > randomNumber1) {
  winnerText = "Player 2 🚩";
} else {
  winnerText = "It's a draw!";
}

document.querySelector("h1").textContent = winnerText;
