'use strict';

const { Animal, AnimalShelter } = require('../stack-queue-animal-shelter');

describe('AnimalShelter', () => {
  test('enqueue animals and maintain the order for dogs and cats separately', () => {
    const shelter = new AnimalShelter();
    const dog1 = new Animal('Rex', 'dog');
    const dog2 = new Animal('Max', 'dog');
    const cat1 = new Animal('Whiskers', 'cat');
    const cat2 = new Animal('Fluffy', 'cat');

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('dog')).toBe(dog1);
    expect(shelter.dequeue('cat')).toBe(cat1);
    expect(shelter.dequeue('dog')).toBe(dog2);
    expect(shelter.dequeue('cat')).toBe(cat2);
  });

  test('dequeue with invalid preference returns null', () => {
    const shelter = new AnimalShelter();
    const dog1 = new Animal('Rex', 'dog');
    shelter.enqueue(dog1);

    expect(shelter.dequeue('bird')).toBeNull();
  });

  test('enqueue with invalid species does not add the animal to the shelter', () => {
    const shelter = new AnimalShelter();
    const bird = new Animal('Tweety', 'bird');

    shelter.enqueue(bird);
    expect(shelter.dequeue('bird')).toBeNull();
  });
});
