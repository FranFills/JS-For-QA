// print a table containing multiplication tables
function createMultiplcationTable(times, factor){
    // creating multiplication table
    for (let i = 1; i<=factor; i++)  
    {
        //multiple i with times
        const result = i * times; 
        console.log(`${times} * ${i} = ${result}`);
    }
}

createMultiplcationTable(2, 12);
