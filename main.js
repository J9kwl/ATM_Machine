#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1999;
console.log("Welcome to Javeria Kanwal-ATM Machine");
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    }
]);
console.log(pinEntered.pin);
if (pinEntered.pin == mypin) {
    console.log("pin is correct, Login Successfully !");
    console.log(`Current Account Balance is ${myBalance}`);
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation",
        choices: ["Withdraw Amount", "Check Balance"]
    }
]);
if (operationAns.operation === "Withdraw Amount") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw :"
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }
}
else if (operationAns.operation === "Check Balance") {
    console.log(`Your Account Balance is:${myBalance}`);
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
