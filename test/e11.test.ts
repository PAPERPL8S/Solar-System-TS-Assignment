import { describe, expect, it } from "vitest";
import { lowMoonsPlanets } from "../exercises/e11";
import { data } from "../data/data";

const data = {
  planets: [
    { name: "Mars", moonsCount: 2 },
    { name: "Mercure", moonsCount: 0 },
    { name: "Earth", moonsCount: 1 },
    { name: "Vénus", moonsCount: 0 },
    { name: "Jupiter", moonsCount: 79 },
  ],
};

describe("lowMoonsPlanets", () => {
  it("Should exist", () => {
    expect(lowMoonsPlanets).toBeInstanceOf(Function);
  });
  it("Should return an array of 2 items", () => {
    expect(lowMoonsPlanets(data.planets).length).toEqual(4);
  });
  it("should be the objects for Mars, Mercure, Earth, Venus if I plug in data.planets", () => {
    expect(lowMoonsPlanets(data.planets).map((p) => p.name)).toEqual([
      "Mars",
      "Mercure",
      "Earth",
      "Vénus",
    ]);
  });
});
