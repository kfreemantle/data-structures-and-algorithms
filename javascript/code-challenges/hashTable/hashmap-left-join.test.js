const leftJoin = require('./hashmap-left-join');

describe('leftJoin', () => {
  const synonyms = new Map([
    ['diligent', 'employed'],
    ['fond', 'enamored'],
    ['guide', 'usher'],
    ['outfit', 'garb'],
    ['wrath', 'anger'],
  ]);

  const antonyms = new Map([
    ['diligent', 'idle'],
    ['fond', 'averse'],
    ['guide', 'follow'],
    ['flow', 'jam'],
    ['wrath', 'delight'],
  ]);

  it('performs a left join', () => {
    expect(leftJoin(synonyms, antonyms)).toEqual([
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight'],
    ]);
  });

  it('handles an empty left Map', () => {
    expect(leftJoin(new Map(), antonyms)).toEqual([]);
  });

  it('returns null for all antonyms when the right Map is empty', () => {
    const expected = Array.from(synonyms, ([key, value]) => [key, value, null]);
    expect(leftJoin(synonyms, new Map())).toEqual(expected);
  });
});
