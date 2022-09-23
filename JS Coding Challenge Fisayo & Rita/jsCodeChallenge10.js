//create a function that filters out negative numbers

function GetPositiveNumber(numberArray ) {
    const value = numberArray.filter(function(num) { return num > -1; });
    console.log(value);
}

GetPositiveNumber([-2, 81,-4, -5, 40, 58]);