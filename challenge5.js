
const correctUsername = "admin";
const correctPassword = "Admin@123";

const enteredUsername = "admin";
const enteredPassword = "Admssin@123";

let failedAttempts = 2;

if (failedAttempts >= 3) {
    console.log("Account locked");
}
else if (
    enteredUsername === correctUsername &&
    enteredPassword === correctPassword
) {
    console.log("Login successful");
}
else {
    console.log("Invalid username or password");

    failedAttempts++;

    if (failedAttempts >= 3) {
        console.log("Account locked");
    }
}
console.log(failedAttempts)
