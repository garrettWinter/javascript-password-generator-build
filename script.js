// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDetails = writePassword();

/*Create to resolve errors*/
var generatePassword;
var passwordText;
var passwordRequirements;

// Write password to the #password input
function writePassword() {
  var passwordRequirements = {  
    allowLowerCase: window.confirm("Can lower case letters be used?"),
    allowUpperCase: window.confirm("Can upper case letters be used?"),
    allowNumbers: window.confirm("Can numbers be used?"),
    allowSymbols: window.confirm("Can special characters and symbols be used?"),
    passwordLength: window.prompt("Please define passord length. (Must be bewtween 8 and 128 characters.)")
  }
  while (passwordRequirements.passwordLength < 8 ){
    passwordRequirements.passwordLength = window.prompt("Password is too short, please select a number bewtween 8 and 128 characters.)");
  }
  while (passwordRequirements.passwordLength > 128 ){
    passwordRequirements.passwordLength = window.prompt("Password is too long, please select a number bewtween 8 and 128 characters.)");
  }
   // for (let passwordRequirements.passwordLength < 8;) {
  //   passwordRequirements.passwordLength = window.prompt("Password is too short, please select a number bewtween 8 and 128 characters.")
     
  //   }

  //   for (let index = 0; index < array.length; index++) {
      
  //   }
  
  
      /*update this section to be a for loop it is only checking once..... must added in too large after that*/
      // if (passwordRequirements.passwordLength) {
      //   passwordRequirements.passwordLength < 8;
      //     passwordRequirements.passwordLength = window.prompt("Not acceptable length, please select between 8 and 128 characters.)")
      // }



  /*var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;*/
  console.log("Written as part of writePassword Logic");
  console.log(passwordRequirements);
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Pseduo coding
DONE -- Get buttom to on page to work
DONE -- prompt user for critera and passLength
Add logic to verify length is 8 to 128 long
prompt user if should have
  lower case
    lowerCase= "abcdefghijklmnopqrstuvwxyz"
  Uppper case
    upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  numbers
    numbers = "0123456789"
  special charts
    specialChar= "!@#$%^&*()"
Generate password
Need logic to ensure requriments about are met, if not should reloop
Display password in an alert
*/







