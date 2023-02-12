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

const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, (word) => word[0]);
//console.log(results1);

const words2 = ["dog", "cat", "bird"];
const results2 = map(words2, (word) => word[0]);
assertArraysEqual(results2, ["d", "c", "b"]);

const results3 = map(words2, (word) => word.length);
assertArraysEqual(results3, [3, 3, 4]);

const results4 = map(words2, (word) => word[0] + word[1]);
assertArraysEqual(results4, ["do", "ca", "bi"]);

