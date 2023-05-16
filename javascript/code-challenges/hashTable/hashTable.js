class Hashtable {
  // Initialize an array with a certain size to store the values
  constructor(size = 50) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Hash function to get the index for a key
  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    // modulus by size keeps the hash within range.  Thanks ChatGPT!
    hashValue = hashValue % this.size;

    return hashValue;
  }

  // set method to add a key-value pair to the hash table
  set(key, value) {
    const keyHash = this.hash(key);
    const bucketTableIndex = keyHash % this.size;
    const bucket = this.buckets[bucketTableIndex];
    const storedElement = bucket.find((el) => el.key === key);

    if (storedElement) {
      storedElement.val = value;
    } else {
      bucket.push({ key: key, val: value });
    }
  }

  // get method to retrieve a value by its key
  get(key) {
    const keyHash = this.hash(key);
    const bucketTableIndex = keyHash % this.size;
    const bucket = this.buckets[bucketTableIndex];

    const storedElement = bucket.find((el) => el.key === key);

    return storedElement ? storedElement.val : undefined;
  }

  // has method to check whether a key is present in the hash table
  has(key) {
    const bucketTableIndex = this.hash(key) % this.size;
    const bucket = this.buckets[bucketTableIndex];

    const storedElement = bucket.find((el) => el.key === key);

    return storedElement != null;
  }

  // keys method to return all keys present in the hash table
  keys() {
    const keys = [];
    for (const bucket of this.buckets) {
      for (const element of bucket) {
        keys.push(element.key);
      }
    }
    return keys;
  }
}

module.exports = Hashtable;
