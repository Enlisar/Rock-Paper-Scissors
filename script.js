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

const compMoves = ["Rock", "Paper", "Scissor"];

winText.classList.add("winScreen");

function checkWin(yourMove, compMove) {
  let resultText = "";

  if (
    (yourMove == 0 && compMove == 1) ||
    (yourMove == 1 && compMove == 2) ||
    (yourMove == 2 && compMove == 0)
  ) {
    compScoreCount.innerText = parseInt(compScoreCount.innerText) + 1;
    resultText = "Computer wins!";
  } else if (
    (yourMove == 1 && compMove == 0) ||
    (yourMove == 2 && compMove == 1) ||
    (yourMove == 0 && compMove == 2)
  ) {
    yourScoreCount.innerText = parseInt(yourScoreCount.innerText) + 1;
    resultText = "You win!";
  } else {
    resultText = "Draw!";
  }

  winText.innerHTML += `<br>${resultText}`;
  if (!document.body.contains(winText)) {
    scoreCard.after(winText);
  }
}

rock.addEventListener("click", () => {
  let yourMove = 0;
  let compMove = randint(0, 2);
  winText.innerHTML = `You chose Rock<br>Computer chose ${compMoves[compMove]}`;

  checkWin(yourMove, compMove);
});
paper.addEventListener("click", () => {
  let yourMove = 1;
  let compMove = randint(0, 2);
  winText.innerHTML = `You chose Paper<br>Computer chose ${compMoves[compMove]}`;

  checkWin(yourMove, compMove);
});
scissor.addEventListener("click", () => {
  let yourMove = 2;
  let compMove = randint(0, 2);
  winText.innerHTML = `You chose Scissor<br>Computer chose ${compMoves[compMove]}`;

  checkWin(yourMove, compMove);
});
