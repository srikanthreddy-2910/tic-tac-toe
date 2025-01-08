let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-game");
let winnerDetails = document.querySelector(".hide");
let newGameBtn = document.querySelector("#new-game");
let winner = document.querySelector(".winner");

let firstPlayer = prompt("enter first player name").toLowerCase();
let secondPlayer = prompt("enter second player name").toLowerCase();
console.log(`${firstPlayer} you will be the first player to choose X or O`);
let player1 = prompt(`${firstPlayer} choose Your Option X or O`).toUpperCase();
let turn = true;
let player2;
if (player1 == "X") {
  player2 = "O";
} else {
  player2 = "X";
}
console.log(
  `${firstPlayer} you have choosen ${player1}. ${secondPlayer} your option is ${player2}`
);

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn = true;
  enableBoxes();
  boxes.forEach((box) => {
    box.innerText = "";
  });
  winnerDetails.style.display = "none";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn == true) {
      box.innerText = player1;
      turn = false;
    } else {
      box.innerText = player2;
      turn = true;
    }
    box.disabled = true;
    checkWinner(player1, firstPlayer, player2, secondPlayer);
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const winnerName = (Player) => {
  console.log(`winner is the ${Player}`);
  winnerDetails.style.display = "flex";
  winner.innerText = `${Player} is the winner`;
};

const checkWinner = (player1, firstPlayer, player2, secondPlayer) => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        if (player1 == pos1val) {
          winnerName(firstPlayer);
          disableboxes();
        }
        if (player2 == pos1val) {
          winnerName(secondPlayer);
          disableboxes();
        }
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);