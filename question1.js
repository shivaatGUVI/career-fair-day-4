// 1. Given an input n, print a right angle triangle of stars
// n = 5;
// *
// **
// ***
// ****
// *****

// let input = 4;

function printRightAngleTriangle(n) {
  // loop run for n times

  // first loop for number of rows depending on n
  for (let a = 1; a <= n; a++) {
    // console.log("*");

    let string = "";
    // second/inner loop for adding stars to output string
    for (let b = 1; b <= a; b++) {
      string += "*";

      //   if (b === a) {
      //     string += "*";
      //   } else {
      //     string += "*!";
      //   }
    }

    console.log(string);

    // for 1 iteration - "*"
    // 2 iteration - "**"
    // 3 iteration - "***"
    // 4 iteration - "****"
    // 5 iteration - "*****"
  }
}

printRightAngleTriangle(4);
console.log("----------------");
printRightAngleTriangle(2);
console.log("----------------");
printRightAngleTriangle(3);
