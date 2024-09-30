// 2. Given an input n, print a inverted right angle triangle of stars
// n = 5;
// *****
// ****
// ***
// **
// *

// 1 - 4
// 4 - 1

function printInverseRightAngleTriangle(n) {
  // loop run for n times

  // first loop for number of rows depending on n
  for (let a = n; a >= 1; a--) {
    // console.log("*");

    let string = "";
    // second/inner loop for adding stars to output string
    for (let b = 1; b <= a; b++) {
      string += "* ";
      //   if (b === a) {
      //     string += "*";
      //   } else {
      //     string += "*!";
      //   }
    }

    console.log(string);

    // for 1 iteration a=4 - "****"
    // 2 iteration a=3 - "***"
    // 3 iteration a=2 - "**"
    // 4 iteration a=1 - "*"
  }
}

printInverseRightAngleTriangle(4);
console.log("----------------");
printInverseRightAngleTriangle(2);
console.log("----------------");
printInverseRightAngleTriangle(3);
