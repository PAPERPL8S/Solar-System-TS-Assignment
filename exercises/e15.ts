// SPACE DATA EXERCISE 15
// Return an array of Planets' without moons

interface Planet {
  moonsCount: number;
}

export const getPlanetsWithNoMoons = (planets: Planet[]): Planet[] => {
  return planets.filter((planet) => planet.moonsCount === 0);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
