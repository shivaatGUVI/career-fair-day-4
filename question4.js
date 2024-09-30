// 4. Given an integer array and it's length, find the largest element in an array

// let array = [1, 2, 3, 4]; //4
// let n = array.length;

[
  [2, 3, 4, 5, 6],
  [5, 6, 6, 7, 88],
  [6, 4, 3, 2],
];

function largestElement(array, n) {
  // to access all the elements in an array - loop

  let ref = array[0];
  for (let a = 1; a < n; a++) {
    let currentElement = array[a];
    if (currentElement > ref) {
      ref = currentElement;
    }

    // let ref = currentElement[a][0];
    // for (let b = 0; b < currentElement[a].length; b++) {
    //   let currentElementInside = currentElement[b];
    //   if (currentElementInside > ref) {
    //     ref = currentElement;
    //   }
    // console.log(ref);
    // }
  }

  console.log(ref);
}

[4, 1, 6, 8, 10, 2];

// ref = array[0]; 4 | 6 | 8 | 10
// for each element - check if currentElement > ref
// currentElement > ref === true -> ref = currentElement

// 1 > 4 ? false
// 6 > 4 ? true ref = 6
// 8 > 6 ? true ref = 8
// 10 > 8 ? true ref = 10
// 2 > 10 ? false

largestElement([4, 1, 6, 8, 10, 2], 6);
largestElement([1, 4, 1, 2], 4);
largestElement([0, 10, 25, 100, 60, 90], 6);
