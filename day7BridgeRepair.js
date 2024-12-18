import { day7inputs } from "./getInputs.js";

function main() {
  let equations = day7inputs();
  let sum = 0;
  let result = 0;
  let equation = 0;
  //there are 2^n combinations
  for (let i = 0; i < equations.length; i++) {
    equation = equations[i];
    result = equation[0];
    for (let space = 0; space < equation[1].length - 1; space++) {
      console.log();
    }
  }

  return equations;
}

console.log(main());
