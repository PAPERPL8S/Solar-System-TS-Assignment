import { describe, expect, it } from "vitest";
import { getPlanetsWithNoMoons } from "../exercises/e15";
import { data as importedData } from "../data/data";

const localData = {
  planets: [
    { name: "Mercure", moonsCount: 0 },
    { name: "Vénus", moonsCount: 0 },
    { name: "Earth", moonsCount: 1 },
    { name: "Mars", moonsCount: 2 },
    { name: "Jupiter", moonsCount: 79 },
  ],
};

describe("planetsWithNoMoons", () => {
  it("Should exist", () => {
    expect(getPlanetsWithNoMoons).toBeInstanceOf(Function);
  });
  it("There should be 2 items in the array", () => {
    expect(getPlanetsWithNoMoons(localData.planets).length).toEqual(2);
  });
  it("The returned planet objects should be mercure and Venus", () => {
    expect(getPlanetsWithNoMoons(localData.planets).map((p) => p.name)).toEqual([
      "Mercure",
      "Vénus",
    ]);
  });
});
