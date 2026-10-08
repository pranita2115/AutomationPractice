for(let i=1;i<=4;i++)
{
    let output="";

    for(let j=1;j<=i;j++)
    {
       output=output+"*";
    }
    console.log(output);
}

// *****

for(let p=1;p<=1;p++)
{
    let o=""
   for(let q=1;q<=5;q++)

    {

        o=o+"*"
   }
   console.log(o)
}


/*
   *****
   *****
   *****

*/
for(let c=1;c<=3;c++)
{
    let z="";
    for(let d=1; d<=5;d++)
    {
        z=z+"*"
    }
    console.log(z)
}

/*
*
**
***
****
*****

*/

for(let d=1; d<=5; d++)
{
    let e="";

    for(let f=1; f<=d; f++)
    {
        e=e+"*";
    }

    console.log(e);
}
/*

*****
*****
*****

*/
for (let x=1;x<=3;x++)
{
   let output1="";

   for(let z=1;z<=5;z++)
   {
    output1=output1+"*";
   }
   console.log(output1)
}

/*
*
**
***
****
*****

*/

for (let m=1;m<=5;m++)
{
  let output3="";

  for(let n=1;n<=m;n++)
  {
    output3=output3+"*"
  }
  console.log(output3)
}

/*
*****
****
***
**
*


*/

for(let l=1;l<=5;l++)
{
    output4="";

    for(let s=1;s<=5;s++)
    {
      output4=output4+"*"
    }

    console.log(output4)
}


for(f=1;f<=1;f++)
{
    output6="";
for (g=1;g<=5;g++)
{
output6=output6+"*"
}
console.log(output6)
}

for(h=1;h<=3;h++)
{
    output7="";

    for(s=1;s<=5;s++)
    {
        output7=output7+"*"
    }
    console.log(output7)
}

for(let co=1;co<=5;co++)
{
   output7=""

   for(let cs=1;cs<=co;cs++)
   {
    output7=output7+"*"
   }
   console.log(output7)
}

for(let row = 5; row >= 1; row--)
{
    let output = "";

    for(let col = 1; col <= row; col++)
    {
        output = output + "*";
    }

    console.log(output);
}


/*

* * * * * * *
      *
      *
      *
* * * * * * *

*/

for(let row = 1; row <= 5; row++)
{
    let output = "";

    if(row == 1 || row == 5)
    {
        for(let col = 1; col <= 7; col++)
        {
            output = output + "* ";
        }
    }
    else
    {
        for(let space = 1; space <= 6; space++)
        {
            output = output + " ";
        }

        output = output + "*";
    }

    console.log(output);
}