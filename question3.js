// 3. Given an input n, print a inverted right angle triangle of number
// n = 4
// 1
// 12
// 123
// 1234

function printRightAngleTriangle(n) {
  // loop run for n times

  // first loop for number of rows depending on n
  for (let a = 1; a <= n; a++) {
    // console.log("*");

    let string = "";
    // second/inner loop for adding stars to output string
    for (let b = 1; b <= a; b++) {
      string += b;
    }

    console.log(string);

    // for 1 iteration a=1 - "1"
    // 2 iteration a=2 - "12"
    // 3 iteration a=3 - "123"
    // 4 iteration a=4 - "1234"
  }
}

printRightAngleTriangle(4);
console.log("----------------");
printRightAngleTriangle(2);
console.log("----------------");
printRightAngleTriangle(3);
