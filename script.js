// Special characters for the function created
const generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password. Between 8 an 128");
  var numbers = confirm("Add numbers to your password?");
  var lowerCases = confirm("Add lowercases to your password?");
  var upperCases = confirm("Add uppercases to your password?");
  var special = confirm("Add Special characters to your password?");
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getRamdomSymbol: function() {
        const specialCharacters = "!@#$%^&*(){}[]=<>/,.|~?";
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
    
};
  // Checks to make sure user selected ok for all and uses empty minimums from above
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }
  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (special === true) {
    minimumSpecialCharacters = functionArray.getRamdomSymbol();
    minimumCount++;
  }
  // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }
  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  return randomPasswordGenerated;
}