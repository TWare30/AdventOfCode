import { day7inputs } from "./getInputs.js";

function main() {
  let equations = day7inputs();
  let sum = 0;
  let result = 0;
  let equation = 0;
  let operands = [];
  //there are 2^n combinations
  for (let i = 0; i < equations.length; i++) {
    equation = equations[i];
    result = equation[0];
    operands = equation[1];
    let combinations = 2 ** (operands.length - 1);
    let spaces = operands.length - 1;
    console.log(result, operands, combinations);
    while (operands.length > 0) {
      let lastOp = operands.pop();
      if ((result -= lastOp)) {
      }
    }
  }

  return;
}

console.log(main());
