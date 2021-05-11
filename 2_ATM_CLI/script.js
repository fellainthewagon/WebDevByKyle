const Account = require("./Account");
const CommandLine = require("./CommandLine");

async function main() {
  const accountName = await CommandLine.ask(
    "Which account would you like to access?"
  );

  const account = await Account.find(accountName);
  if (account == null) account = await promptCreateAccount(accountName);
  if (account != null) await promptTask(account);
}

async function promptCreateAccount(accountName) {
  const response = await CommandLine.ask(
    "That account does not exist. Would you create it? (yes/no)"
  );

  if (response === "yes") {
    return await Account.create(accountName);
  }
}

async function promptTask(account) {
  const response = await CommandLine.ask(
    "What would you like to do? (view/deposit/withdraw)"
  );

  if (response === "deposit") {
    const amount = await CommandLine.ask("How much?");
    await account.deposit(amount);
  }
}

main();
