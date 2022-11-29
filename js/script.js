// TODO Click button to start prompts
// Length from 8 - 128 charcters
// need to ask : lowercase, uppercase, numeric, special characters\
// abcdefghijklmnopqrstuvwxyz
// 0123456789
// " !#$%&()*+,-./:;<=>?@[]^_{|}~"
// then generate the password and display it

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = " !#$%&()*+,-./:;<=>?@[]^_{|}~"
const empty = ""

// Function for a random char for each type (started here might end up combining and then getting random chars)
function randomLower() {
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
function randomUpper() {
  return alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)]
}
function randomNumber() {
  return number[Math.floor(Math.random() * number.length)]
}
function randomSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)]
}
// console.log(randomLower());
// console.log(randomUpper());
// console.log(randomNumber());
// console.log(randomSymbol());


// Basic button press layout for testing interactions
var generatePassword = function() {
  var passLength = window.prompt("Please enter a length between 8 and 128", "8 - 128");
  // If cancel is pressed on first box stops function
  if (!passLength) {
    return passwordText = "Press Generate Password for a new password";
  }
  var genLower = window.confirm("Do you want lowercase letters?");
  var genUpper = window.confirm("Do you want uppercase letters?");
  var genNumber = window.confirm("Do you want numbers?");
  var genSymbol = window.confirm("Do you want symbols?");
  // If cancel is pressed on all
  if ((!genLower) && (!genUpper) && (!genNumber) && (!genSymbol)) {
    return passwordText = "Please pick a valid way to generate a password.";
  }
  // breaks if not a number is entered TODO
  if ((passLength < 7) || (passLength > 128)) {
    return passwordText = "Please enter a valid number.";
  }

  // To currently just visualise them working with random function
  if (genLower) {
    randomLower();
        console.log(randomLower());
  }  
  if (genUpper) {
    randomUpper();
        console.log(randomUpper());
  }  
  if (genNumber) {
    randomNumber();
        console.log(randomNumber());
  }  
  if (genSymbol) {
    randomSymbol();
        console.log(randomSymbol());
  }

}
// create array containing all true new approach thinking about
var charsMax = [...empty, ...number];
console.log(charsMax);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
