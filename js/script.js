
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = " !#$%&()*+,-./:;<=>?@[]^_{|}~"

// Basic button layout for any interactions
var generatePassword = function() {
  var passLength = window.prompt("Please enter a password length between 8 and 128.");

  // If cancel is pressed on first box stops function
  if (!passLength) {
    return passwordText = "Press Generate Password for a new password";
  }
  // sets var to true if confirmed
  var lowerOption = window.confirm("Press OK if you want to include lowercase letters.");
  var upperOption = window.confirm("Press OK if you want to include uppercase letters.");
  var numberOption = window.confirm("Press OK if you want to include numbers.");
  var symbolOption = window.confirm("Press OK if you want to include symbols.");

  // If cancel is pressed on all
  if ((!lowerOption) && (!upperOption) && (!numberOption) && (!symbolOption)) {
    return passwordText = "Please pick a valid way to generate a password.";
  }

  // To change passLength from a string to a number
  var passLengthNumber = (passLength * 1);

  // Stops the function if not a number and returns that text if it is out the bounds
  if ((passLengthNumber < 8) || (passLengthNumber > 128)) {
    return passwordText = "Please enter a valid number.";
  }

  // Adds characters together to a new empty string if they were selected by the user
  var charsMax = ""
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

  //Loop to generate the password to the length chosen
  for (var i = 0; i < passLengthNumber; i++) {
    var randomChar = charsMax[Math.floor(Math.random() * charsMax.length)]
    passwordGeneration = passwordGeneration + randomChar
  }
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

