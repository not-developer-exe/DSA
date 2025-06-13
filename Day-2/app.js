// Math Functions

// Math is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions.

// Math.round()
// The Math.round() function returns the value of a number rounded to the nearest integer.

// console.log(Math.round(4.7)); // Output: 5
// console.log(Math.round(4.4)); // Output: 4

// Math.ceil()
// The Math.ceil() function returns the smallest integer greater than or equal to a given number.

// console.log(Math.ceil(4.2)); // Output: 5
// console.log(Math.ceil(4.8)); // Output: 5

// Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number.
// 
// console.log(Math.floor(4.2)); // Output: 4
// console.log(Math.floor(4.8)); // Output: 4

// Math.trunc()
// The Math.trunc() function returns the integer part of a number by removing any fractional digits.

// console.log(Math.trunc(4.2)); // Output: 4
// console.log(Math.trunc(5.8)); // Output: 5

// Math.pow()
// Math.pow() accepts two params, first is base and second is exponent. (base^exponent)

// console.log(Math.pow(4, 5)) // Output: 1024
// console.log(Math.pow(5, 4)) // Output: 625

// Math.sqrt()
// Math.sqrt() accepts one param and returns the square root of that number.

// console.log(Math.sqrt(1024)) // Output: 32
// console.log(Math.sqrt(625)) // Output: 25

// Math.cbrt()
// Math.cbrt() accepts one param and returns the cube root of that number.

// console.log(Math.cbrt(1000)) // Output: 10
// console.log(Math.cbrt(125)) // Output: 5

// Math.abs()
// Math.abs() accepts one param and returns the absolute value of that number. Basically it returns the positive value of a number.

// console.log(Math.abs(-4)) // Output: 4
// console.log(Math.abs(4)) // Output: 4

// Math.max()
// Math.max() accepts multiple params and returns the maximum value among them.

// console.log(Math.max(1, 2, 3, 4, 5)) // Output: 5
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // Output: 10

// Math.min()
// Math.min() accepts multiple params and returns the minimum value among them.

// console.log(Math.min(1, 2, 3, 4, 5)) // Output: 1
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // Output: 1

// Math.random()
// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).

// Variation of Math.random()

// console.log(Math.random() * 10) // Output: 0 to 9.999999999999999
// console.log(Math.random() * 10 + 1) // Output: 1 to 10.999999999999999

// GENERATE OTP using Math.random()

// console.log(Math.floor(Math.random()*10000)+1000) // Output: 1000 to 9999