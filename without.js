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

const without = function (source, itemsToRemove) {
  let result = source;

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
    if (source[i] === itemsToRemove[j]) {
      result.splice(i, 1);
    }
  }
}
  return result;
};

const words = ["hello", "world", "lighthouse"];
const newArray = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(newArray, ["hello", "world", "lighthouse"]);

