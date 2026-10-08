/*
If you want to print Hello 5 times thne u wil write 
console.log("Hello")
5 times without loop

1. With loop:
for(let i = 1; i <= 5; i++)
{
    console.log("Hello");
}
2. For loop
for(initialization; condition; increment)
{
    work
}

Part1: Initilization
let i=1;
start from 1

Part2: condition
i <= 5

Part3: Increment
i++ 
increase everytime by 1


# Dry Run:
for(let i=1;i<=5;i++)
{
    console.log(i);
}


# First Time:
i = 1

1<=5

Yes

Print 1

i++

# Second Time:
i=2

2<=5

Yes

Print 2

i++

# Third Time:
i=3

Print 3
# Fourth Time:
i=4

Print 4
i=4

Print 4

# Fifth Time:
i=5

Print 5

#Sixth time:
i=6

6<=5

False

Stop

Output:
1
2
3
4
5


*/

//1. Print numbers from 1 to 10.

for(let i=1;i<=10;i++)
{
    console.log(i)
}

//2. Print numbers from 10 to 1.
for(let i=10;i>=1;i--)
{
    console.log(i)
}

//3. Print all even numbers from 1 to 20.
for(let i=1;i<=20;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}

//4. Print all odd numbers from 1 to 20.
for(let j=1;j<=20;j++)
{
    if(j%2!=0)
    {
        console.log("All odd numbers",j)
    }
}

//5.Print numbers from 1 to N.
let N=10;
for(let i=1;i<=N;i++)
{
    console.log(i)
}

//6. Print numbers from N to 1.
let N=10;
for(let i=N;i>=1;i--)
{
    console.log(i)
}

//7.Print the multiplication table of a given number.
let n=7

for(let i=1;i<=10;i++)
{
    let result=n*i
    console.log(result)
}

//8. Print the squares of numbers from 1 to 10.

for(let i=1;i<=10;i++)
{
    let result=i*i
    console.log(result)
}

//9. Print the cubes of numbers from 1 to 10.
for (let i=1;i<=10;i++)
{
    let result=i*i*i;
    console.log(result)
}

//10. Print all numbers divisible by 5 between 1 and 100.
for(let i=1; i<=100;i ++)
{
    if(i%5==0 && i%1==0)
    {
        console.log(i)
    }
}

//11. Find the sum of numbers from 1 to N.
let N=10;
let sum=0;
for(let i=1;i<=N;i++)
{
    sum=sum+i
}
console.log(sum)

//12.Find the product of numbers from 1 to N (Factorial).
let N=5;
let fact=1;
for(let i=5;i>0;i--)
{
    fact=fact*i
}
console.log(fact)

//13. Find the sum of all even numbers from 1 to N.
let N=20;
let sum=0
for(let i=1;i<=N;i++)
{
    if(i%2==0)
    {
  sum=sum+i
    }
}
console.log(sum)

//14. Find the sum of all odd numbers from 1 to N.
let N=20;
let sum=0;
for(let i=1;i<=N;i++)
{
    if(i%2!=0)
    {
        sum=sum+i;
    }
    
}
console.log(sum)

//15. Count how many numbers are there from 1 to N.
let N=20;
let num=0;
for(let i=1;i<=N;i++)
{
    num=num+1
}
console.log("Count of Number from 1 to 20 is:",num)

//16.Print all multiples of 3 from 1 to 50.
for(let i = 1; i <= 50; i++)
{
    if(i % 3 == 0)
    {
        console.log(i);
    }
}

//17. Print all multiples of 7 from 1 to 100.
for(let i=1;i<=100;i++)
{
    if(i % 7 ==0)
    {
        console.log(i)
    }
}

//18. Print all numbers divisible by 3 and 5 between 1 and 100.
for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log(i)
    }
}

//19. Find the sum of the multiplication table of a number.
let input = 5;
let sum = 0;

for(let i=1; i<=10; i++)
{
    sum = sum + (input * i);
}

console.log(sum);

//20. Print the first N natural numbers.
let N=10;
for(let i=1;i<=N;i++)
{
    console.log(i)
}


// 🟠 Number Programs

//21. Reverse a given number.