/* code goes here */

// 1. Create object using new Object()
var order = new Object();

order.product = "Laptop";
order.price = 15000000;
order.quantity = 2;

order.total = function () {
    return this.price * this.quantity;
};

document.write("<h3>Object using new Object()</h3>");
document.write("Product: " + order.product);
document.write("<br>Price: " + order.price);
document.write("<br>Quantity: " + order.quantity);
document.write("<br>Total: " + order.total());

// 2. Dot notation
document.write("<h3>Dot Notation</h3>");
document.write(order.product);

// 3. Bracket notation
document.write("<h3>Bracket Notation</h3>");
document.write(order["product"]);

var propertyName = "price";
document.write("<br>" + order[propertyName]);

// 4. Object Literal
var orderLiteral = {
    product: "Keyboard",
    price: 500000,
    quantity: 2,

    total: function () {
        return this.price * this.quantity;
    }
};

document.write("<h3>Object Literal</h3>");
document.write("Product: " + orderLiteral.product);
document.write("<br>Total: " + orderLiteral.total());

// 5. Constructor Function
function Order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;

    this.total = function () {
        return this.price * this.quantity;
    };
}

// Create two objects
var orderOne = new Order("Laptop", 15000000, 2);
var orderTwo = new Order("Mouse", 300000, 3);

document.write("<h3>Constructor Function</h3>");
document.write("Order One: " + orderOne.product);
document.write("<br>Total One: " + orderOne.total());

document.write("<br>Order Two: " + orderTwo.product);
document.write("<br>Total Two: " + orderTwo.total());
