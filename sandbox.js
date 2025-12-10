function main() {
  return 10;
}

function maxRemaining(digits) {
  let num = 9;
  let remainder = 0;
  digits--;
  while (digits >= 0 && num >= 0) {
    remainder += num;
    num--;
    digits--;
  }
  return remainder;
}

function findCombos(sum, digits, map = {}) {
  if (digits == 2) {
    console.log(sum, digits, map);
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (i == j) {
          continue;
        }
        if (i + j == sum) {
          map[i] = j;
        }
      }
    }
  } else {
    for (let i = 1; i <= 9; i++) {
      let remainder = sum - i;
      if (remainder <= maxRemaining(digits - 1)) {
        map[i] = {};
        findCombos(remainder, digits - 1, map[i]);
      }
    }
  }
  return map;
}

function cleanCombos(map) {}

//console.log(cleanCombos(findCombos(18, 4)));
console.log(findCombos(15, 2));
