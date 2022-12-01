
// Possible password characters
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = " !#$%&()*+,-./:;<=>?@[]^_{|}~";

// Start of main function for creating new random password
var generatePassword = function() {
  var passLength = window.prompt("Please enter a password length between 8 and 128.");

  // Returns text if cancel is pressed on first box, also stops function
  if (!passLength) {
    return passwordText = "Press Generate Password for a new password";
  }

  // To change passLength from a string to a number
  var passLengthNumber = Number(passLength);

  // Returns text if not a number and if it is out the bounds, also stops the function
  if ((isNaN(passLengthNumber)) || (passLengthNumber < 8) || (passLengthNumber > 128)) {
    return passwordText ="Please enter a valid number!";
  }

  // Sets var to true if it is confirmed
  var lowerOption = window.confirm("Press OK if you want to include lowercase letters.");
  var upperOption = window.confirm("Press OK if you want to include uppercase letters.");
  var numberOption = window.confirm("Press OK if you want to include numbers.");
  var symbolOption = window.confirm("Press OK if you want to include symbols.");

  // returns text if cancel is pressed on all, also stops function
  if ((!lowerOption) && (!upperOption) && (!numberOption) && (!symbolOption)) {
    return passwordText = "Please pick a valid way to generate a password.";
  }

  // Adds characters together to a new empty string if they were selected by the user
  var charsMax = ""
  if (lowerOption) {
    charsMax = charsMax + alphabet;
  }  
  if (upperOption) {
    charsMax = charsMax + alphabet.toUpperCase();
  }  
  if (numberOption) {
    charsMax = charsMax + number;
  }  
  if (symbolOption) {
    charsMax = charsMax + symbol;
  }

  // Empty string to fill with password
  var passwordGeneration = "";

  //Loop to generate the password to the length chosen
  for (var i = 0; i < passLengthNumber; i++) {
    var randomChar = charsMax[Math.floor(Math.random() * charsMax.length)];
    passwordGeneration = passwordGeneration + randomChar;
  }
  return passwordText = passwordGeneration;
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

