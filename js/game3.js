"use strict";

import { Player } from "./Player.js";
let boxes = document.querySelectorAll(".box3");

let containerBox = document.querySelector(".container-box");
let lightBox = document.getElementById("light-box");
let x = `<h2 class="x neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle">X</h2>`;
let o = `<h2 class="o neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle">O</h2>`;
let xTurn = true;
let count = 0;
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

let player1 = new Player();
let player2 = new Player();

const grid = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

let char;
let position;
let index;


$("#container-box").hide();

const resetGrid = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid[i][j] = false;
    }
  }
};

const setDrawBox = () => {
  hideLightBox();
  document.querySelector("#light-box h2.sign").innerHTML = "";
  document.querySelector("#light-box h2.status").innerHTML = "Draw";
  $("#container-box")
    .delay(300)
    .show(0, function () {
      $("#light-box").animate({ width: "22rem", height: "15rem" }, function () {
        $("#light-box .content").animate({ scale: 1 }, 300);
      });
    });
};

const handleWinning = (winner) => {
  setWinLines();
  winner == "player1" ? player1.score++ : player2.score++;
  winner == "player1"
    ? (score1.textContent = player1.score)
    : (score2.textContent = player2.score);
  hideLightBox();
  document.querySelector("#light-box h2.sign").innerHTML = `${
    winner == "player1" ? "X" : "O"
  }`;
  document.querySelector("#light-box h2.status").innerHTML = "Winner";
  document.querySelector("#light-box h2.sign").style.color = `${
    winner == "player1" ? "#08aaaa" : "#e36464"
  }`;

  $("#container-box")
    .delay(550)
    .show(0, function () {
      $("#light-box").animate({ width: "22rem", height: "18rem" }, function () {
        $("#light-box .content").animate({ scale: 1 }, 300);
      });
    });

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid[i][j] = true;
    }
  }
};

$("#play-again .yes").on("click", function () {
  document.getElementById("play-again").classList.replace("d-flex", "d-none");
  document.getElementById("same-players").classList.replace("d-none", "d-flex");
  reset();
});

$("#same-players .yes").on("click", function () {
  document.getElementById("play-again").classList.replace("d-none", "d-flex");
  document.getElementById("same-players").classList.replace("d-flex", "d-none");
  $("#container-box").hide();
});
$("#same-players .no").on("click", function () {
  document.getElementById("play-again").classList.replace("d-none", "d-flex");
  document.getElementById("same-players").classList.replace("d-flex", "d-none");
  player1.score = 0;
  player2.score = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  $("#container-box").hide();
});

document.querySelector(".result span").innerHTML = `X`;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    const row = Math.floor(i / 3);
    const col = i % 3;

    if (!grid[row][col]) {
      if (xTurn) {
        grid[row][col] = "X";
        boxes[i].innerHTML = x;
        count++;
        xTurn = !xTurn;
        document.querySelector(".result span").innerHTML = `${
          xTurn ? "X" : "O"
        }`;

        if (isWin()) {
          handleWinning("player1");
        } else if (count == 9 && !isWin()) {
          setDrawBox();
        }
      } else {
        grid[row][col] = "O";
        boxes[i].innerHTML = o;
        count++;
        xTurn = !xTurn;
        document.querySelector(".result span").innerHTML = `${
          xTurn ? "X" : "O"
        }`;
        if (isWin()) {
          handleWinning("player2");
        } else if (count == 9 && !isWin()) {
          setDrawBox();
        }
      }
    }
  });
}

function isWin() {
  //Horizontal Lines
  if (
    grid[0][0] == grid[0][1] &&
    grid[0][0] == grid[0][2] &&
    (grid[0][0] == "X" || grid[0][0] == "O")
  ) {
    index = 0;
    char = grid[0][0];
    position = "h";
    return true;
  }
  if (
    grid[1][0] == grid[1][1] &&
    grid[1][0] == grid[1][2] &&
    (grid[1][0] == "X" || grid[1][0] == "O")
  ) {
    index = 3;
    char = grid[1][0];
    position = "h";
    return true;
  }
  if (
    grid[2][0] == grid[2][1] &&
    grid[2][0] == grid[2][2] &&
    (grid[2][0] == "X" || grid[2][0] == "O")
  ) {
    index = 6;
    char = grid[2][0];
    position = "h";
    return true;
  }

  //Vertical Lines
  if (
    grid[0][0] == grid[1][0] &&
    grid[0][0] == grid[2][0] &&
    (grid[0][0] == "X" || grid[0][0] == "O")
  ) {
    index = 0;
    char = grid[0][0];
    position = "v";
    return true;
  }
  if (
    grid[0][1] == grid[1][1] &&
    grid[0][1] == grid[2][1] &&
    (grid[0][1] == "X" || grid[0][1] == "O")
  ) {
    index = 1;
    char = grid[0][1];
    position = "v";
    return true;
  }
  if (
    grid[0][2] == grid[1][2] &&
    grid[0][2] == grid[2][2] &&
    (grid[0][2] == "X" || grid[0][2] == "O")
  ) {
    index = 2;
    char = grid[0][1];
    position = "v";
    return true;
  }

  //Main Dialog Lines
  if (
    grid[0][0] == grid[1][1] &&
    grid[0][0] == grid[2][2] &&
    (grid[0][0] == "X" || grid[0][0] == "O")
  ) {
    char = grid[0][1];
    position = "md";
    return true;
  }
  //Second Dialog Lines
  if (
    grid[0][2] == grid[1][1] &&
    grid[0][2] == grid[2][0] &&
    (grid[0][2] == "X" || grid[0][2] == "O")
  ) {
    char = grid[0][1];
    position = "sd";
    return true;
  }

  return false;
}

function reset() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  resetGrid();

  count = 0;
  document.querySelector(".wH").style.width = "0%";
  document.querySelector(".wV").style.height = "0%";

  let st = document.getElementById("game3");
  st.style.setProperty("--beforeBack", "0%");
  st.style.setProperty("--afterBack", "0%");
}

function hideLightBox() {
  $("#container-box").hide();
  lightBox.style.width = 0;
  lightBox.style.height = 0;
  document.querySelector("#light-box .content").style.scale = 0;
}

function setWinLines() {
  if (position == "h") {
    if (index == 0) {
      document.querySelector(".wH").style.top = "16.667%";
      document.querySelector(".wH").style.width = "100%";
    } else if (index == 3) {
      document.querySelector(".wH").style.top = "50%";
      document.querySelector(".wH").style.width = "100%";
    } else if (index == 6) {
      document.querySelector(".wH").style.top = "83.33%";
      document.querySelector(".wH").style.width = "100%";
    }
  } else if (position == "v") {
    if (index == 0) {
      document.querySelector(".wV").style.left = "16.667%";
      document.querySelector(".wV").style.height = "100%";
    }
    if (index == 1) {
      document.querySelector(".wV").style.left = "50%";
      document.querySelector(".wV").style.height = "100%";
    }
    if (index == 2) {
      document.querySelector(".wV").style.left = "83.333%";
      document.querySelector(".wV").style.height = "100%";
    }
  } else if (position == "md") {
    let st = document.getElementById("game3");
    st.style.setProperty("--beforeBack", "141.42%");
  } else if (position == "sd") {
    let st = document.getElementById("game3");
    st.style.setProperty("--afterBack", "141.42%");
  }
}
