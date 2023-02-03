const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💙💙Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  const yes = "These arrays are the same.";
  const no = "These arrays are not the same.";

  if (array1.length !== array2.length) {
    return no;
  }
  for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return no;
      }
    }
  return yes;
  }

console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

