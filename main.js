// // Methods are functions inside objects

// // Separate barks in different objects take up
// // additional memory - twice as much memory

// var dog = {}

// dog.bark = function () {
//     console.log('woof')
// }

// dog.bark()


// var sparky = {}

// sparky.bark = function () {
//     console.log('woof')
// }

// sparky.bark()

// sparky.name = "Sparky"

// // this is the entire object itself
// // this depends on the contex that it is
// sparky.bark = function () {
//     console.log(this.name + " said, 'woof'")
// }

// // sparky.bark = function () {
// //     console.log("Sparky said, 'woof'")
// // }

// sparky.bark()

// function whatisthis() {
//     console.log(this)
// }

// // same as window.whatisthis()
// // window is the global context of all variables/functions
// // outside of functions/objects
// whatisthis()

// /*
// var x = 'abc'

// console.log(window.x)
// window.x
// */


// how scott did it
/*
var child = {
    name: "sarah",
    age: "fhree",
    speak: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
    }
}
*/

// variables cannot be inside objects
// so if speak was a function outside the object it would create a copy
// of the speak function
// if speak was changed it woul still have the old copy of the speak
//function

// would exist on the window object and child object
// var child = {}

// child.name = "Billy Bob"
// child.age = "71"
// // my name is blank and i am blank years old
// child.speak = function () {
//     console.log("My name is " + this.name + " and I am " + this.age + " years old")
// }

// child.speak()

// // Jacob.age and jacobAge are separate
// var jacobAge = 10;

// jacobAge++

// var jacob = {
//     age: jacobAge
// }


// var emptyObj = {}
// // an object
// emptyObj

// // undefined
// emptyObj.foo

// // undefined
// emptyObj.bar

// // is a function - all objects have this function
// emptyObj.toString



// var obj = {}

// Object.getPrototypeOf(obj) // returns object prototype

// Object.getPrototypeOf(obj) === Object.prototype //  returns true

// Object.getPrototypeOf(Object.prototype) // returns null


// // Prototypal chain - go up the protoype chain to find the method
// // All arrays have protype of arrays and objects
// var array = [1,2,3,4]
// Object.getPrototypeOf(array) // prototype of all arrays?

// Object.getPrototypeOf(Object.getPrototypeOf(array))

// array.toString // uses array version of toString,
// // not the object version

// // call object version of toString on array
// //  Object.prototype.toString.call(array) // will probably never do this



// var child = {
//     name: 'sue',
//     age: 3,
//     speak: function(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old`)
//     }
// }

// // create new object based on the child object
// var billy = Object.create(child)

// billy.name = "Billy"
// billy.age = 7



// Generic child
/*
var child = {
    legs: 2,
    likes: "toys",
    speak: function () {
        console.log(`My name is ${this.name}`)
    }
}

child.likes = ['toys', 'candy']

var billy = Object.create(child)
billy.name = "Billy"
billy.age = 5
*/


// Crearing objects

// Constructor or Object.create

// create a constructor function
/*
function Bear () {
    this.claws = true
}

// create new bear

var smokey = new Bear() // capitalize constructor function


// Bear() //references the window object

// new Bear() // does Object.create(Bear)

var winnie = new Bear()


//  if you want to add a new property to the general Bear use prototype
Bear.prototype.likes = ["Honey"]

// if you wanted to change an old prototype you want have to use getProtypeOf(smokey)
*/



function Bear(name, location) {
    //this.claws: true
    //this.likes = ['honey', 'Slow Runners']
    /*
    this.growl = function () {
        console.log("rawr")
    }
    */
    this.name = name
    this.location = location
}

// Don't put these in the constructor function
// Add prototypes after
Bear.prototype.claws = true;
Bear.prototype.likes = ['honey', 'Slow Runners']
Bear.prototype.growl = function () {
        console.log("rawr")}


var winnie = new Bear('winnie', '100 acre wood')

var poe =  new Bear("poe", "japan")

// add kills property to all bears
Bear.prototype.kills = 0;

// add kills to only poe
poe.__proto__.kills++;


// this.name, this.location are "has a" properties or "can do" (growl)
