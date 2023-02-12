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

//function takes in an object and a callback. It scans the object and
//returns the first key for which the callback returns a truthy value.
//if no key is found, it should return undefined.

const findKey = function (object, callback) {
  for (let obj in object) {
    if (callback(object[obj])) {
      return obj;
    }
  }
  return undefined;
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
);

const obj1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
const obj2 = "noma";

assertObjectsEqual(obj1, obj2);
