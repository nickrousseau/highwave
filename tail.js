const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💙💙Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let answer = [];
  answer = array.slice(1);
  return answer;
};

console.log(tail([1,2,3,4]));
console.log(tail([1]));
console.log(tail([]));

const result = tail(["Hello", "Dev", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Dev"); // ensure first element is "Dev"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Dev", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!