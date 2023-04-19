'use strict';

// Import the validateBrackets function from the validateBrackets.js file
const { validateBrackets } = require('../validateBrackets');

// Test cases
const testCases = [
    { input: '{}', expected: true },
    { input: '{}(){}', expected: true },
    { input: '()[[Extra Characters]]', expected: true },
    { input: '(){}[[]]', expected: true },
    { input: '{}{Code}[Fellows](())', expected: true },
    { input: '[({}]', expected: false },
    { input: '(]', expected: false },
    { input: '{(})', expected: false },
    { input: '{', expected: false },
    { input: ')', expected: false },
    { input: '[}', expected: false }
];

// Run the tests
describe('validateBrackets', () => {
    testCases.forEach((testCase, index) => {
        const { input, expected } = testCase;
        test(`Test case ${index + 1}: input = "${input}", expected = ${expected}`, () => {
            const result = validateBrackets(input);
            expect(result).toEqual(expected);
        });
    });
});
