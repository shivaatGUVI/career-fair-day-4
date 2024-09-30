// 6. Given an array and it's length, reverse an array

let array = [100, 0, 5, 6, 10];
// [10, 6, 5, 0, 100];

let array2 = [2, 4, 10, 8];
// [8, 10, 4, 2]

function reverseArray(array, n) {
  let outputArray = [];

  for (let a = n - 1; a >= 0; a--) {
    let currentElement = array[a];
    outputArray.push(currentElement);
  }

  console.log(outputArray);
}

// reverseArray([100, 0, 5, 6, 10], 5);
// reverseArray([2, 4, 10, 8], 4);

// two pointer method
// [100, 0, 5, 6, 10]

// [10, 0, 5, 6, 100]

// [10, 6, 5, 0, 100]

/**
 * let left = 0; let right = n-1
 *
 * array[left] , array[right] 100 , 10
 *
 * ref = array[left] // 100
 *
 * array[left] = array[right]  10
 *
 * array[right] = ref  100
 *
 * left++; right--;
 *
 */

function reverseArray2(array, n) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let ref = array[left];

    array[left] = array[right];
    array[right] = ref;

    left++;
    right--;
  }

  console.log(array);
}

reverseArray2([100, 0, 5, 6, 10], 5);
reverseArray2([2, 4, 10, 8], 4);
