// return a boolean if a number is divisible by 10
function isDivisible(num, divider){
    if (num % divider === 0) {
        console.log (true);
    }else{
        console.log (false);
    }
}
isDivisible(65, 10);