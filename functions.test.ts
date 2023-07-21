// functions.test.ts

import {
  capitalize,
  multiply,
  factorial,
  isEven,
  isPalindrome,
} from "./functions";

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("factorial function returns the factorial of a number", () => {
  expect(factorial(5)).toBe(120); // 5! = 5 * 4 * 3 * 2 * 1 = 120
});

test("isEven function checks if a number is even", () => {
  expect(isEven(1)).toBe(false); // 1 is not even
  expect(isEven(2)).toBe(true); // 2 is even
});

test("isPalindrome function checks if a string is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true); // "racecar" is a palindrome
  expect(isPalindrome("hello")).toBe(false); // "hello" is not a palindrome
});
