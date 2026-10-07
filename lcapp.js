// ======================================================
// HerHealth Hub – Example Code Using Unit 0 Skills
// ======================================================

// ------------------------------------------------------
// Values, Data Types, and Operations
// ------------------------------------------------------
// Pseudocode:
// 1. Store a user's cycle day as a number.
// 2. Add 1 to show what tomorrow's cycle day will be.
// 3. Log the result.

// Skill: Values (number), Data Types, Arithmetic Operation
let cycleDay = 12;
let tomorrowCycleDay = cycleDay + 1;
console.log("Tomorrow your cycle day will be:", tomorrowCycleDay);


// ------------------------------------------------------
// Stringing Characters Together
// ------------------------------------------------------
// Pseudocode:
// 1. Store a user's name.
// 2. Build a personalized health message using string concatenation.
// 3. Print the message.

// Skill: Strings, concatenation
let userName = "Kay";
let welcomeMessage = "Hello " + userName + ", here is your daily hormone insight.";
console.log(welcomeMessage);


// ------------------------------------------------------
// Control Structures and Logic
// ------------------------------------------------------
// Pseudocode:
// 1. Check if the cycle day is in the luteal phase.
// 2. If it is, show a specific recommendation.
// 3. Otherwise, show a general message.

// Skill: if/else logic
if (cycleDay > 14 && cycleDay <= 28) {
  console.log("You may feel lower energy today. Try magnesium-rich foods.");
} else {
  console.log("Your energy may be higher today. Light exercise could feel great.");
}


// ------------------------------------------------------
// Building Arrays
// ------------------------------------------------------
// Pseudocode:
// 1. Create an array of safe products recommended for women.
// 2. Log the array to confirm it was built correctly.

// Skill: Creating arrays
let safeProducts = ["Organic Pads", "pH-Balanced Wash", "Magnesium Supplement"];
console.log("Safe product list:", safeProducts);


// ------------------------------------------------------
// Using Arrays
// ------------------------------------------------------
// Pseudocode:
// 1. Filter the product list to find only supplements.
// 2. Print the filtered results.

// Skill: Array filtering
let supplements = safeProducts.filter(item => item.includes("Supplement"));
console.log("Recommended supplements:", supplements);


// ------------------------------------------------------
// Working With Loops
// ------------------------------------------------------
// Pseudocode:
// 1. Loop through a list of women doctors.
// 2. Print each doctor’s name so the user can choose one.

// Skill: For loop
let womenDoctors = ["Dr. Smith – OB/GYN", "Dr. Lopez – Dentist", "Dr. Patel – Endocrinologist"];

for (let i = 0; i < womenDoctors.length; i++) {
  console.log("Available provider:", womenDoctors[i]);
}
