//a. Premitive Data Types:


//1. Number:
let num1=20;
let num2=40;
let num3=60;
console.log("Value of num1,num2,num3:", num1, num2, num3, ":",typeof (num1,num2,num3));

//2. string: when we want to store character, sentences, words, substring then it is consider as string datatype
let string1="Hallo"
let string2="Guten morgen! zusamen,"
let string3="wie ghets es euch?"
console.log("Value of string is:",string1,string2,string3,":", typeof(string1,string2,string3))


//String support indexing:
console.log(string1,":", typeof string1)
console.log("Indexing of 1 is:",string1[1])

//3. Boolean Data Type: It has only 2 values: true & false: 

let a1=10;
let b1=20;
let c1=30;
let d1=40;
console.log("a1==b1", a1==b1); 
console.log("b1>=c1", b1>=c1);
console.log("c1!=d1",c1!=d1);
console.log("d1==a1",d1==a1);

//4. Undefined: Declare a varriable but not assigan value.
let a;
console.log("value of a is:",a);

//5. Null:Declare a varriable but keep absence of value assigan as a null value.
let username=null;
console.log("The value of username is:",undefined  );

// Non-primitive data Types:

/*1. Array
    - Array can contains multiple values at a time.
    - We can update, modify, delete values from array.
    - Array also follows the same indexing like string.
*/

var arr1=[21, 24,15,12, "array", "important", true, false, null, [4,5,6]];
console.log(arr1);
console.log(arr1[9][1])
console.log(JSON.stringify(arr1));


/*
2. Object DataTypes: 
   - Object datatype store values in key value pair.
   - Duplicate keys are not allowed on object data type.
   - It is mutable data type, we can modify values as per requirements.
   - {key:value}
*/

let obj1={username:'Admin', pasword:'admin123', emial:'abc@',number:12345776}
console.log("Username is:", obj1['username'], ":", typeof obj1);
obj1.address= "Pune, Baner"
console.log("Address:",obj1.address)
console.log(obj1)