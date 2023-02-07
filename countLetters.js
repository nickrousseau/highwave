const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💙💙Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const countResult = {};
  for (const letter of sentence) {
    if (countResult[letter]) {
      countResult[letter] += 1;
    } else {
      countResult[letter] = 1;
    }
  }
  return countResult;
};

constResult = countLetters("elephant");
console.log(constResult);

assertEqual(constResult["e"], 2);
assertEqual(constResult["k"], undefined);
assertEqual(constResult["l"], 1);
assertEqual(constResult["q"], undefined);
assertEqual(constResult["t"], 1);
