// Assignment Code
var generateBtn = document.querySelector("#generate"); /*create comments about what this does */
var selectedChars;

/*Created to resolve errors.... remove these if possible before submitting*/
var generatePassword;
var passwordText;
var passwordRequirements;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!@#$%^&*()";
  var selectedChars = '';
  var passwordRequirements = {  
    allowLowerCase: window.confirm("Can lower case letters be used?"),
    allowUpperCase: window.confirm("Can upper case letters be used?"),
    allowNumbers: window.confirm("Can numbers be used?"),
    allowSymbols: window.confirm("Can special characters and symbols be used?"),
    passwordLength: window.prompt("Please define password length. (Must be between 8 and 128 characters.)")
  }

  while (passwordRequirements.passwordLength < 8 || passwordRequirements.passwordLength > 128 || isNaN(passwordRequirements.passwordLength)) {
    passwordRequirements.passwordLength = window.alert("Does not meet passwork requirements, please try agian!")
    return;
  }

  console.log(passwordRequirements);

/* If statments to build out the string of acceptable characters and seeds password with a value from character types*/
console.log(passwordRequirements.allowLowerCase);
var tempPassword = '';
console.log(tempPassword);
  if (passwordRequirements.allowLowerCase === true) {
    console.log("allowlowercaseworking="+passwordRequirements.allowLowerCase+" Added Chars:"+lowerCase);
    selectedChars += lowerCase;
    tempPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    console.log("------"+tempPassword)
  }

  if (passwordRequirements.allowUpperCase === true) {
    console.log("allowUpperCase="+passwordRequirements.allowUpperCase+" Added Chars:"+upperCase);
    selectedChars += upperCase;
    tempPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    console.log("------"+tempPassword)
  }

  if (passwordRequirements.allowNumbers === true) {
    console.log("allowNumbers="+passwordRequirements.allowNumbers+" Added Chars:"+numbers);
    selectedChars += numbers;
    tempPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    console.log("------"+tempPassword)
  }

  if (passwordRequirements.allowSymbols === true) {
    console.log("allowSymbols="+passwordRequirements.allowSymbols+" Added Chars:"+specialChar);
    selectedChars += specialChar;
    tempPassword += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    console.log("------"+tempPassword)
  }
/* Validation  that the user has selected at least 1 character set*/
  while (selectedChars.length < 8 ){
    window.confirm("Did not select any password requirements. Please try again!")
    return;
  }
  console.log("Final Char Set:'"+selectedChars+"'")

  /* Password generation Continued*/

  var tempPasswordLength = tempPassword.length
  console.log("tempPasswordLength: "+tempPasswordLength)
  for (var index = 0; index < (passwordRequirements.passwordLength-tempPasswordLength); index++) {
    var tempRandomNumber = Math.floor(Math.random() * selectedChars.length);
    var tempRandomChar = selectedChars.charAt(tempRandomNumber);
    tempPassword += tempRandomChar;
        console.log("tempRandomNumber: " + tempRandomNumber+", Added Char: "+tempRandomChar+", tempPassword is now: "+tempPassword);
  }

console.log(tempPassword.length);

  var passwordText = document.querySelector("#password");
  passwordText.value = tempPassword;
  return;
  }