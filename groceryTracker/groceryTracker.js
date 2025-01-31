let groceryAmount1;
let groceryAmount2;
let groceryAmount3;

function groceryTracker() {
    let groceryAmount1 = parseFloat(document.getElementById('groceryAmount1').value) || 0;
    let groceryAmount2 = parseFloat(document.getElementById('groceryAmount2').value) || 0;
    let groceryAmount3 = parseFloat(document.getElementById('groceryAmount3').value) || 0;

    let total = groceryAmount1 + groceryAmount2 + groceryAmount3;

    document.getElementById('result').innerText = `The total amount is: £${total.toFixed(2)}`;
}
