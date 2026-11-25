// Requirements
// Write a JavaScript program that:
// 1. Stores the customer's account balance.
// 2. Stores the requested withdrawal amount.
// 3. Checks whether the withdrawal amount is greater than zero.
// 4. Checks whether the account has sufficient balance.
// 5. Displays the appropriate transaction message.

let accountBalance = 10000;
let withdrawalAmount = 2000;
let sufficientBalance = accountBalance >=  withdrawalAmount;
console.log(sufficientBalance)

if(withdrawalAmount<=0){
    console.log("Invalid withdrawal amount")
}
else if(sufficientBalance){
    console.log("Transaction successful")
}
else {
    console.log("Insufficient balance")
}
