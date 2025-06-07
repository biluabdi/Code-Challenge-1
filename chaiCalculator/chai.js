const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateChaiIngredients(numberOfCups) {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const teaLeaves = 1 * numberOfCups;
  const sugar = 2 * numberOfCups;

  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);
}

rl.question("Karibu! How many cups of Chai Bora would you like to make? ", function(answer) {
  const numberOfCups = Number(answer);

  if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
  } else {
    console.log("Please enter a valid number of cups.");
  }

  rl.close();
});
