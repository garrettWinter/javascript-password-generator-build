// Assignment Code
var generateBtn = document.querySelector("#generate"); /*create comments about what this does */


/* Variables for possible Character sets  */
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

  console.log("Written as part of writePassword Logic");
  console.log(passwordRequirements);

/* If statments to build out the string of useable */
console.log(passwordRequirements.allowLowerCase);
  if (passwordRequirements.allowLowerCase == true) {
    console.log("allowlowercaseworking="+passwordRequirements.allowLowerCase);
    console.log("Added Chars:"+lowerCase);
    selectedChars += lowerCase;
  }

  if (passwordRequirements.allowUpperCase == true) {
    console.log("allowUpperCase="+passwordRequirements.allowUpperCase);
    console.log("Added Chars:"+upperCase);
    selectedChars += upperCase;
  }

  if (passwordRequirements.allowNumbers == true) {
    console.log("allowNumbers="+passwordRequirements.allowNumbers);
    console.log("Added Chars:"+numbers);
    selectedChars += numbers;
  }

  if (passwordRequirements.allowSymbols == true) {
    console.log("allowSymbols="+passwordRequirements.allowSymbols);
    console.log("Added Chars:"+specialChar);
    selectedChars += specialChar;
  }
/* Validation  */
  while (selectedChars.length < 8 ){
    window.confirm("Did not select any password requirements. Please try again!")
    return;
  }

  console.log("Final Char Set:'"+selectedChars+"'")


  /* Password generation */
  var password = '';
  
  for (var index = 0; index < passwordRequirements.passwordLength; index++) {
    var randomNumber = Math.floor(Math.random() * selectedChars.length);
    var randomChar = selectedChars.charAt(randomNumber);
        password += randomChar;
        console.log(randomNumber)
        console.log("Added Char: "+randomChar+" Password is now:"+password);
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

/* Pseudo coding
DONE -- Get button to on page to work
DONE -- prompt user for criteria and passLength
DONE -- Add logic to verify length is 8 to 128 long
DONE -- Assemble the char final char set
DONE -- Generate password
DONE -- Display password in an alert
Need logic to ensure requirements about are met, if not should Reloop
DONE -- Need to validation if a non number is added to length

Do we need to have error handling if all chars are selected no?

*/