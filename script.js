// Assignment Code
var generateBtn = document.querySelector("#generate");

/* -----------------------------------------------------
Randomize Password Function
----------------------------------------------------- */

function createRandomPassword(Length, string) {
  var randomString = "";
  for (var i, i = 0; i < Length; i++) {
    randomString += string.charAt(Math.floor(Math.random() * string.length));
  }

  document.querySelector("#password").innerHTML =
    "Your new password is: " + randomString;
}

/* -----------------------------------------------------
Check Password Function
----------------------------------------------------- */

function checkPasswordCriteria() {
  //These 4 prompts will capture what kind of password the user wants and put them into a variable
  var upperCase = window.confirm(
    "Do you want uppercase letters in your password?"
  );
  var loweCase = window.confirm(
    "Do you want lowercase letters in your password?"
  );
  var numericChar = window.confirm("Do you want numbers in your password?");
  var specialChar = window.confirm(
    "Do you want special characters in your password?"
  );

  var password = "";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //These if statements will check to see if the user confirmed and option. If they did the password Variable will include that string of characters.

  if (upperCase) {
    password += upperCaseLetters;
  }

  if (loweCase) {
    password += lowerCaseLetters;
  }

  if (numericChar) {
    password += numericCharacters;
  }

  if (specialChar) {
    password += specialCharacters;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
