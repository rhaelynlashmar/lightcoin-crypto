class Account {

  constructor(username) {

    this.username = username;
    this.balance = 0;
  }

};

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
};

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

};

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

};







const myAccount = new Account('Jane Austen');

console.log('Starting Balance:', myAccount.balance);

t1 = new Deposit(251.44, myAccount);
t1.commit();

t2 = new Withdrawal(29.99, myAccount);
t2.commit();

t3 = new Withdrawal(124.21, myAccount);
t3.commit();

console.log('Ending Balance:', myAccount.balance);
