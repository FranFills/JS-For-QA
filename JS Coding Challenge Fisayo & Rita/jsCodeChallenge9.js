// return a number of vowels in a string
function countVowels(value) {
    let count = 0;
    const vowels = ["a","e","i","o","u"];
    for (const character of value){
        if (vowels.includes(character)) {
            count++
        }
    }
    console.log(`The number of vowels in ${value} is : ${count}`);
}

countVowels("Rita");