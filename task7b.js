/*Write JavaScript function, calculateAreaOfRectangle. The function should:
Takes two parameters, length and width. 
Multiplies the length and width
Returns the area of the rectangle*/

function calculateAreaOfRectangle(length,width){
    const area = length * width;
    return area;
}

    const areaValue = calculateAreaOfRectangle(5, 6);
    console.log('The area of a rectangle is ' + areaValue);