
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = " !#$%&()*+,-./:;<=>?@[]^_{|}~"

// Basic button press layout for any interactions
var generatePassword = function() {
  var charsMax = ""
  var passLength = window.prompt("Please enter a length between 8 and 128");

  // If cancel is pressed on first box stops function
  if (!passLength) {
    return passwordText = "Press Generate Password for a new password";
  }
  // sets var to true if confirmed
  var lowerOption = window.confirm("Do you want lowercase letters?");
  var upperOption = window.confirm("Do you want uppercase letters?");
  var numberOption = window.confirm("Do you want numbers?");
  var symbolOption = window.confirm("Do you want symbols?");

  // If cancel is pressed on all
  if ((!lowerOption) && (!upperOption) && (!numberOption) && (!symbolOption)) {
    return passwordText = "Please pick a valid way to generate a password.";
  }

  // To change passLength from a string to a number
  var passLengthNumber = (passLength * 1);

  // Stops the function if not a number and returns that text if it is
  if ((passLengthNumber < 8) || (passLengthNumber > 128)) {
    return passwordText = "Please enter a valid number.";
  }

  // Adds characters together if they were true
  if (lowerOption) {
    charsMax = charsMax + alphabet
  }  
  if (upperOption) {
    charsMax = charsMax + alphabet.toUpperCase()
  }  
  if (numberOption) {
    charsMax = charsMax + number
  }  
  if (symbolOption) {
    charsMax = charsMax + symbol
  }

  // Empty string to fill with password
  var passwordGeneration = "";
  for (var i = 0; i < passLengthNumber; i++) {
    var randomChar = charsMax[Math.floor(Math.random() * charsMax.length)]
    passwordGeneration = passwordGeneration + randomChar
  }
  // console.log(passGeneration);
  return passwordText = passwordGeneration
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

