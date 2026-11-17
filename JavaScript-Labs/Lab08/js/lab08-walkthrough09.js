/* code goes here */

var taxRate = 0.1;

// 1. Function declaration
function calculateTax(price) {
    return price * taxRate;
}

function calculateTotal(price) {
    var tax = calculateTax(price);
    return price + tax;
}

document.write("Tax: " + calculateTax(100));
document.write("<br>Total: " + calculateTotal(100));

// 2. Nested function
function calculateTotalNested(price) {
    function calculateTaxNested(amount) {
        return amount * 0.1;
    }

    return price + calculateTaxNested(price);
}

document.write("<br>Nested total: " + calculateTotalNested(100));

// 3. Function expression / Anonymous function
var calculateTaxExpression = function (price) {
    return price * 0.1;
};

document.write("<br>Expression tax: " + calculateTaxExpression(200));

// 4. Passing function as parameter
function calculateTotalWithFunction(price, taxFunction) {
    var tax = taxFunction(price);
    return price + tax;
}

document.write(
    "<br>Total with function parameter: " +
    calculateTotalWithFunction(100, calculateTaxExpression)
);
