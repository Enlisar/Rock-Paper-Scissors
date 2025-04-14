function randint(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let yourScore = document.querySelector("#yourScoreCount");
let compScore = document.querySelector("#compScoreCount");
let scoreCard = document.querySelector(".scorecard");
let yourScoreCount = document.querySelector("#yourScoreCount");
let compScoreCount = document.querySelector("#compScoreCount");
let winText = document.createElement("div");
let youWinText = document.createElement("div");
let compWinText = document.createElement("div");
let drawText = document.createElement("div");

// youWinText.innerText = "You won!";
// compWinText.innerText = "Computer won!";
// drawText.innerText = "Draw";

youWinText.classList.add("winScreen");
compWinText.classList.add("winScreen");
drawText.classList.add("winScreen");
winText.classList.add("winScreen");

function checkWin() {
  if (
    (yourMove == 0 && compMove == 1) ||
    (yourMove == 1 && compMove == 2) ||
    (yourMove == 2 && compMove == 0)
  ) {
    console.log("Comp win");
    compScoreCount.innerText = parseInt(compScoreCount.innerText) + 1;
    winText.innerText = "";
    winText.innerText = "Computer wins!";
    scoreCard.after(winText);
  } else if (
    (yourMove == 1 && compMove == 0) ||
    (yourMove == 2 && compMove == 1) ||
    (yourMove == 0 && compMove == 2)
  ) {
    console.log("You win");
    yourScoreCount.innerText = parseInt(yourScoreCount.innerText) + 1;
    winText.innerText = "";
    winText.innerText = "You win!";
    scoreCard.after(winText);
  } else {
    console.log("Try Again");
    winText.innerText = "";
    winText.innerText = "Draw!";
    scoreCard.after(winText);
  }
}

rock.addEventListener("click", () => {
  yourMove = 0;
  compMove = randint(0, 2);
  checkWin();
});
paper.addEventListener("click", () => {
  yourMove = 1;
  compMove = randint(0, 2);
  checkWin();
});
scissor.addEventListener("click", () => {
  yourMove = 2;
  compMove = randint(0, 2);
  checkWin();
});
