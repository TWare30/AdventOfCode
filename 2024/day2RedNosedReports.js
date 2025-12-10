import { day2inputs } from "./getInputs.js";

function checkSafe(report, recur) {
  console.log("begin", report, recur);
  let order = +report[0] < +report[report.length - 1];
  let newReport = [];
  let newReport2 = [];
  //edge cases for first and last item
  let checkFirst = false;
  let checkLast = false;
  if (!recur) {
    newReport = report.toSpliced(0, 1);
    checkFirst = checkSafe(newReport, true);
    newReport = report.toSpliced(report.length - 1);
    checkLast = checkSafe(newReport, true);
    if (checkFirst || checkLast) {
      return true;
    }
  }
  let level = 0;
  let nextlevel = 0;
  let dampen = true;

  for (let j = 0; j <= report.length - 2; j++) {
    level = +report[j];
    nextlevel = +report[j + 1];
    if (order && level < nextlevel) {
      if (nextlevel - level > 3) {
        console.log("unsafe, greater than 3", report, level, nextlevel, recur);
        if (recur) {
          return false;
        }
        console.log("not recurring", recur);
        newReport = report.toSpliced(j, 1);
        newReport2 = report.toSpliced(j + 1, 1);
        dampen = checkSafe(newReport, true) || checkSafe(newReport2, true);
        if (!dampen) {
          return false;
        }
      }
    } else if (order) {
      console.log(
        "Unsafe, starts asc ends desc",
        report,
        level,
        nextlevel,
        recur
      );
      if (recur) {
        return false;
      }
      console.log("not recurring", recur);
      newReport = report.toSpliced(j, 1);
      newReport2 = report.toSpliced(j + 1, 1);
      dampen = checkSafe(newReport, true) || checkSafe(newReport2, true);
      if (!dampen) {
        return false;
      }
    } else if (!order && level > nextlevel) {
      if (level - nextlevel > 3) {
        console.log("unsafe, greater than 3", report, level, nextlevel, recur);
        if (recur) {
          return false;
        }
        console.log("not recurring", recur);
        newReport = report.toSpliced(j, 1);
        newReport2 = report.toSpliced(j + 1, 1);
        dampen = checkSafe(newReport, true) || checkSafe(newReport2, true);
        if (!dampen) {
          return false;
        }
      }
    } else if (!order) {
      console.log(
        "Unsafe, starts desc ends asc",
        report,
        level,
        nextlevel,
        recur
      );

      if (recur) {
        return false;
      }
      console.log("not recurring", recur);
      newReport = report.toSpliced(j, 1);
      newReport2 = report.toSpliced(j + 1, 1);
      dampen = checkSafe(newReport, true) || checkSafe(newReport2, true);
      if (!dampen) {
        return false;
      }
    }
  }
  return true;
}

function main() {
  let inputs = day2inputs();
  let report = [];
  // true = asc, false = desc;
  let order = false;
  let safeCount = 0;
  let safe = true;
  console.log(inputs.length);
  for (let i = 0; i < inputs.length; i++) {
    report = inputs[i];
    //begin report parse
    safe = checkSafe(report, false);
    //end report parse
    console.log(report, safe, i);
    // if (!safe) {
    // console.log(report, safe, i);
    // }
    if (safe) {
      safeCount++;
    }
  }
  return safeCount;
}
console.log(main());
