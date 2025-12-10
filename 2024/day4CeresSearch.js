import { day4inputs } from "./getInputs.js";

// function main() {
//   let text = day4inputs();
//   let lines = text.split("\r\n");
//   let count = 0;
//   let column = "";
//   let line = "";
//   let height = lines.length;
//   let length = lines[0].length;
//   let r = 0;
//   let c = 0;
//   let mc = 0;
//   let left2rightDiagonal = "";
//   let right2leftDiagonal = "";
//   let xmasmatches = [];
//   let samxmatches = [];
//   xmasmatches = text.match(/XMAS/g) || [];
//   samxmatches = text.match(/SAMX/g) || [];
//   count += xmasmatches.length;
//   count += samxmatches.length;
//   for (let col = 0; col < length; col++) {
//     column = "";
//     for (let row = 0; row < height; row++) {
//       r = row;
//       c = col;
//       mc = col;
//       line = lines[row];
//       column += line[col];
//       left2rightDiagonal = "";
//       right2leftDiagonal = "";
//       if (row === 0 || col === 0) {
//         while (c < length && r < height) {
//           //console.log("column and row:", col, row, "Cell column and row", c, r);
//           left2rightDiagonal += lines[r][c];
//           r++;
//           c++;
//         }
//       }
//       r = row;
//       if (row === 0 || col === length - 1) {
//         while (mc >= 0 && r < height) {
//           //console.log("column and row:", col, row, "Cell column and row", mc, r);
//           right2leftDiagonal += lines[r][mc];
//           r++;
//           mc--;
//         }
//       }
//       //console.log(left2rightDiagonal, col, row);
//       //console.log(right2leftDiagonal, col, row);
//       xmasmatches = left2rightDiagonal.match(/XMAS/g) || [];
//       samxmatches = left2rightDiagonal.match(/SAMX/g) || [];
//       count += xmasmatches.length;
//       count += samxmatches.length;
//       // if (samxmatches != 0) {
//       //   console.log(col, row, left2rightDiagonal, xmasmatches);
//       // }
//       xmasmatches = right2leftDiagonal.match(/XMAS/g) || [];
//       samxmatches = right2leftDiagonal.match(/SAMX/g) || [];
//       count += xmasmatches.length;
//       count += samxmatches.length;
//       // if (samxmatches != 0) {
//       //   console.log(col, row, right2leftDiagonal, xmasmatches);
//       // }
//     }
//     xmasmatches = column.match(/XMAS/g) || [];
//     samxmatches = column.match(/SAMX/g) || [];
//     count += xmasmatches.length;
//     count += samxmatches.length;
//   }
//   return count;
// }

// function main() {
//   let text = day4inputs();
//   let lines = text.split("\r\n");
//   let line = "";
//   let row = 0;
//   let col = 0;
//   let length = lines[0].length;
//   let height = lines.length;
//   let count = 0;
//   let letter2 = "";
//   let letter3 = "";
//   let letter4 = "";
//   function scanRight(row, col) {
//     if (col + 3 >= length) {
//       return 0;
//     }
//     line = lines[row];
//     letter2 = line[col + 1];
//     letter3 = line[col + 2];
//     letter4 = line[col + 3];
//     //console.log("Right:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanLeft(row, col) {
//     if (col - 3 < 0) {
//       return 0;
//     }
//     line = lines[row];
//     letter2 = line[col - 1];
//     letter3 = line[col - 2];
//     letter4 = line[col - 3];
//     //console.log("Left:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanUp(row, col) {
//     if (row - 3 < 0) {
//       return 0;
//     }
//     letter2 = lines[row - 1][col];
//     letter3 = lines[row - 2][col];
//     letter4 = lines[row - 3][col];
//     //console.log("Up:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanDown(row, col) {
//     if (row + 3 >= height) {
//       return 0;
//     }
//     letter2 = lines[row + 1][col];
//     letter3 = lines[row + 2][col];
//     letter4 = lines[row + 3][col];
//     //console.log("Down:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanUpLeft(row, col) {
//     if (row - 3 < 0 || col - 3 < 0) {
//       return 0;
//     }
//     letter2 = lines[row - 1][col - 1];
//     letter3 = lines[row - 2][col - 2];
//     letter4 = lines[row - 3][col - 3];
//     //console.log("UpLeft:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanUpRight(row, col) {
//     if (row - 3 < 0 || col + 3 >= length) {
//       return 0;
//     }
//     letter2 = lines[row - 1][col + 1];
//     letter3 = lines[row - 2][col + 2];
//     letter4 = lines[row - 3][col + 3];
//     //console.log("UpRight:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanDownLeft(row, col) {
//     if (row + 3 >= height || col - 3 < 0) {
//       return 0;
//     }
//     letter2 = lines[row + 1][col - 1];
//     letter3 = lines[row + 2][col - 2];
//     letter4 = lines[row + 3][col - 3];
//     //console.log("DownLeft:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }
//   function scanDownRight(row, col) {
//     if (row + 3 >= height || col + 3 >= length) {
//       return 0;
//     }
//     letter2 = lines[row + 1][col + 1];
//     letter3 = lines[row + 2][col + 2];
//     letter4 = lines[row + 3][col + 3];
//     //console.log("DownRight:", letter2, letter3, letter4);
//     if (letter2 === "M" && letter3 === "A" && letter4 === "S") {
//       return 1;
//     }
//     return 0;
//   }

//   while (row < height && col < length) {
//     line = lines[row];
//     //console.log(line[col], row, col, count);
//     if (line[col] === "X") {
//       count += scanLeft(row, col);
//       count += scanRight(row, col);
//       count += scanUp(row, col);
//       count += scanDown(row, col);
//       count += scanUpLeft(row, col);
//       count += scanUpRight(row, col);
//       count += scanDownLeft(row, col);
//       count += scanDownRight(row, col);
//     }
//     if (col === length - 1) {
//       col = 0;
//       row++;
//     } else {
//       col++;
//     }
//   }
//   return count;
// }

function main() {
  let text = day4inputs();
  let lines = text.split("\r\n");
  let line = "";
  let row = 0;
  let col = 0;
  let length = lines[0].length;
  let height = lines.length;
  let count = 0;
  let topLeft = "";
  let topRight = "";
  let bottomLeft = "";
  let bottomRight = "";
  let leftCross = false;
  let rightCross = false;
  function checkX(row, col) {
    leftCross = false;
    rightCross = false;
    if (row === 0 || (col === 0) | (row === height - 1) || col === length - 1) {
      return 0;
    }
    topLeft = lines[row - 1][col - 1];
    topRight = lines[row - 1][col + 1];
    bottomLeft = lines[row + 1][col - 1];
    bottomRight = lines[row + 1][col + 1];
    if (
      (topLeft === "M" && bottomRight === "S") ||
      (topLeft === "S" && bottomRight === "M")
    ) {
      leftCross = true;
    }
    if (
      (topRight === "M" && bottomLeft === "S") ||
      (topRight === "S" && bottomLeft == "M")
    ) {
      rightCross = true;
    }
    // console.log(
    //   row,
    //   col,
    //   topLeft,
    //   topRight,
    //   bottomLeft,
    //   bottomRight,
    //   leftCross,
    //   rightCross
    // );
    if (leftCross && rightCross) {
      return 1;
    }
    return 0;
  }

  while (row < height && col < length) {
    line = lines[row];
    //console.log(line[col], row, col, count);
    if (line[col] === "A") {
      count += checkX(row, col);
    }
    if (col === length - 1) {
      col = 0;
      row++;
    } else {
      col++;
    }
  }
  return count;
}

console.log(main());
