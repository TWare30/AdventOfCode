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
