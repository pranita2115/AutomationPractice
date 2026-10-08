//

var str1="Hello";
var str2='World';
let result=str1+" "+str2;
console.log(result)


//Concatinate string with back tick
let n=12345
var result2=`${str1} ${str2} number: ${n}`
console.log(result2)

// Apply loop with for of loop
let str3="JavaScript";
for(var x of str3)
{
    console.log(x)
}

// Apply for loop with for in
console.log("*** For in *****")
let str4="Hello";
for(var y in str4)
{
    //console.log(y)
    console.log(y, str4[y])
}

console.log("Length of string")
var c="Fussball";
let result=c.length
console.log("Length of string is:",result)

for(let i=result-1;i>=0;i--)
{
    console.log(i, c[i])
}


// String Methods:
console.log("**String Methods**");
//toUpperCase(): It converts complete string in Upper case character
//toLowerCase(): It converts complete string in lower case character.

let str5="Hallo zusammen, Wie gEht's es DIR";
console.log("Uppercase:", str5.toUpperCase());
console.log("Lower:",str5.toLowerCase());


//trim(): It helps to remove trailing (from beggining and end of string) spaces from given string
//trimstart() : remove space from beginning  of string
// trimEnd()  : Remove spaces from ending of string

let str6="  JavaScript Programming  ";
console.log(str6.trim());
console.log(str6.trimStart());
console.log(str6.trimEnd());

//2. Include() : It verifies does target string contains sub string
// syntax: str.includes("")

let str7="Weil ich bin müde,bleibe ich zu Hause"
console.log("Check 'Weil' is availble in string:", str7.includes("Weil"));
console.log("Check 'Zu' is available in string:", str7.includes("Zu"))


//3. indexof():
let str8="Ich bleibe zu Hause, weil ich müde bin"
console.log("indexof zu:",str8.indexOf("zu"));
console.log("indexof ich:",str8.indexOf("ich"));
console.log("indexof Bleibe:",str8.indexOf("Bleibe"));


//