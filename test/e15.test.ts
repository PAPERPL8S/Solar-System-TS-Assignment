import { describe, expect, it } from "vitest";
import { getPlanetsWithNoMoons } from "../exercises/e15";
import { data } from "../data/data";

describe("getPlanetsWithNoMoons", () => {
  it("Should exist", () => {
    expect(getPlanetsWithNoMoons).toBeInstanceOf(Function);
  });

  it("There should be 2 planets with no moons", () => {
    const planetsWithNoMoons = getPlanetsWithNoMoons(data.planets);
    expect(planetsWithNoMoons.length).toEqual(2);
  });

  it("The returned planet objects should be Mercure and Vénus", () => {
    const planetsWithNoMoons = getPlanetsWithNoMoons(data.planets);
    const planetNames = planetsWithNoMoons.map((planet) => planet.name);
    expect(planetNames).toEqual(["Mercure", "Vénus"]);
  });
});
