import { day5inputs } from "./getInputs.js";

function rulesToDict(rules) {
  let dictionary = {};
  for (let i = 0; i < rules.length; i++) {
    let [first, second] = rules[i].split("|");
    if (typeof dictionary[first] === "undefined") {
      dictionary[first] = [];
    }
    dictionary[first].push(second);
  }
  return dictionary;
}

//needs to check: for each update, does each number satisfy all rules?
// input: 75, 0
// Output: 75 < 29, 75 < 53, 75 < 47, 75 < 61, 75 < 13
// For each [29, 53, 47, 61, 13] -> is 75 < each index?
// 97 < 75
// input: 47, 1

function part1main() {
  let [rules, updates] = day5inputs();
  let dict = rulesToDict(rules);
  let sum = 0;

  function checkPage(page, index, updateMap) {
    let entries = dict[page];
    if (typeof entries === "undefined") {
      return true;
    }
    //console.log(page, entries);
    for (let k = 0; k < entries.length; k++) {
      let pageToCheck = entries[k];
      let checkIndex = -1;
      if (pageToCheck in updateMap) {
        checkIndex = updateMap[pageToCheck];
        if (index > checkIndex) {
          return false;
        }
      }
      //console.log(page, index, "check against", pageToCheck, checkIndex);
    }
    return true;
  }

  for (let i = 0; i < updates.length; i++) {
    let update = updates[i];
    let updateMap = {};
    let valid = false;
    for (let j = 0; j < update.length; j++) {
      let page = update[j];
      updateMap[page] = j;
    }
    for (let j = 0; j < update.length; j++) {
      let page = update[j];
      valid = checkPage(page, j, updateMap);
      //console.log(page, j, valid);
      if (!valid) {
        break;
      }
    }
    if (valid) {
      let index = update.length;
      index = Math.floor(index / 2);
      sum += +update[index];
    }
  }
  return sum;
}

function part2main() {
  let [rules, updates] = day5inputs();
  let dict = rulesToDict(rules);
  let sum = 0;

  function checkPage(page, index, updateMap) {
    let entries = dict[page];
    if (typeof entries === "undefined") {
      return true;
    }
    //console.log(page, entries);
    for (let k = 0; k < entries.length; k++) {
      let pageToCheck = entries[k];
      let checkIndex = -1;
      if (pageToCheck in updateMap) {
        checkIndex = updateMap[pageToCheck];
        //console.log(page, index, "check against", pageToCheck, checkIndex);
        if (index > checkIndex) {
          //console.log("BAD PAGE HERE");
          return false;
        }
      }
    }
    return true;
  }

  function correctUpdate(update) {
    //console.log("INVALID", update);
    update.sort(function (a, b) {
      let first = dict[a] || [];
      let second = dict[b] || [];
      if (first.includes(b)) {
        return -1;
      }
      if (second.includes(a)) {
        return 1;
      }
    });
    let index = update.length;
    index = Math.floor(index / 2);
    //console.log("VALID", update);
    return update[index];
  }
  //console.log(dict);
  for (let i = 0; i < updates.length; i++) {
    let update = updates[i];
    let updateMap = {};
    let valid = false;
    for (let j = 0; j < update.length; j++) {
      let page = update[j];
      updateMap[page] = j;
    }
    //console.log(updateMap);
    for (let j = 0; j < update.length; j++) {
      let page = update[j];
      valid = checkPage(page, j, updateMap);
      //console.log(page, j, valid);
      if (!valid) {
        sum += +correctUpdate(update);
        break;
      }
    }
  }
  return sum;
}

console.log(part2main());
