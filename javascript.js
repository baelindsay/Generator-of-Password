// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
]

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

// Start of generate password function- asks user questions through window prompt 
function generatePassword() {
    var passwordLength = window.prompt("How long would you like your password to be? Choose number from 8-128.", 8);
  
      // Using the while loop to execute this code repeatedly based on the given Boolean condition
      while (passwordLength < 8 || passwordLength > 128) {
        // If user has chosen invalid password length an alert will pop up 
        window.alert("You must choose a password between 8 and 128 characters!");
        var passwordLength = window.prompt("Choose a a password between 8 and 128 characters.");
    }

    //list of confirmed variables
        var confirmUpperCase;
        var confirmLowerCase;
        var confirmNumerals;
        var confirmSpecial;
        
    //if statement for when user has chosen between 8 and 128
    if (passwordLength >=8 || passwordLength <= 128) {

        alert("You picked " + passwordLength + " characters.");
  
        var confirmUpperCase = confirm("Would you like to use uppercase letters in your password?");
        var confirmLowerCase = confirm("Would you like to use lowercase letters in your password?");
        var confirmNumerals = confirm("Would you like to use numbers in your password?");
        var confirmSpecial = confirm("Would you like to use special characters in your password?");
  
      }
  
    //while statement for if user has chosen cancel/no for all options
      while (confirmUpperCase === false && confirmLowerCase === false && confirmNumerals === false && confirmSpecial === false) {
  
        alert("Look, you need to decide at least one type of character.");
  
        var confirmUpperCase = confirm("Would you like to use uppercase letters in your password?");
        var confirmLowerCase = confirm("Would you like to use lowercase letters in your password?");
        var confirmNumerals = confirm("Would you like to use numbers in your password?");
        var confirmSpecial = confirm("Would you like to use special characters in your password?");
      }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
