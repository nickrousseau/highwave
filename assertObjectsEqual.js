const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💙💙Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function (object1, object2) {
  let arrayOfKeys1 = Object.keys(object1);
  let arrayOfKeys2 = Object.keys(object2);

  if (arrayOfKeys1.length !== arrayOfKeys2.length) {
    return false;
  } else
    for (const value of arrayOfKeys1) {
      if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
        return eqArrays(object1[value], object2[value]);
      } else {
        if (object1[value] !== object2[value]) {
          return false;
        }
      }
    }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `💚💚Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `💚💚Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

assertObjectsEqual(
  longSleeveMultiColorShirtObject,
  anotherMultiColorShirtObject
);
