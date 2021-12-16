function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}
Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};
const MAXIMUM_FITNESS = 10;
Pet.prototype.walk = function () {
  if (this.fitness + 4 <= 10) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};
const MINIMUM_HUNGER = 0;
Pet.prototype.feed = function () {
  if (this.hunger - 3 > 0) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};

module.exports = Pet;
