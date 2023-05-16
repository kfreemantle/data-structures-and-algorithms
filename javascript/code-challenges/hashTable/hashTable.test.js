const Hashtable = require('./hashTable');

describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable(50);
  });

  it('should hash the key', () => {
    const hashValue = hashtable.hash('test');
    expect(hashValue).toBeGreaterThan(0);
  });

  it('should set key/value in the hashtable', () => {
    hashtable.set('test', 'value');
    expect(hashtable.get('test')).toEqual('value');
  });

  it('should return null for a key that does not exist in the hashtable', () => {
    expect(hashtable.get('noKey')).toBeUndefined();
  });

  it('should return a list of all unique keys that exist in the hashtable', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.keys()).toEqual(expect.arrayContaining(['key1', 'key2']));
  });

  it('should handle a collision within the hashtable', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key1', 'value3');
    expect(hashtable.get('key1')).toEqual('value3');
  });

  it('should retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key1', 'value3');
    expect(hashtable.get('key1')).toEqual('value3');
  });

  it('should hash a key to an in-range value', () => {
    const hashValue = hashtable.hash('test');
    expect(hashValue).toBeLessThan(50);
  });
});
