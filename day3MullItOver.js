import { day3inputs } from "./getInputs.js";

function multiply(string) {
  let split = string.split(",");
  let firstnum = split[0].match(/\d{1,3}/);
  let secondnum = split[1].match(/\d{1,3}/);
  return firstnum * secondnum;
}

function main() {
  let text = day3inputs();
  let multpat = /mul\(\d{1,3},\d{1,3}\)/;
  let dopat = /do\(\)/;
  let dontpat = /don\'t\(\)/;
  let sum = 0;
  let index = 0;
  let nextMult = 0;
  let nextDo = 0;
  let nextDont = 0;
  let active = true;
  let mults = [];
  let newMult;
  while (active) {
    nextMult = +text.search(multpat);
    if (nextMult == -1) {
      active = false;
      break;
    }
    nextDo = +text.search(dopat);
    nextDont = +text.search(dontpat);
    if (nextDont < nextMult && nextDont != -1) {
      newMult = text.match(multpat)[0];
      text = text.substring(nextDo);
      continue;
    }
    newMult = text.match(multpat)[0];
    mults.push(newMult);
    text = text.substring(newMult.length + nextMult);
    index++;
  }
  for (let i = 0; i < mults.length; i++) {
    sum += multiply(mults[i]);
  }
  return sum;
}

console.log(main());
