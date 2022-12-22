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

/* -----------------------------------------------------
Write Password Function
----------------------------------------------------- */

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt(
    "How many characters do you want your password to be? (Min of 8 and Max of 128)"
  );

  // If statements to check if characters length is a min of 8 and no more than 128
  if (Number(passwordLength) < 8 || Number(passwordLength) > 128) {
    userAlert(
      "Please input a password length of at least 8 characters and no more than 128"
    );
    return;
  }

  if (isNaN(Number(passwordLength)) || !passwordLength) {
    userAlert("ERROR! Please input a valid number");
    return;
  }

  var passwordCharacters = checkPasswordCriteria();

  if (!passwordCharacters) {
    userAlert("ERROR! Please select at least one option for your password)");
    return;
  }

  createRandomPassword(passwordLength, passwordCharacters);
}

/* -----------------------------------------------------
User Alert Function
----------------------------------------------------- */
//Function will alert user if they did something wrong and ask them to try again
function userAlert(error) {
  window.alert(error);
  document.querySelector("#password").innerHTML = "Please try again";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
