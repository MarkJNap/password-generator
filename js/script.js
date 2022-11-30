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

// Function for a random char for each type (started here might end up combining and then getting random chars)
// function randomLower() {
//   return alphabet[Math.floor(Math.random() * alphabet.length)]
// }
// function randomUpper() {
//   return alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)]
// }
// function randomNumber() {
//   return number[Math.floor(Math.random() * number.length)]
// }
// function randomSymbol() {
//   return symbol[Math.floor(Math.random() * symbol.length)]
// }


// console.log(randomLower());
// console.log(randomUpper());
// console.log(randomNumber());
// console.log(randomSymbol());


// Basic button press layout for testing interactions
var generatePassword = function() {
  var charsMax = ""
  var passLength = window.prompt("Please enter a length between 8 and 128");
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


  // To change passLength to a number
  var passLengthNumber = (passLength * 1);
  // breaks if not a number is entered TODO
  if ((passLengthNumber < 7) || (passLengthNumber > 128)) {
    return passwordText = "Please enter a valid number.";
  }

  // Adds characters if they are true
  if (genLower) {
    charsMax = charsMax + alphabet
  }  
  if (genUpper) {
    charsMax = charsMax + alphabet.toUpperCase()
  }  
  if (genNumber) {
    charsMax = charsMax + number
  }  
  if (genSymbol) {
    charsMax = charsMax + symbol
  }
  // Empty string to fill with password
  var passGeneration = "";
  for (var i = 0; i < passLengthNumber; i++) {
    var randomChar = charsMax[Math.floor(Math.random() * charsMax.length)]
    passGeneration = passGeneration + randomChar
  }
  console.log(passGeneration);
  return passwordText = passGeneration
}
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
