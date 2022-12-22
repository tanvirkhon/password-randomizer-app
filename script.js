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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
