// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";

  var passwordLength = prompt ("How many characters would you like your password to be? Enter a number between 8-128.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert ("The password must be at least 8 characters and no more than 128 characters. Enter a number between 8-128.")
    return "";
  }
}