// Even adding two numbers matters — because it’s the small steps, done consistently, that build the strongest foundations.

let a = 10;
let b = 20;
console.log(a+b);

// Difference between number and string.

let c = 10; // Number
let d = '10'; // String
// ⚠️ Though they look the same, one is a number and the other is a string — and that can completely change how JavaScript handles them in operations.

// 🔍 Try doing c + d and observe the result:
console.log(c + d); // 🧪 Output: '1010' — because JS converts number to string when using + with a string.

// TYPE COERCION in JavaScript:
// When you mix different data types in operations, JS tries to be smart and auto-converts (coerces) values.

let x = '5';
let y = 2;

console.log(x * y); // 🔧 Output: 10 — '5' is coerced into 5 (number), then multiplied
console.log(x - y); // 🔧 Output: 3  — same here, subtraction triggers numeric coercion
console.log(x / y); // 🔧 Output: 2.5

console.log(x + y); // ⚠️ Output: '52' — because + triggers string concatenation if any operand is a string

// 🧠 Lesson: JS decides coercion based on the operator. + = concat (if string involved), rest = numeric coercion.

// 💬 Type coercion: it’s not a bug, it’s a feature. Know it, use it, don’t get tricked by it. — Stark