function createBankAccount(initialBalance) {
    // This variable is PRIVATE. 
    // It cannot be accessed from outside this function.
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: $${amount}`);
            }
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log("Insufficient funds!");
            }
        },
        checkBalance: function() {
            return `Current Balance: $${balance}`;
        }
    };
}

const myAccount = createBankAccount(100);

myAccount.deposit(50);          // Output: Deposited: $50
console.log(myAccount.checkBalance()); // Output: Current Balance: $150
myAccount.withdraw(10)
console.log(myAccount.checkBalance());

// ATTEMPTING TO CHEAT:
console.log(myAccount.balance); // Output: undefined
myAccount.balance = 1000000;    // This does NOTHING to the internal balance
console.log(myAccount.checkBalance()); // Output: Current Balance: $150






function human(name) {
  let secret = "I like pineapple pizza"; // Hidden!
  return {
    sayName: () => console.log(name),
    revealSecret: () => console.log(secret)
  };
}
const person = human("Bob");
person.revealSecret()