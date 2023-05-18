
function leftJoin(leftMap, rightMap) {
  const result = [];

  // Iterate over each entry in the left Map.
  for (const [key, value] of leftMap) {
    // Each row in the result will be an array: [word, synonym, antonym].
    const row = [key, value];

    // If the right Map has a value for the key, append it to the row, else append null.
    row.push(rightMap.has(key) ? rightMap.get(key) : null);

    // Append the row to the result.
    result.push(row);
  }

  return result;
}

module.exports = leftJoin;
