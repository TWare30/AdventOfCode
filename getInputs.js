import { readFileSync } from "fs";

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
