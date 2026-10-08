for(let i=0;i<=10;i++)
{
    console.log("value of i is:",i)
}

// program to print table of any given value
let num=10;
for(let j=1;j<=10;j++)
{
    console.log(j,"*",num,":",j*num)
}

// write a program to get all values which are divisible by  5 and 7

for(let k=1;k<=50;k++)
{
 if(k%5==0 && k%7==0)
 {
    console.log(k)
 }
 
}

for(let p=1;p<=50;p++)
{
    if(p%2==0)
    {
        console.log(p)
    }
}

// sum of values from 1 to 10: 1+2+3+4+5+6+7+8+9+10=55
let sum=0;
for(z=1;z<=10;z++)
{
 sum=sum+z;
 console.log("sum is:",sum)
}

/* Nested for loop:
  - In nested loop condition for one loop is written inside the other loop.
  - Inner loop will be executed first and then outer loop will be executed.
  - It is used to print pattern.

*/

for (let i=1; i<=5; i++ )
{
    // inner loop
    console.log("address:i:",i)
    for( let j=1;j<=3;j++)
    {
        console.log("Package:j:",j)
    }
    console.log("-----------------------------------")
}


for(var i=1;i<=4;i++)
{
    console.log("Address:",i)
    for(var j=1;j<=3;j++)
    {
        console.log("Package:",j)
    }

    console.log("_________________________________")
}


// Write a programm given number is prime or not

var a=30;
if(a%1==0 && a%a==0)
{
    console.log("It is a prime number")
}
else{
    console.log("It s not prime number")
}


function square(a){
   
   return a*2

}
let result=square(2)
console.log(result)

