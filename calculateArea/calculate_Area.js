let length;
let width;

function calculateArea()
{
    length = parseFloat(document.getElemetById('length').vlaue);
    width = parseFloat(document.getElemetById('width').vlaue);

    let area = length * width;

    document.getElementById('result').innerText = 'The area of the rectangle is: ${area}';
}