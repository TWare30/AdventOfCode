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

  //   let Yobstacles = {};
  //   let Xobstacles = {};
  //   for (let i = 0; i < length; i++) {
  //     Yobstacles[i] = [];
  //     Xobstacles[i] = [];
  //   }

  function moveUp() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    if (y === 0) {
      guard = "DONE";
      return;
    }
    next = grid[y - 1][x];
    if (next === "#") {
      guard = ">";
      //   Xobstacles[x].push([y - 1, "u"]);
      //   Yobstacles[y - 1].push([x, "u"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    currentPosition = [x, y - 1];
    return;
  }
  function moveRight() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    if (x === length - 1) {
      guard = "DONE";
      return;
    }
    next = grid[y][x + 1];
    if (next === "#") {
      guard = "V";
      //   Xobstacles[x + 1].push([y, "r"]);
      //   Yobstacles[y].push([x + 1, "r"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    currentPosition = [x + 1, y];
    return;
  }
  function moveDown() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    if (y === length - 1) {
      guard = "DONE";
      return;
    }
    next = grid[y + 1][x];
    if (next === "#") {
      guard = "<";
      //   Xobstacles[x].push([y + 1, "d"]);
      //   Yobstacles[y + 1].push([x, "d"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    currentPosition = [x, y + 1];
    return;
  }
  function moveLeft() {
    let x = currentPosition[0];
    let y = currentPosition[1];
    if (x === 0) {
      guard = "DONE";
      return;
    }
    next = grid[y][x - 1];
    if (next === "#") {
      guard = "^";
      //   Xobstacles[x - 1].push([y, "l"]);
      //   Yobstacles[y].push([x - 1, "l"]);
      //console.log("HIT OBSTACLE AT", x, y);
      return;
    }
    currentPosition = [x + -1, y];
    return;
  }
  //
  //traverse initial path and populate Obstacles
  //for each step, scan clockwise
  function traverse(currentPosition, recur) {
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
  }

  return sum;
}

console.log(main());

//unused scanning functions from an 'efficient' approach
// function scanRight() {
//     let x = currentPosition[0];
//     let y = currentPosition[1];
//     if (y - 1 < 0 || grid[y - 1][x] === "#") {
//       return;
//     }
//     //grab only obstacles to the right
//     let obstacles = Yobstacles[y].filter((item) => {
//       return item[0] > x;
//     });
//     if (obstacles.length === 0) {
//       return;
//     }
//     let closest = [];
//     //console.log(x, y, obstacles);
//     for (let i = 0; i < obstacles.length; i++) {
//       if (closest == [] || obstacles[i][0] < closest[0]) {
//         closest = obstacles[i];
//       }
//     }
//     if (closest[1] === "r") {
//       sum++;
//     }
//   }
//   function scanDown() {
//     let x = currentPosition[0];
//     let y = currentPosition[1];
//     if (x + 1 >= length || grid[y][x + 1] === "#") {
//       return;
//     }
//     //grab only obstacles below
//     let obstacles = Xobstacles[x].filter((item) => {
//       return item[0] > y;
//     });
//     if (obstacles.length === 0) {
//       return;
//     }
//     let closest = [];
//     for (let i = 0; i < obstacles.length; i++) {
//       if (closest.length == 0 || obstacles[i][0] < closest[0]) {
//         closest = obstacles[i];
//       }
//     }
//     if (closest[1] === "d") {
//       sum++;
//     }
//   }
//   function scanLeft() {
//     let x = currentPosition[0];
//     let y = currentPosition[1];
//     if (y + 1 >= height || grid[y + 1][x] === "#") {
//       return;
//     }
//     //grab only obstacles to the left
//     let obstacles = Yobstacles[y].filter((item) => {
//       return item[0] < x;
//     });
//     if (obstacles.length === 0) {
//       return;
//     }
//     let closest = [];
//     for (let i = 0; i < obstacles.length; i++) {
//       if (closest.length == 0 || obstacles[i][0] < closest[0]) {
//         closest = obstacles[i];
//       }
//     }
//     if (closest[1] === "l") {
//       sum++;
//     }
//   }
//   function scanUp() {
//     let x = currentPosition[0];
//     let y = currentPosition[1];
//     if (y - 1 < 0 || grid[y - 1][x] === "#") {
//       return;
//     }
//     //grab only obstacles below
//     let obstacles = Xobstacles[x].filter((item) => {
//       return item[0] < y;
//     });
//     if (obstacles.length === 0) {
//       return;
//     }
//     let closest = [];
//     for (let i = 0; i < obstacles.length; i++) {
//       if (closest.length == 0 || obstacles[i][0] < closest[0]) {
//         closest = obstacles[i];
//       }
//     }
//     if (closest[1] === "u") {
//       sum++;
//     }
//   }
