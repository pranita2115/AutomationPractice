function first()
{
    console.log("Hello");
}
first()



function second(name){

    console.log("Hello" + " "+ name)
}
second("Pranita")

function add(a,b)
{
    return a +b;

}
let result=add(5,3);
console.log(result)

//function expression:

function multiply(a,b)
{
    return a*b;
}
let result2=multiply(5,20)
console.log(result2)

//5.  Arrow Function
let sub=(a,b)=>{
    return a-b;
}
let result3=sub(100,20)
console.log(result3)

//6. Default parameter

let greet=(name="Joe")=>{
    console.log("hello"+" ", name);
}
greet();
greet("Kavya")

