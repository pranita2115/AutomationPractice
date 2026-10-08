/*
   1. Implicit conversion: Whwn we convert one datat type to another data type automatically by JS engine, then it is called implicit conversion.
      - When we hae 1 number data type and second is string data type then output will be in string format and perform the addition operation using concat
*/

let a=100;
let b="200";
let result= 100 + "200";
console.log("Result is:", result, ":", typeof result) // Result is: 100200 : string (Auto convert)


//2. Implicit conversion : Number - string
//-  When we hae 1 number data type and second is string data type then output will be in number format and perform the substraction operation 
let c=400;
let string="100";
let output = 400 - "100";
console.log("Ouput is:",output, ":", typeof output);

//3. add boolean
let result2=true+ 10;
console.log(result2)

let result3=false - 10; // false= 0, true=1
console.log(result3)

//4. Convert string into number
let p="123";
let result4= Number(p)
console.log(result4, typeof p);
/*
string is not a function
let n=123;
let o=string(n)
console.log(o , typeof n)
*/

let str2="abc";
let str3=Number(str2)
console.log(str3, typeof str3)


let n=123;
let oot=String(n)
console.log(oot , typeof oot)