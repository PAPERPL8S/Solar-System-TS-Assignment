// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters

import { Asteroid } from "../types/types";

export function getAsteroidDataByName({
  allData,
  asteroidName,
}: {
  allData: { asteroids: Asteroid[] };
  asteroidName: string;
}) {
  return allData.asteroids.find((asteroid) => asteroid.name === asteroidName);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
