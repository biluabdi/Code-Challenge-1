const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function estimateTransactionFee(amountToSend) {
  const feePercent = 0.015;
  const minFee = 10;
  const maxFee = 70;

  let fee = amountToSend * feePercent;

  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalAmount = amountToSend + fee;

  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}\n`);
  console.log("Send Money Securely!");
}

rl.question("Unatuma Ngapi? (KES): ", function(answer) {
  const amountToSend = Number(answer);

  if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
  } else {
    console.log("Tafadhali ingiza kiasi halali.");
  }

  rl.close();
});
