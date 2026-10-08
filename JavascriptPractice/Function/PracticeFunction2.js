//Create a function that prints: Hello World
function hello()
{
console.log("Hello word")
}
hello()

//2. Print Your Name: My name is Pranita
function name(a)
{
    console.log("My Name is",a)
}
name("Pranita")

//3. Add two numbers
function add(a,b)
{
    return a+b
}
let result=add(10,20)
console.log(result)

//4.4. Subtract Two Numbers
function sub(c,d)
{
    return c-d
}
let result=sub(20,10)
console.log(result)

//5. Multiply Two Numbers
function mul(e,f)
{
    return e*f
}

let result=mul(20,10)
console.log(result)

//6. Divide Two Numbers
function divide(a,b)
{
    return a/b
}
let result=divide(20,5)
console.log(result)


//7. Find Square
function square(a)
{
    return a*a
}
let result=square(5)
console.log(result)

//8. Find Cube
function cube(a)
{
    return a*a*a
}
let result=cube(3)
console.log(result)

//9. Find Area of Rectangle
function area(length, width)
{
    return length * width
}
let result=area(2,4)
console.log(result)

//10. Find Area of Circle
function circle(r,pi=3.14)
{
  return pi*r*r
}
let result=circle(2)
console.log(result)

//11. Check Even or Odd
function even(a)
{
    if(a%2==0)
    {
        console.log("Even")
    }
    else
    {
        console.log("Odd")
    }
}
even(20)

//12. Check Positive, Negative or Zero
function check(a)
{
    if(a<0)
    {
        console.log("Negative")
    }
    else if (a>0)
    {
        console.log("Positive")
    }
    else
    {
        console.log("Zero")
    }
}
check(-10)

//13. Find Greater Number
function greater(a,b)
{
    if(a>b)
    {
        console.log("a is greater")
    }
    else
    {
        console.log("b is greater")
    }
}
greater(10,20)

//14. Find Greatest of Three Numbers
function three(a,b,c)
{
    if(a>b)
    {
        console.log("a is greate")
    }
    else if(b>c)
    {
        console.log("b is greater")
    }
    else(a<c)
    {
        console.log("C is greater")
    }
    }
    three(10,20,30)
//15. Check Voting Eligibility
function voting(age)
{
    if(age>=18)
    {
        console.log("Eligible for vote")
    }
    else
    {
        console.log("Not eligible for vote")
    }
}
voting(18)
voting(10)

//16. Leap year
/*
Rule for Leap Year

A year is a leap year if:

It is divisible by 400 ✅
Example: 2000 → Leap Year

OR

It is divisible by 4 but not divisible by 100 ✅
Example: 2024 → Leap Year

Otherwise:

❌ Not a Leap Year
*/
function checkLeapYear(year)
{
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
    {
        return "Leap Year";
    }
    else
    {
        return "Not a Leap Year";
    }
}

console.log(checkLeapYear(2024));
console.log(checkLeapYear(2023));
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2000));

//17. Check Divisible by 5
function divisible(a)
{
    if(a%5==0)
    {
        console.log("Divisible")
    }
    else{
        console.log("Not divisible by 5")
    }
}
divisible(25)
divisible(3)

//18. Check Alphabet is Vowel or Consonant
function checkAlphabet(letter)
{
    letter = letter.toLowerCase();

    if (
        letter == "a" ||
        letter == "e" ||
        letter == "i" ||
        letter == "o" ||
        letter == "u"
    )
    {
        return "Vowel";
    }
    else
    {
        return "Consonant";
    }
}

console.log(checkAlphabet("A"));
console.log(checkAlphabet("b"));
console.log(checkAlphabet("E"));
console.log(checkAlphabet("z"));

//19. Check Number is Multiple of 3 and 5
function checkMultiple(num)
{
    if(num % 5 == 0 && num % 3 == 0)
    {
        return "Multiple of 3 and 5";
    }
    else
    {
        return "Not a Multiple";
    }
}

let result = checkMultiple(15);

console.log(result);

//20. Find Largest of Four Numbers
function largestNumber(a,b,c,d)
{
    if(a>b && a>c && a>d)
    {
        console.log("A is greater");
    }
    else if(b>a && b>c && b>d)
    {
        console.log("B is greater");
    }
    else if(c>a && c>b && c>d)
    {
        console.log("C is greater");
    }
    else
    {
        console.log("D is greater");
    }
}

largestNumber(10,25,15,5);

//21. Sum from 1 to N
function sum(a)
{
    let total = 0;

    for(let i = 1; i <= a; i++)
    {
        total = total + i;
    }

    console.log(total);
}

sum(10);