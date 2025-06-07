const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", function(answer) {
  const distanceInKm = Number(answer);

  if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
  } else {
    console.log("Tafadhali ingiza nambari halali ya kilomita.");
  }

  rl.close();
});
