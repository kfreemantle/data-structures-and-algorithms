const { Movies } = require("./movies");
const { sortTitle, sortYear, compareYear, compareTitle } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Intouchables"
    ]);
  });


  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });

  it("can compare years correctly", () => {
    expect(compareYear({ year: 2000 }, { year: 2001 })).toBeLessThan(0);
    expect(compareYear({ year: 2001 }, { year: 2000 })).toBeGreaterThan(0);
    expect(compareYear({ year: 2001 }, { year: 2001 })).toEqual(0);
  });

  it("can compare titles correctly", () => {
    expect(compareTitle({ title: "Aardvark" }, { title: "Bee" })).toBeLessThan(0);
    expect(compareTitle({ title: "Bee" }, { title: "Aardvark" })).toBeGreaterThan(0);
    expect(compareTitle({ title: "Aardvark" }, { title: "Aardvark" })).toEqual(0);
    expect(compareTitle({ title: "The Aardvark" }, { title: "Bee" })).toBeLessThan(0);
    expect(compareTitle({ title: "The Bee" }, { title: "Aardvark" })).toBeGreaterThan(0);
  });
});

