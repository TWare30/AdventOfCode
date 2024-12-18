import { day6inputs } from "./getInputs.js";

function main() {
  let text = day6inputs();
  let lines = text.split("\r\n");
  let grid = [];
  for (let line of lines) {
    grid.push([...line]);
  }
  let currentPosition = [0, 0];
  let startIndex = text.match(/\^/).index;
  let length = grid[0].length;
  let height = grid.length;
  currentPosition[0] = startIndex % (length + 2);
  currentPosition[1] = Math.floor(startIndex / height) - 1;
  let guard = "^";
  let next = ".";
  let sum = 0;

  let Yobstacles = {};
  let Xobstacles = {};
  let obstacle = {};
  let address = "";
  for (let i = 0; i < length; i++) {
    Yobstacles[i] = [];
    Xobstacles[i] = [];
  }

  function moveUp() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    grid[y][x] += "u";
    if (y === 0) {
      guard = "DONE";
      return;
    }
    next = grid[y - 1][x];
    if (next === "#") {
      guard = ">";
      Xobstacles[x].push([y - 1, "u"]);
      Yobstacles[y - 1].push([x, "u"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    grid[y - 1][x] = "X";
    currentPosition = [x, y - 1];
    return;
  }
  function moveRight() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    grid[y][x] += "r";
    if (x === length - 1) {
      guard = "DONE";
      return;
    }
    next = grid[y][x + 1];
    if (next === "#") {
      guard = "V";
      Xobstacles[x + 1].push([y, "r"]);
      Yobstacles[y].push([x + 1, "r"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    grid[y][x + 1] = "X";
    currentPosition = [x + 1, y];
    return;
  }
  function moveDown() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    grid[y][x] += "d";
    if (y === length - 1) {
      guard = "DONE";
      return;
    }
    next = grid[y + 1][x];
    if (next === "#") {
      guard = "<";
      Xobstacles[x].push([y + 1, "d"]);
      Yobstacles[y + 1].push([x, "d"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    grid[y + 1][x] = "X";
    currentPosition = [x, y + 1];
    return;
  }
  function moveLeft() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    grid[y][x] += "l";
    if (x === 0) {
      guard = "DONE";
      return;
    }
    next = grid[y][x - 1];
    if (next === "#") {
      guard = "^";
      Xobstacles[x - 1].push([y, "l"]);
      Yobstacles[y].push([x - 1, "l"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    grid[y][x - 1] = "X";
    currentPosition = [x + -1, y];
    return;
  }
  function scanRight() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    let obstacles = Yobstacles[y].filter((item) => {
      return item[0] > x;
    });
    if (obstacles === 0) {
      return;
    }

    for (let i = 0; i < obstacles.length; i++) {}
  }
  //traverse initial path and populate Obstacles
  while (guard != "DONE") {
    while (guard === "^") {
      moveUp();
    }
    while (guard === ">") {
      moveRight();
    }
    while (guard === "V") {
      moveDown();
    }
    while (guard === "<") {
      moveLeft();
    }
  }
  // go back through path checking for obstacles
  //for each step, scan clockwise
  while (guard != "DONE") {
    while (guard === "^") {
      scanRight();
      moveUp();
    }
    while (guard === ">") {
      scanDown();
      moveRight();
    }
    while (guard === "V") {
      scanLeft();
      moveDown();
    }
    while (guard === "<") {
      scanUp();
      moveLeft();
    }
  }
  console.log(Xobstacles, Yobstacles);
  return sum;
}

console.log(main());
