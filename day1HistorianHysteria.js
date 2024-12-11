import { day1Inputs } from "./getInputs.js";

function main() {
  let array = day1Inputs();
  let column1 = array[0];
  let column2 = array[1];
  // part 1
  // column1.sort((a, b) => {
  //   return a - b;
  // });
  // column2.sort((a, b) => {
  //   return a - b;
  // });
  // let distance = 0;
  // for (let i = 0; i < column1.length; i++) {
  //   distance += Math.abs(column1[i] - column2[i]);
  // }
  // return distance;

  //part 2
  let hash = {};
  let key = 0;
  let similarity = 0;
  for (let i = 0; i < column2.length; i++) {
    key = column2[i];
    if (hash[key] != null) {
      hash[key] = hash[key] + 1;
    } else {
      hash[key] = 1;
    }
  }
  for (let i = 0; i < column1.length; i++) {
    key = column1[i];
    if (hash[key] != null) {
      similarity += key * hash[key];
    }
  }
  return similarity;
}

console.log(main());
