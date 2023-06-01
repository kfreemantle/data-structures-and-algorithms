# Three ways to reverse a string

## Problem Domain

Reverse a string three different ways.  Only one way can be with built in methods.

### Method 1: built in functions

Use split(), reverse() and join() methods to convert the string to an array, reverse the array, and join the array into a string.  It's the preferred method for being the most straightforward and optimal with time/space complexity of O(n).

### Method 2: The Map function

Convert the string to an array with Array.from, then use .map to create a new array in reverse order, joined back into a string with .join.  Time and space complexity, like method 1, are O(n).

### Method 3: A recursive function

Continually take the first character of a string, reverse the remainder of the string, then append the first character to the end until the string is empty.  It looks fun but is less performant than the other two methods at O(n^2) time complexity, though space complexity remains O(n).

#### Reference

I rubber ducked this challenge and tested my answer against freeCodeCamp.

