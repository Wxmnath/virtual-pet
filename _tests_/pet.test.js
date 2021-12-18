const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    const pet = new Pet("Fido");
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });

  it("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toEqual(0);
  });
  it("has an initial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it("decrease the fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe("Walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Fido");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  it("stops fitness going above a maximum of 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("Feed", () => {
  it("decreases hunger by 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 4;
    pet.feed();
    expect(pet.hunger).toEqual(1);
  });
  it("decreases hunger by a minimum of 0", () => {
    const pet = new Pet("Fido");
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe("checkUp)", () => {
  it("Checks how the pet is feeling", () => {
    const pet = new Pet("Fido");
    pet.fitness = 2;
    pet.hunger = 6;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am Hungry and I need a walk!");
  });
  it("Checks how the pet is feeling", () => {
    const pet = new Pet("Fido");
    pet.fitness = 2;
    pet.hunger = 2;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I need a walk!");
  });
  it("Checks how the pet is feeling", () => {
    const pet = new Pet("Fido");
    pet.fitness = 10;
    pet.hunger = 6;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am Hungry!");
  });
  it("Checks how the pet is feeling", () => {
    const pet = new Pet("Fido");
    pet.fitness = 10;
    pet.hunger = 0;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I feel great!");
  });
});
