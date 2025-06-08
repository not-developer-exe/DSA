// Even adding two numbers matters — because it’s the small steps, done consistently, that build the strongest foundations.

// let a = 10;
// let b = 20;
// console.log(a+b);

// Difference between number and string.

// let c = 10; // Number
// let d = '10'; // String
// ⚠️ Though they look the same, one is a number and the other is a string — and that can completely change how JavaScript handles them in operations.

// 🔍 Try doing c + d and observe the result:
// console.log(c + d); // 🧪 Output: '1010' — because JS converts number to string when using + with a string.

// TYPE COERCION in JavaScript:
// When you mix different data types in operations, JS tries to be smart and auto-converts (coerces) values.

// let x = '5';
// let y = 2;

// console.log(x * y); // 🔧 Output: 10 — '5' is coerced into 5 (number), then multiplied
// console.log(x - y); // 🔧 Output: 3  — same here, subtraction triggers numeric coercion
// console.log(x / y); // 🔧 Output: 2.5

// console.log(x + y); // ⚠️ Output: '52' — because + triggers string concatenation if any operand is a string

// 🧠 Lesson: JS decides coercion based on the operator. + = concat (if string involved), rest = numeric coercion.

// 💬 Type coercion: it’s not a bug, it’s a feature. Know it, use it, don’t get tricked by it. —  Stark

// Prompt - It’s the doorway where JavaScript pauses and asks the user, “Hey genius, give me some input to work with.” — Stark

// let prompt = prompt('Give me some prompt: ');


//Type Casting

// let input = prompt('Hey genius, give me some input to work with.') // Output will be a string. No matter what you give as input.

// let age = Number(prompt('Enter your age: ')); // Output will be a number.

// Type Casting — It’s when you take control and manually convert one data type into another, like saying, 
// “I don’t care what you were born as, you’re a Number now.” — Stark

// Swapping;

// Method - 1: Swapping using an extra variable.
// let a = 10;
// let b = 20;
// let c;

// c = a; // c = 10, a = 10, b = 20
// a = b; // c = 10, a = 20, b = 20
// b = c; // c = 10, a = 20, b = 10

// console.log(a, b, c); // Output: 20 10 10

// Method - 2: Swapping without using an extra variable.

// let a = 10;
// let b = 20; 

// console.log(a, b); // Output: 10 20

// a = a + b; // (10 + 20 = 30) a = 30, b = 20
// b = a - b; // (30 - 20 = 10) a = 30, b = 10
// a = a - b; // (30 - 10 = 20) a = 20, b = 10

// console.log(a, b); 


// Method - 3: Swapping using Destructuring.

// let a = 10;
// let b = 20;

// [a,b] = [b,a];

// console.log(a, b); 

// Swapping — It’s the art of switching values between two variables like a boss — no duplicates, no confusion, just a clean exchange of identities. — Stark