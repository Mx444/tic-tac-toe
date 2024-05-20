"use strict";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function printBoard() {
  console.log("");
  console.log(` ${board[0][0]} | ${board[0][1]} | ${board[0][2]} `);
  console.log("-----------");
  console.log(` ${board[1][0]} | ${board[1][1]} | ${board[1][2]} `);
  console.log("-----------");
  console.log(` ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `);
  console.log("");
}

let player = "X";
let randomX;
let randomY;

function boardFull() {
  if (
    board[0][0] !== "" &&
    board[0][1] !== "" &&
    board[0][2] !== "" &&
    board[1][0] !== "" &&
    board[1][1] !== "" &&
    board[1][2] !== "" &&
    board[2][0] !== "" &&
    board[2][1] !== "" &&
    board[2][2] !== ""
  ) {
    console.log(`Board piena!`);
    printBoard();
    return;
  }
}

function resetBoard() {
  board[0][0] = "";
  board[0][1] = "";
  board[0][2] = "";
  board[1][0] = "";
  board[1][1] = "";
  board[1][2] = "";
  board[2][0] = "";
  board[2][1] = "";
  board[2][2] = "";
  console.log(`Reset Board!`);
  printBoard();
}
function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player) ||
      (board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player)
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }
  return false;
}
function makeMove(x, y) {
  if (board[x][y] !== "") {
    console.log(`Posizione già occupata!`);
    return;
  }

  board[x][y] = player;

  if (checkWinner()) {
    console.log(`Hai vinto! Player : ${player}`);
    printBoard();
    resetBoard();

    return;
  }

  if (boardFull()) {
    console.log(`Pareggio!`);
    printBoard();
    resetBoard();

    return;
  }

  if (player === "X") {
    player = "O";
    do {
      randomX = Math.floor(Math.random() * 3);
      randomY = Math.floor(Math.random() * 3);
    } while (board[randomX][randomY] !== "");
    makeMove(randomX, randomY);
  } else {
    player = "X";
  }
  printBoard();
}
makeMove(0, 0);
