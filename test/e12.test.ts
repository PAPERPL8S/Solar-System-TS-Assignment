import { describe, expect, it } from "vitest";
import { allPlanetsMoonsCount } from "../exercises/e12";
import { data as importedData } from "../data/data";

const localData = {
  planets: [
    { name: "Mercure", moonsCount: 0 },
    { name: "Vénus", moonsCount: 0 },
    { name: "Earth", moonsCount: 1 },
    { name: "Mars", moonsCount: 2 },
    { name: "Jupiter", moonsCount: 79 },
    { name: "Saturn", moonsCount: 82 },
    { name: "Uranus", moonsCount: 27 },
    { name: "Neptune", moonsCount: 14 },
  ],
};

describe("allPlanetsMoonsCount", () => {
  it("Should exist", () => {
    expect(allPlanetsMoonsCount).toBeInstanceOf(Function);
  });
  it("Should return 205", () => {
    expect(allPlanetsMoonsCount(localData)).toEqual(205);
  });
});
