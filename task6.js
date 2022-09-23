/*Write a JavaScript program that prints out all the odd numbers between 1 and 20. 
Your code must use a For-Loop*/

console.log ('Print out all odd numbers between 1 and 20')
for(let number=1; number<=20; number=number+1)
{
    if(number%2 !== 0){
        console.log(number+' is an odd number')
   }
}