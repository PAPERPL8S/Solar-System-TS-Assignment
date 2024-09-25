// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../types/types";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const map = new Map();
  asteroids.forEach((asteroid) => {
    if (map.has(asteroid.discoveryYear)) {
      map.set(asteroid.discoveryYear, map.get(asteroid.discoveryYear) + 1);
    } else {
      map.set(asteroid.discoveryYear, 1);
    }
  });

  let maxYear = 0;
  let maxCount = 0;
  map.forEach((count, year) => {
    if (count > maxCount) {
      maxYear = year;
      maxCount = count;
    }
  });

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
