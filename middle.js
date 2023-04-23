const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  const test = eqArrays(array1, array2);
  if (test === true) {
    console.log(`💚💚Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💙💙Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function (inputArray) {
  const middleElements = [];

  if (inputArray.length <= 2) {
    return middleElements;
  } else {
    for (let k = 0; k < inputArray.length; k++) {
      if (inputArray.length % 2 === 0) {
        if (k === inputArray.length / 2 - 1) {
          middleElements.push(inputArray[k]);
        } else if (k === inputArray.length / 2) {
          middleElements.push(inputArray[k]);
        }
      } else if (inputArray.length % 2 !== 0) {
        if (k === inputArray.length / 2 - 0.5) {
          middleElements.push(inputArray[k]);
        }
      }
    }
  }
  return middleElements;
};

console.log(middle([1, 2, 3, 4, 5]));

const middleArray = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(middleArray, [3, 4]);

const midArray = middle([1, 2, 3]);
assertArraysEqual(midArray, [2]);

const midArray2 = middle([1, 2, 3, 4, 5, 6, 7, 8]);
assertArraysEqual(midArray2, [4, 5]);

const midArray3 = middle([1]);
assertArraysEqual(midArray3, []);
