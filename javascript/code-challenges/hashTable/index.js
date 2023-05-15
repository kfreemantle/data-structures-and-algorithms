
function repeatedWord(str) {
  // Initialize an empty Set to store the words we've seen so far.
  let words = new Set();

  // Convert the string to lowercase and split it into words based on space
  let wordArray = str.toLowerCase().split(' ');

  // Iterate over the words in the array.
  for (let word of wordArray) {
    // Remove any punctuation from the word
    word = word.replace(/[^a-z0-9]/gi, '');

    // If the word is already in the Set, return it.
    if (words.has(word)) {
      return word;
    }

    // Otherwise, add the word to the Set.
    words.add(word);
  }

  // If we've gone through all the words and found no repetitions, return null.
  return null;
}

module.exports = repeatedWord;
