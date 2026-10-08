//1. Create a function that prints your favorite color.
function color()
{
    console.log("Meine lieblings farbe ist hell gelb")
}
color()

//2. Create a function welcome(name).
function welcome(name)
{
    console.log("Welcome"+ "", name)
}
welcome("Pranita")

//3.. Create a function that takes a city name and prints:
function city(cityName)
{
    console.log("I live in"+ "", cityName)
}
city("Hannover")

//4. Create a function that accepts two numbers and returns their sum.
function add (c,d)
{
    return c+d
}
let result1=add(5,5);
console.log(result1)

//5.. Create a function that returns the square of a number.
function square(s)
{
    return s*s*s
}
let result2=square(8,8,8)
console.log(result2)


//6.6. Create a function that returns the larger of two numbers.
function large(f,g)
{
    if(f>g)
    {
        return f;
    }
    else{
        return g;
    }
}
let result3=large(15,20)
console.log(result3)

//7. Create a function that checks whether a number is even or odd.
function even(num)
{
    if(num%2==0)
    {
     return even;
    }
    else
    {
        return odd;
    }
}let result4=even(10)
console.log(result4)

//8.Create a function that returns the cube of a number.
function cube(i)
{
    return i*i*i;
}
let result5=cube(2);
console.log(result5)

//9.Create a function that returns the area of a rectangle.
function area(length,width)
{
    return length*width
}
let result6=area(5,2)
console.log(result6)

//10.Create a function that returns the perimeter of a rectangle.
function perimeter(length1,width1)
{
    return 2*(length1*width1)
}
let result7=perimeter(200,300);
console.log(result7)

//Level 3 (Function Expression)

//11.Create a function that divides two numbers.
const divide=(num1)=>{

    if(num1%2==0 && num1%5==0)
    {
        console.log("Divide by both number")
    }
    else{
        console.log("Number is divided by both number")
    }
    
}
let result8=divide(10);
console.log(result8)

//12. Create a function that returns the remainder.
const remainder = (j, k) => {
    return j % k;
}

let result9 = remainder(17, 5);
console.log(result9);

//13.Create a function that returns the average of three numbers.
const average = (a, b, c) => {
    return (a + b + c) / 3;
}

let result10 = average(10, 20, 30);
console.log(result10);

//14.Create an arrow function that multiplies three numbers.

const multiplies=(a,b,c)=>{
    return a*b*c;


}
let result11=multiplies(10,20,30)
console.log(result11)

//15. Create an arrow function that converts Celsius to Fahrenheit.
const converts=(C)=>
    {
  return (F = C * 9/5 + 32)
}
let Result12=converts(30)
console.log(Result12)

//16. Create an arrow function that returns whether a person is eligible to vote.
const eligible = (age) => {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(eligible(17));
console.log(eligible(21));

//17.Create a function with a default country.
const defaultCountry = (country = "Germany") => {
    return country;
}   
defaultCountry();
console.log(defaultCountry());


//18.Create a function with a default discount.
const discount = (price, discount = 10) => {
    return price - (price * discount / 100);
}

console.log(discount(1000));      // 900
console.log(discount(1000, 20));  // 800
console.log(discount(500));       // 450

//19.Create a function that greets a user. Default name should be "Guest".
const greet = (name = "Guest") => {
    console.log("Hello " + name);
}

greet();
greet("Pranita");
greet("Rahul");
//19.Create a function to find the largest of three numbers.
const largeNumber = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(largeNumber(10, 20, 30)); // 30
console.log(largeNumber(50, 20, 30)); // 50
console.log(largeNumber(10, 70, 30)); // 70



