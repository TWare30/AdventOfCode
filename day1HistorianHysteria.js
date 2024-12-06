import { day1Inputs } from "./getInputs.js";

function main() {
  let array = day1Inputs();
  let column1 = array[0];
  let column2 = array[1];
  return column1[1];
}

console.log(main());
