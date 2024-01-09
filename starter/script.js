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
];

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
];

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
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How long do you want your password to be? Must be between 8 and 128 characters:"));

  if ( length < 8 ) {
    alert (" Please enter more than 8 characters");
    return null;
  }
  
  if ( length > 128 ){
    alert ( " Please enter less than 128 characters");
    return null;
  }

  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  // Check if udser had said yes
  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("Please select at least one character type.");
    return null;
  }

  // Returns
  return {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(math.getRandom() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() {
  var userInput = getPasswordOptions();

  if (!userInput) {
    var allCharacters = [];
    var result = [];

  if (userInput.includeSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
    result.push(getRandom(specialCharacters));
  }

  if (userInput.includeNumeric) {
    allCharacters = allCharacters.concat(numericCharacters);
    result.push(getRandom(numericCharacters));
  }

  if (userInput.includeLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
    result.push(getRandom(lowerCasedCharacters));
  }

  if (userInput.includeUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
    result.push(getRandom(upperCasedCharacters));
  }
  for (var userInput = result.length; i < userInput.length; i++) {
    result.push(getRandom(allCharacters));
  }
  result = result.sort;
  return result.join("");
}
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

