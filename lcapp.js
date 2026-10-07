// ======================================================
// Unit 0 Skill Examples
// ======================================================

// ------------------------------------------------------
// Values, Data Types, and Operations
// ------------------------------------------------------
let cycleDay = 12;
let tomorrowCycleDay = cycleDay + 1;
console.log("Tomorrow your cycle day will be:", tomorrowCycleDay);

// ------------------------------------------------------
// Stringing Characters Together
// ------------------------------------------------------
let userName = "Kay";
let welcomeMessage = "Hello " + userName + ", here is your daily hormone insight.";
console.log(welcomeMessage);

// ------------------------------------------------------
// Control Structures and Logic
// ------------------------------------------------------
if (cycleDay > 14 && cycleDay <= 28) {
  console.log("You may feel lower energy today. Try magnesium-rich foods.");
} else {
  console.log("Your energy may be higher today. Light exercise could feel great.");
}

// ------------------------------------------------------
// Building Arrays
// ------------------------------------------------------
let safeProducts = ["Organic Pads", "pH-Balanced Wash", "Magnesium Supplement"];
console.log("Safe product list:", safeProducts);

// ------------------------------------------------------
// Using Arrays
// ------------------------------------------------------
let supplements = safeProducts.filter(item => item.includes("Supplement"));
console.log("Recommended supplements:", supplements);

// ------------------------------------------------------
// Working With Loops
// ------------------------------------------------------
let womenDoctors = ["Dr. Smith – OB/GYN", "Dr. Lopez – Dentist", "Dr. Patel – Endocrinologist"];

for (let i = 0; i < womenDoctors.length; i++) {
  console.log("Available provider:", womenDoctors[i]);
}
}
