// 7. Given a string consisting of alphabetical characters and it's length, count vowels and consonants print them

// vowels = "aeiou";
// consonants = remaning

// map object

function printVowelAndConsonants(string, n) {
  // GUVI
  // 2 - vowels
  // string.length - vowels -> consonants

  string = string.toLowerCase();
  let vowels = "aeiou";
  let vowelsCount = 0;
  let vowelOutput = "";
  let consonantsOutput = "";

  // .includes() -> string method .push() -> array

  for (let a = 0; a < n; a++) {
    let currentCharacter = string[a];

    if (vowels.includes(currentCharacter)) {
      vowelsCount++;
      vowelOutput += currentCharacter;
    } else {
      consonantsOutput += currentCharacter;
    }
  }

  let consonantsCount = n - vowelsCount;

  console.log("Vowels", vowelsCount);
  console.log("Consonants", consonantsCount);
  console.log(vowelOutput);
  console.log(consonantsOutput);
}

// console.log("shijnv".includes("g"));

printVowelAndConsonants("guvI", 4);
printVowelAndConsonants("shijnv", 6);
