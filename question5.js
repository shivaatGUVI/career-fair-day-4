// 5. Given a sorted continuous integer array and it's length, find the missing number in an array

// sorted - elements are in increasing order / arranged in ascending order

// let array = [1, 2, 3, 4, 5, 6, 7]; // 4
// let n = array.length;

// ref = array[0];
// for every iteration -> ref++; 1 -> 2
// currentElement === ref ? true
// false

// 3 === 2 ? false
// console.log(ref);

// ref = 1;
// currentElement = 2, ref++ 1 -> 2; 2 === 2 ? true
// currentElement = 3, ref++ 2 -> 3; 3 === 3 ? true
// currentElement = 5, ref++ 3 -> 4; 5 === 4 ? false -> console.log(ref)

// arr=[3,6,9,15,18] // 4

function missingElement(array, n) {
  let ref = array[0];

  for (let a = 1; a < n; a++) {
    let currentElement = array[a];
    ref++;

    if (currentElement !== ref) {
      console.log(ref);
      //   break; // breaks the loop
      return; // stops the function execution
    }

    // if (currentElement === ref) {
    // } else {
    //   console.log(ref);
    //   //   break; // breaks the loop
    //   return; // stops the function execution
    // }
  }

  console.log("No missing elements");
}

missingElement([1, 2, 3, 5, 6, 7], 6);
missingElement([7, 9, 10], 3);
missingElement([1, 2, 3, 4, 5], 5);
