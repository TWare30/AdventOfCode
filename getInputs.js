import { readFile, readFileSync } from "fs";

export function day1Inputs() {
  let data = readFileSync("day1file.txt");
  let column1 = [];
  let column2 = [];
  let text = data.toString();
  let lines = text.split("\r");
  let entries = [];
  let line = "";
  for (line of lines) {
    line = line.trim();
    entries = line.split("   ");
    column1.push(entries[0]);
    column2.push(entries[1]);
  }
  return [column1, column2];
}

export function day2inputs() {
  let data = readFileSync("day2file.txt");
  //let data = readFileSync("day2example.txt");
  let text = data.toString();
  let lines = text.split("\r\n");
  let array = [];
  let line = "";
  for (line of lines) {
    array.push(line.split(" "));
  }
  return array;
}

export function day3inputs() {
  let data = readFileSync("day3file.txt");
  let text = data.toString();
  return text;
}

export function day4inputs() {
  let data = readFileSync("day4file.txt");
  //let data = readFileSync("day4example.txt");
  let text = data.toString();
  return text;
}

export function day5inputs() {
  //let data = readFileSync("day5example.txt");
  let data = readFileSync("day5file.txt");
  let rules = [];
  let updates = [];
  let lines = data.toString().split("\r\n");
  rules = lines.filter((str) => {
    return str.includes("|");
  });
  updates = lines.filter((str) => {
    return str.includes(",");
  });
  updates = updates.map((str) => {
    return str.split(",");
  });
  return [rules, updates];
}

export function day6inputs() {
  let data = readFileSync("day6example.txt").toString();
  //let data = readFileSync("day6file.txt").toString();
  return data;
}

export function day7inputs() {
  let data = readFileSync("day7example.txt").toString();
  //let data = readFileSync("day7file.txt").toString();
  let lines = data.split("\r\n");
  let equations = [];
  for (let i = 0; i < lines.length; i++) {
    let equation = lines[i].split(": ");
    equation[1] = equation[1].split(" ");
    equations.push(equation);
  }
  return equations;
}
