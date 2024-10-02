// BankAccount Class Definition

class BankAccount {

  // Constructor to initialize the account holder's name, initial balance, and transaction history

    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
      this.transactionHistory = [];            // Array to keep track of all transactions.
    }
  
    // Static method to create a new acount
    // Create a New Account
    static createAccount(accountHolder, initialBalance) {
      return new BankAccount(accountHolder, initialBalance);
    }
  
    // Deposit Money into the Account
    deposit(amount) {
      // Ensure the deposite amount  is positive.
      if (amount <= 0) {
        console.log('Deposit amount must be positive.');
        return;
      }

      // Update the account balance.
      this.balance += amount;
      // Record the deposite transaction in the transaction history.
      this.transactionHistory.push({
        date: new Date().toISOString(),
        type: 'Deposit',
        amount
      });
      // Output the new balance after deposite.
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    // Withdraw Money from the Account
    withdraw(amount) {
      // Ensure the withdrawal amount is positive
      if (amount <= 0) {
        console.log('Withdrawal amount must be positive.');
        return;
      }

      // Check if there are sufficient funds for the withdrawal.
      if (amount > this.balance) {
        console.log('Insufficient balance.');
        return;
      }
      this.balance -= amount;
      this.transactionHistory.push({
        date: new Date().toISOString(),
        type: 'Withdrawal',
        amount
      });
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  
    // Check Account Balance
    checkBalance() {
      return this.balance;
    }
  
    // Transfer Money to Another Account
    transfer(amount, targetAccount) {
      if (amount <= 0) {
        console.log('Transfer amount must be positive.');
        return;
      }
      if (amount > this.balance) {
        console.log('Insufficient balance for transfer.');
        return;
      }
      this.withdraw(amount); // Update balance in the source account
      targetAccount.deposit(amount); // Update balance in the target account
  
      this.transactionHistory.push({
        date: new Date().toISOString(),
        type: 'Transfer',
        amount,
        target: targetAccount.accountHolder
      });
  
      targetAccount.transactionHistory.push({
        date: new Date().toISOString(),
        type: 'Transfer',
        amount,
        source: this.accountHolder
      });
  
      console.log(`Transferred $${amount} to ${targetAccount.accountHolder}.`);
    }
  
    // Print Statement of Transactions
    printStatement() {
      return this.transactionHistory.map(transaction => {
        return `${transaction.date} - ${transaction.type}: $${transaction.amount}${transaction.target ? ' (To: ' + transaction.target + ')' : ''}${transaction.source ? ' (From: ' + transaction.source + ')' : ''}`;
      }).join('\n');
    }
  }
  
  // Example Usage
  // Creating two accounts for Sanika and Kunal.
  const account1 = BankAccount.createAccount('Sanika', 500);
  const account2 = BankAccount.createAccount('Kunal', 300);
  
  console.log('Initial Balances:');    
  console.log(`Sanika's balance: $${account1.checkBalance()}`);
  console.log(`Kunal's balance: $${account2.checkBalance()}`);

  // Perform various transactions..
  
  account1.deposit(200);    // Sanika deposite $200
  account1.withdraw(100);    // Sanika withdraw $100
  account1.transfer(150, account2);

  // Print the transaction statements for both Sanika and Kunal.
  
  console.log('\nSanika\'s Statement:');
  console.log(account1.printStatement());
  
  console.log('\nKunal\'s Statement:');
  console.log(account2.printStatement());
  