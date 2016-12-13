// var x = new XMLHttpRequest()
// console.log(x)

// everything not in __proto__ are the the unique
// properties of the x object   which is a new xhr request

// https://github.com/nashville-software-school/front-end-milestones/blob/master/4-modern-javascript-developer/resources/MJ_PROTOTYPAL_INHERITANCE.md

// a var with an anonymous function is a function expression
// function pizza () {}   is a function declaration

// The only difference is one is hoisted and the other is not
// the function expression is not hoisted
// the function declaration is hoisted


// has a = property of an object
// is a = a value of a property?  related to another object



// an order has a pizza

// deepdish is a pizza
// thin crust is a pizza

// pizza has a topping

// mushroom is a topping
// pepperoni is a topping

// order has a beverage

// soda is a beverage
// fruit punch is a beverage

var Order = function() {
    this.pizzas = []        //this will push to the new order only
    this.beverages = []
};

//Order.prototype.pizzas = []     // this will affect all orders because it modifys orders prototype
//Order.prototype.beverages = []  // thsi will affect all orders .. . .

var Pizza = function() {
    this.toppings = []
};

// var deepDish = new Pizza()
// Pizza.prototype = // shared stuff

var DeepDish = function() {
    //this.thickness = 'Deep'
};

DeepDish.prototype = new Pizza()
DeepDish.prototype.thickness = 'Deep'

var ThinCrust = function() {

};

ThinCrust.prototype = new Pizza()
ThinCrust.prototype.thickness = 'Thin'

var Topping = function() {

};

var Pepperoni = function() {

};

Pepperoni.prototype = new Topping()

var Mushroom = function() {

};

Mushroom.prototype = new Topping()

var Beverage = function() {

};

var Soda = function() {

};

Soda.prototype = new Beverage()

var FruitPunch = function() {

};

FruitPunch.prototype = new Beverage()


/* this.stuff    way
var o = new Order()

o.pizzas.push(new DeepDish())
o.pizzas

only affects o order
*/


/* prototype way
var o = new Order()

o.pizzas // returns empty array

o.pizzas = o.pizzas.concat(new Pizza())
// .concat creates a copy

*/
