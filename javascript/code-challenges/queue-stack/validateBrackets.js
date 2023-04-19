'use strict';

function validateBrackets(s) {
  // Create a stack to keep track of the opening brackets
  const stack = [];

  // Create a dictionary to map the opening brackets to their corresponding closing brackets
  const bracketMapping = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  // Iterate through the input string
  for (let i = 0; i < s.length; i++) {
      const char = s[i];

      // Check if the current character is an opening bracket
      if (bracketMapping[char]) {
          // Push the corresponding closing bracket to the stack
          stack.push(bracketMapping[char]);
      } else if (Object.values(bracketMapping).includes(char)) {
          // If it's not an opening bracket, it must be a closing bracket or an extra character
          // Check if the current character is a closing bracket
          // Pop the top element from the stack and check if it matches the current character
          if (stack.pop() !== char) {
              // If it doesn't match, the brackets are not balanced
              return false;
          }
      }
  }

  // If the stack is empty after processing the entire string, the brackets are balanced
  return stack.length === 0;
}

module.exports = { validateBrackets };
