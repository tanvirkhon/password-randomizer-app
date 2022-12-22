// Assignment Code
var generateBtn = document.querySelector("#generate");

/* -----------------------------------------------------
Randomize Password Function
----------------------------------------------------- */

// Function will take in the user inputs from the checkPasswordCriteria & writePassword function and create a randomized password for the user
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

  // Variables to holding the different password options
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

// Function will prompt the user to input a number of characters wanted for their password
function writePassword() {
  var passwordLength = window.prompt(
    "How many characters do you want your password to be? (Min of 8 and Max of 128)"
  );

  // If statement to check if characters length is a min of 8 and no more than 128. If it is not this statement will alert user to try again
  if (Number(passwordLength) < 8 || Number(passwordLength) > 128) {
    userAlert(
      "Please input a password length of at least 8 characters and no more than 128"
    );
    return;
  }

  // if statement to check if user input is a valid number or if user hits cancel on prompt. It will alert user to try again
  if (isNaN(Number(passwordLength)) || !passwordLength) {
    userAlert("ERROR! Please input a valid number");
    return;
  }

  // This variable will take in the user inputs from the checkPasswordCriteria
  var passwordCharacters = checkPasswordCriteria();

  // This check will make sure that the user has picked at least one option for their password. If they have not it will alert them to try again
  if (!passwordCharacters) {
    userAlert("ERROR! Please select at least one option for your password)");
    return;
  }

  // The createRandomPassword function will finally run after taking in all the user inputs and create a randomized password for the user
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
