//1. Loop Through String: Using for loop
let greeting = "Hello";
for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}

//2. using for...of loop
for (let ch of greeting) {
    console.log(ch);
}

//3. Reverse String
let reverseTarget = "Hello";
let reverseString = "";
for (let i = reverseTarget.length - 1; i >= 0; i--) {
    reverseString += reverseTarget[i];
}
console.log(reverseString);

//4. Count Vowels
let vowelText = "JavaScript";
let vowelCount = 0;
for (let ch of vowelText) {
    if ("aeiouAEIOU".includes(ch)) {
        vowelCount++;
    }
}
console.log(vowelCount);

//5. count words
let wordsText = "I love JavaScript";
console.log(wordsText.split(" ").length);

//6. count character
console.log(wordsText.length);

//7. Palindrome
let palindromeText = "madam";
let palindromeReverse = "";
for (let i = palindromeText.length - 1; i >= 0; i--) {
    palindromeReverse += palindromeText[i];
}
console.log(palindromeText === palindromeReverse);

// 1). Write a js program to get a string made of the first and the last 2 chars from a given string.
// a.If the string length is less than 2, return instead of the empty string
let strFirstLast = "Hello";
let outputFirstLast = strFirstLast.length < 2 ? "" : strFirstLast.slice(0, 2) + strFirstLast.slice(-2);
console.log(outputFirstLast);

//Second Approch:
let strFirstLastSecond = "Hello";
let firstTwoChars = strFirstLastSecond.slice(0, 2);
let lastTwoChars = strFirstLastSecond.slice(-2);
console.log("character:", firstTwoChars + lastTwoChars);

if (strFirstLastSecond.length < 2) {
    console.log("");
} else {
    let s1 = strFirstLastSecond.slice(0, 2);
    let s2 = strFirstLastSecond.slice(strFirstLastSecond.length - 2);
    console.log("character:", s1 + s2);
}

//2). JS string program that takes a list of strings and returns the length of the longest string.
let longestText = "Das Auto Hat 4 Räder";
let arr = longestText.split(" ");
console.log(arr);
let maxlength = 0;
for (let word of arr) {
    if (word.length > maxlength) {
        maxlength = word.length;
    }
}
console.log("Longest string length:", maxlength);

//3). JS string program to get a string made of 4 copies of the last two characters of a specified string (length must be at least 2).
let repeatText = "Hello";
console.log(repeatText);
let lastTwo = repeatText.slice(repeatText.length - 2);
console.log(lastTwo);
console.log(lastTwo.repeat(4));

//4) JS string program to reverse a string if it’s length is a multiple of 4.
let multipleFourText = "Java";
if (multipleFourText.length % 4 === 0) {
    let multipleFourArray = multipleFourText.split("");
    multipleFourArray.reverse();
    let result = multipleFourArray.join("");
    console.log(result);
} else {
    console.log(multipleFourText);
}

//2nd approch using less variable:
let multipleFourText2 = "Java";
if (multipleFourText2.length % 4 === 0) {
    console.log(multipleFourText2.split("").reverse().join(""));
} else {
    console.log(multipleFourText2);
}

//3-Advanced : Using Ternary Operator:
let multipleFourText3 = "Java";
console.log(multipleFourText3.length % 4 === 0 ? multipleFourText3.split("").reverse().join("") : multipleFourText3);

//5). JS string program to count occurrences of a substring in a string.
let substringText = "First Java second Java third Java";
let subString = "Java";
let substringCount = 0;
for (let i = 0; i <= substringText.length - subString.length; i++) {
    let part = substringText.slice(i, i + subString.length);
    if (part === subString) {
        substringCount++;
    }
}
console.log("Manual count:", substringCount);

//b. using split()
let splitText = "I love Java. Java is easy. Java is powerful.";
let splitSub = "Java";
let splitCount = splitText.split(splitSub).length - 1;
console.log("Count:", splitCount);

//6). JS string program to test whether a passed letter is a vowel or consonant.
let ch = "b";
let vowels = "aeiou";
console.log(vowels.includes(ch) ? "Vowel" : "Consonant");

//7). Find the longest and smallest word in the input string.
let sentenceWords = "The quick brown fox jumps over the lazy dog";
let wordsArray = sentenceWords.split(" ");
console.log(wordsArray);
let longestWord = "";
let smallestWord = wordsArray[0];
for (let word of wordsArray) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
    if (word.length < smallestWord.length) {
        smallestWord = word;
    }
}
console.log("Longest word:", longestWord);
console.log("Smallest word:", smallestWord);

//a.using ternary operator:
let sentenceWordsAdvanced = "The quick brown fox jumps over the lazy dog";
let wordsArrayAdvanced = sentenceWordsAdvanced.split(" ");
console.log(wordsArrayAdvanced);
let longestWordAdvanced = "";
let smallestWordAdvanced = wordsArrayAdvanced[0];
longestWordAdvanced = wordsArrayAdvanced.reduce((acc, word) => word.length > acc.length ? word : acc, "");
smallestWordAdvanced = wordsArrayAdvanced.reduce((acc, word) => word.length < acc.length ? word : acc, wordsArrayAdvanced[0]);
console.log("Longest word:", longestWordAdvanced);
console.log("Smallest word:", smallestWordAdvanced);

//8). Print most simultaneously repeated characters in the input string.Software

//1.1. Print each character of a string using for...of
let germany = "Germany";
for (let letter of germany) {
    console.log(letter);
}

//2. Print index and character using for...in
let input2 = "Berlin";
for (let index in input2) {
    console.log(index);
}

//3. Print string length
let playwrightText = "Playwright";
console.log("Length of string is:", playwrightText.length);

//4. Print string in reverse
let automationText = "Automation";
let reverseAutomation = "";
for (let i = automationText.length - 1; i >= 0; i--) {
    reverseAutomation += automationText[i];
}
console.log(reverseAutomation);

//5. Convert string to uppercase
let lowerCaseText = "hello world";
console.log("Uper case:", lowerCaseText.toUpperCase());

//6. Convert string to lowercase
let upperCaseText = "GERMANY";
console.log("Lowercase:", upperCaseText.toLowerCase());

//7. Remove spaces
let qaText = "   QA Engineer   ";
console.log(qaText);
console.log(qaText.trim());

//8. Check if string contains a word
let containsText = "I love JavaScript";
console.log(containsText.includes("Java"));

//9. Find index
let indexText = "Playwright Automation";
console.log(indexText.indexOf("Automation"));

//10. Concatenate three strings
let first = "Hello";
let second = "Pranita";
let city = "Hannover";
let concatenatedText = `${first} ${second} ${city}`;
console.log(concatenatedText);

//11. count vowels
let vowelSample = "JavaScript";
let vowelSampleCount = 0;
for (let i = 0; i < vowelSample.length; i++) {
    let char = vowelSample[i].toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelSampleCount++;
    }
}
console.log("Vowels =", vowelSampleCount);

//2. Count consonants
let programmingText = "Programming";
let consonantCount = 0;
for (let i = 0; i < programmingText.length; i++) {
    let char = programmingText[i].toLowerCase();
    if (char >= "a" && char <= "z" && !"aeiou".includes(char)) {
        consonantCount++;
    }
}
console.log("Consonants =", consonantCount);

//4. Count lowercase letters
let mixedCaseText = "JaVaScRiPt";
let lowercaseCount = 0;
for (let i = 0; i < mixedCaseText.length; i++) {
    let ch = mixedCaseText[i];
    if (ch === ch.toLowerCase() && ch !== ch.toUpperCase()) {
        lowercaseCount++;
    }
}
console.log("Lowercase =", lowercaseCount);