// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordtext = document.querySelector('#password');

var options = ["Okay", "Cancel"]

var passwordgenerator = function() {
  // Ask user for their choice
  var userChoice = window.prompt("How many characters would you like your password to contain");
  
  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();

  var passwordlength = 8 < 128;
var characters = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:<>?';
var passwordvalue = '';

function generatepassword() {
  console.log("clicked the button")
  
  
for (var index = 0; index < passwordlength; i++) {
    var number = Math.floor(Math.random() * characters.length);
    passwordvalue += characters.substring(number, number + 1);
  }
   return "Generated password will display here!";
}
var generatepassword = () => {
  passwordvalue = '';

  
  function writePassword() {
    var password = generatepassword();
    var passwordText = document.querySelector("#password");
  }

    passwordText.value = password;

  }
window.alert("The length of the password");
}
  // Add event listener to generate button
  generateBtn.addEventListener("click", generateBtn);

