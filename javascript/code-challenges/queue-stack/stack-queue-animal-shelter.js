'use strict';

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  // Enqueue an animal to the shelter
  enqueue(animal) {
    // Check if the animal is a dog or a cat
    if (animal.species === "dog") {
      // Add the dog to the dogs queue
      this.dogs.push(animal);
    } else if (animal.species === "cat") {
      // Add the cat to the cats queue
      this.cats.push(animal);
    } else {
      // If the animal is not a dog or a cat, do nothing
      console.error("Invalid species. Only dogs and cats are allowed.");
    }
  }

  // Dequeue an animal from the shelter based on the preference
  dequeue(pref) {
    // If the preference is "dog", dequeue a dog
    if (pref === "dog") {
      return this.dogs.shift();
    }
    // If the preference is "cat", dequeue a cat
    else if (pref === "cat") {
      return this.cats.shift();
    }
    // If the preference is neither "dog" nor "cat", return null
    else {
      console.error("Invalid preference. Only 'dog' or 'cat' is allowed.");
      return null;
    }
  }
}

// Export the Animal and AnimalShelter classes
module.exports = { Animal, AnimalShelter };
