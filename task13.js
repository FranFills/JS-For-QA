/*You now have more books in your library. You should manage them all in one place. Any idea how you can achieve that?... Arrays!
Create a books array. 
Each element of this array will be a book object. 
Each book object will have the following properties
title (string)
description (string)
numberOfPages (number)
authour (string)
reading (boolean)
Use a for-loop to loop through the books array and log all books where the reading status is true to the console*/

const books = [
    {
        title: 'Purple Hibiscus',
        description: 'Fictional book dwelling on domestic abuse',
        numberOfPages: 405,
        author: 'Chimamanda Ngozi Adichie',
        reading: true,
    },
    {
        title: 'Mr Cavendish, I presume?',
        description: 'Historical romance',
        numberOfPages: 609,
        author: 'Julia Quinn',
        reading: false,
    },
    {
        title: 'Half of a Yellow Sun',
        description: 'Fictional book dwelling on Nigerian Civil War',
        numberOfPages: 398,
        author: 'Chimamanda Adichie',
        reading: false
    },
    {
        title: 'Welcome to Lagos',
        description: 'Fictional book dwelling on the Nigerian political space',
        numberOfPages: 424,
        author: 'Chibundu Osalor',
        reading: true
    },
    {
        title: 'Wahala',
        description: 'Fiction about a group of foolish friends',
        numberOfPages: 301,
        author: 'Nikki May',
        reading: false
    },
]

for (let i=0; i<books.length; i++){
    if (books[i].reading === true){
        console.log(books[i])
    }
}

//second method
/*for (let i=0; i<books.length; i++){
    if (books[i].reading === true){
        console.log('result: %O', books[i])
    }
}
console.log('result: %O', books);*/ 