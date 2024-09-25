// SPACE DATA EXERCISE 15
// Return an array of Planets' without moons

import { PlanetData } from "../types/types";

export const getPlanetsWithNoMoons = (planets: PlanetData[]): PlanetData[] => {
  return planets.filter(
    (planet) => planet.moonsCount === 0 || planet.moonsCount === undefined,
  );
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
