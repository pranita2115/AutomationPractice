//1. 
let name="Pranita";
let city="Hannover";
let sentence="Ich lerne Deutch oder ich übe Deutch"

//1. Why we use string?---> String store text. Almost every application uses strings.

let benutzername="Pranita";
let passwort="abc123";
let land="Germany";
let dieEmail="abc@gmail.com";

//3. die satzbau(syntax): 
//a. Double Quotes:
let str="Hello";

//b. Single Quotes:
let str='Hello'

//c. back tick
let str=`Hello`;

/*4. String Formula
    H e l l o

    0 1 2 3 4

*/


let str="Hello";
console.log(str[0]);
console.log(str[3]);
console.log(str[4]);

//5. 5. Length Property: Returns total characters.

let str="Javascript";
console.log("Length of string is:",str.length);

//6. Access Characters: Using Index
let str="Vertauen-To trust"
console.log("Index of character is:",str[0],str[8])

//7. Last Character Formula:Very important : string[string.length-1]

let str="umsteigen"; // 8
console.log("characters in the string:",str.length)
console.log("Last character is:",str[str.length-1]) // n


//8. String is Immutable : You cannot change a character directly. for this we use 
// - slice()
// - Using split(), modify, then join()
// - Replace a character
// - 
//Wrong: 

let str = "Hello";

str[0] = "Y";

console.log(str);
// 9. Concatenation : Joining string using + : console.log(first + " " + second);
let str1="die Verantwortung";
let str2="gebraucht";
console.log("Join str1 and str2 using + operator:", str1+ " " + str2)

//10. Template Literals: `String ${value} String` = `Hello ${name}`
let name="Pranita"
console.log(`Hello ${name}`);

//11. Escape Characters
let str = "I am \"Happy\"";
console.log(str)
/*
\" Double quote

\' Single quote

\\ Backslash

\n New line

\t Tab
*/
console.log("*** Important string Methods ****");

//12.charAt(): Returns character

let str="Hello"
console.log(str.charAt(1))
// Invalid Index
let str = "Hello";

console.log(str[10]); // undefined

//using charAt()
let str = "Hello";

console.log(str.charAt(10)); // Empty string

//13. at(): can use negative index
let str="Hello";
console.log(str.at(-1))

//14. indexOf() : Return first occurance

let str="Banana";
console.log(str.indexOf("a"))

//15. lastIndexOf()
let str="Banana";
console.log(str.lastIndexOf("n"))

//16. includes() : Checks whether exists.
let str="Hello";
console.log(str.includes("b"));

//17.startsWith()
console.log("JavaScript".startsWith("Java"));

//18. endsWith()
console.log("JavaScript".endsWith("Script"));

//19. slice() :slice(start,end)
let str="Hello";
console.log(str.slice(1,3))
console.log(str.slice(-6))

//20. Substring:
let str="JavaScript";

console.log(str.substring(0,4));

//21. replace():
let str="I like Java";

console.log(str.replace("Java","JS"));

//22. replaceAll():
let str="cat cat cat";

console.log(str.replaceAll("cat","dog"));

//23. toUpperCase()
console.log("hello".toUpperCase());

//24. toLowerCase()
console.log("HELLO".toLowerCase());

//25. trim(): Removes spaces
let str="   Hello   ";

console.log(str.trim());

//27. trimStart()
let str="      Hi Hello   "
console.log(str.trimStart(7));

//28. trimEnd()
let str="     Hi Hello   "
console.log(str.trimEnd());

//29. split(): Convert string into array
let str="Java Python SQL";

console.log(str.split(" "));

//30. Join(): Array into string

let arr=["Hallo", 123];
console.log(arr.join(" "))

let arr=["Java","SQL"];

console.log(arr.join(" "));

//31. repeat()
console.log("Hi".repeat(3));

//32. concat()
let a="Hello";

let b="World";

console.log(a.concat(" ",b));

//33. padStart()

let num="5";

console.log(num.padStart(3,"0"));

//34. padEnd()
console.log("5".padEnd(4,"0"));

//35. match(): Searching using regex
let str="abc123";

console.log(str.match(/\d+/));

//36. search()
console.log("JavaScript".search("Script"));

//37. localeCompare()
console.log("apple".localeCompare("banana"));


