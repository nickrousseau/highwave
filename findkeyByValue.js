const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💙💙Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestHorrorFilmByYear = {
  1996: "Scream",
  1997: "Scream 2",
  2000: "Scream 3",
  2011: "Scream 4",
  2022: "Scream 5",
  2023: "Scream 6",
};

assertEqual(findKeyByValue(bestHorrorFilmByYear, "Scream 5"), "2022");
assertEqual(findKeyByValue(bestHorrorFilmByYear, "Scream 3"), "2000");
