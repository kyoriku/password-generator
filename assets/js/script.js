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

// Function to generate password begins here
function generatePassword() {
  // Variables containing strings of lowercase, uppercase, numeric and special characters, and 2 empty strings that will later return a value based on the users input
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var includedCharacterType = "";
  var generatedPassword = "";

  // Prompt that appears when you click the generate password button, asks to the user how many characters they want their password to be 
  var passwordLength = prompt ("How many characters do you want the password to be? Enter a number between 8-128.");

  // The if statement allows the user to cancel at the very first prompt, and the else if statement alerts the user if they happen to enter any letters or words (such as "w" or pizza") and also alerts the user if they enter a number below 8 or above 128
  if (passwordLength === null) {
    return "";
  } else if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert ("The password must be at least 8 characters and no more than 128 characters. Enter a number between 8-128.");
    return "";
  }

  // After the user selects the length of their password within the defined parameters, they are then asked if they want to include lowercase characters in their password, the user can select "Ok" for yes or "Cancel" for no
  var includeLowercaseCharacters = confirm ("Do you want to include lowercase characters?");
  // The if statement will add lowercase characters to the included character types if the user confirms
  if (includeLowercaseCharacters) {
    includedCharacterType = includedCharacterType.concat(lowercaseCharacters);
  }

  // The user is asked to confirm if they want to include uppercase characters in their password
  var includeUppercaseCharacters = confirm ("Do you want to include uppercase characters?");
  // The if statement will add uppercase characters to the included character types if the user confirms
  if (includeUppercaseCharacters) {
    includedCharacterType = includedCharacterType.concat(uppercaseCharacters);
  }

  // The user is asked to confirm if they want to include numeric characters in their password
  var includeNumericCharacters = confirm ("Do you want to include numeric characters?");
  // The if statement will add numeric characters to the included character types if the user confirms
  if (includeNumericCharacters) {
    includedCharacterType = includedCharacterType.concat(numericCharacters);
  }

  // The user is asked to confirm if they want to include special characters in their password
  var includeSpecialCharacters = confirm ("Do you want to include special characters?");
  // The if statement will add special characters to the included character types if the user confirms
  if (includeSpecialCharacters) {
    includedCharacterType = includedCharacterType.concat(specialCharacters);
  }

  // If none of the character types were selected, the alert will appear and tell the user to try again and to select at least one character type
  if (!includeLowercaseCharacters && !includeUppercaseCharacters && !includeNumericCharacters && !includeSpecialCharacters) {
    includedCharacterType = alert ("At least one character type must be selected to generate a password. Please try again");
    return "";
  }

  // Loops through the character types based on the length of password and included characters types defined by the user, then returns the value to the generatePassword variable which is then written in the box above the button
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * includedCharacterType.length);
    generatedPassword += includedCharacterType[randomIndex];
  }
  
  return generatedPassword;
}