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

const flatten = function (array) {
  result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

const flattenedArray = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flattenedArray, [1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flattenedArray, [1, 2, 3, 4, 5, 6]);
