// challenge 42: reverse a string three different ways

// limitations: only one of the three ways can use built in methods


// example 1: built in methods. convert a string to an array, reverse the array, join into a new string, return the new string.
// this would be my preferred base case without further information
// big O: O(n) for both, determined by the length of the string

function reverseString(str) {
  let splitString = str.split("");  // this splits the string into an array of characters
  let reverseString = splitString.reverse();  // reverses the array of characters
  let joinString = reverseString.join("");  // joins the reversed array back into a string
  return joinString;  // return the reversed string
}
console.log(reverseString("Hola"));  // expected value: aloH

// example 2; using the map() method.  This is plan B, because it's overly complex for the task
// also big O of O(n).


function reverseWithMap(str) {
  let strArray = Array.from(str);
  let reversedArray = strArray.map((char, i) => strArray[strArray.length - i - 1]);
  return reversedArray.join("");
}

console.log(reverseWithMap("Hola"));  // aloH


// example 3: recursive function.  It feels cool but I don't see why it's preferable to options 1 or 2.
// big O: time is O(n^2) because you're calling a function within itself.  space is O(n) because it goes up by the length of the string being processed.

function reverseWithRecursion(str) {
  if (str === "") {
    return str;
  } else {
    return reverseWithRecursion(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseWithRecursion("Hola"));  // aloH

