let Z=20;
if(z>=50)
{
    console.log("t a is greate")
}
else{
    console.log("a is small")
}

let b=20;
if(b%3===0 && b%5===0)
{
    console.log("It is divisible by both",b )
}
else
{
    console.log("Not divisible")
}

let c=10;
if(c%3===0 || c%5===0)
{
    console.log("It is divisible by both")
}
else
    { 
        console.log("It is not divisble by both")
    }


    //if - else -if

    let a=20;
    let b=40;
    let c=60;
    if(a>b && b>c)
    {
        console.log("a has max value", a)
    }
    else if (b>a && b>c)
    {
        console.log("b has max value", b)
    }
    else (c>a && c>b)
    {
        console.log("C has max value",c)
    }
  
console.log("----Nested if condition ----")

 let firstRound = "pass";
let secondround = "pass";
let thirdround = "Pass";

if(firstRound == "pass")
{
    console.log("1st round clear");

    if(secondround == "pass")
    {
        console.log("2nd round is cleared");

        if(thirdround == "Pass")
        {
            console.log("3rd round pass");
        }
        else
        {
            console.log("Fail in third round");
        }
    }
    else
    {
        console.log("Fail in second round");
    }
}
else
{
    console.log("Fail in first round");
}

// ternery operator

let num=60;

let result=(num %2==0) ? "Even": Odd;
console.log("Result:",result)


// Write a program to get all even number from 1 to 50

//let num=50;
for(let k=1;k<50;k++)
{
    if(k%2==0)
    {
        console.log(k)
    }
}

// Write a program to sum of values from 1 to 10

let num=0;
for(let j=0;j<=10;j++)  
{
    
    num=num+j
}
console.log(num)

//1+1=2
//2*3=5