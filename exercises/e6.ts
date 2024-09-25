// SPACE DATA EXERCISE 6
// Return an array with all asteroids discovered after a given year

import { Asteroid } from "../types/types";

export function getAsteroidsDiscoveredAfterYear(
  asteroids: Asteroid[],
  year: number,
): Asteroid[] {
  return asteroids.filter((asteroid) => {
    console.log(
      `Checking asteroid: ${asteroid.name}, discovered in ${asteroid.discoveryYear}`,
    );
    return asteroid.discoveryYear > year;
  });
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
