//===== OBJECT FUNDAMENTALS =====//
// Properties in object are referred to as "MEMBERS"
// If a member is a function, it is referred to as a "METHOD"

//===========================================================================

// Simple way to define objects: 
// === OBJECT LITERALS === //
// (Not good way to create an object and duplicate it if the object has one or more methods in it)
// If an object has one or more methods, we say that object has "BEHAVIOR"
// If an object has BEHAVIOR, it is not ideal to create an object with Object Literals
const objectLiteralCircle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log(`Drawing in OBJECT LITERAL example`);
  }
};

objectLiteralCircle.draw();

//==========================================================================

// FACTORIES VS CONSTRUCTORS
// JAVA and C# devs prefer CONSTRUCTOR Function syntax because it looks like creating an instance of a "class"
// As a Dev, be familar with both 

//==========================================================================

// FACTORIES
// === FACTORY FUNCTION === //
// return an object with "return" statement
function createFactoryFunctionCircle(radius) {
  return {
    // In ES6 new feature, if key and value are the same, we can remove the "noise" in the code by removing the value
    // radius: radius,
    radius,
    draw: function() {
      console.log(`Drawing in FACTORY FUNCTION example`)
    }
  };
}

const factoryFunctionCircle = createFactoryFunctionCircle(1);
factoryFunctionCircle.draw();

//========================================================================

// CONSTRUCTORS
// === CONCTRUCTOR FUNCTION === //
// "this" keyword + "new" operator
// Naming convention: First letter is uppercase
function Circle(radius) {
  // Use "this" keyword to set the properties of this object
  // "this" is a ref to the object that is executing this piece of code
  this.radius = radius;
  this.draw = function() {
    console.log(`Drawing in CONSTRUCTOR example`);
  }
}

const contsructorFunctionCircle = new Circle(1);
// Use "new" operator to call the Circle function - 
// 1. creates an empty object " { } "
// 2. Set "this" to point to that object
// 3. Return that object from constructor function -  no explicit "return" statement required

contsructorFunctionCircle.draw();

// CONSTRUCTOR PROPERTY
// Every object in JS has a property called "constructor" which references the function that was used to "construct" or create that object

// FUNCTIONS ARE OBJECTS

// CATEGORIES OF TYPES
// ===== VALUE(PRIMITIVE) VS REFERENCE TYPES =====//

// === VALUE (PRIMITIVE) TYPES === //
// NUMBER
// STRING
// BOOLEAN
// SYMBOL (New in ES6)
// UNDEFINED
// NULL
// = Copied by their VALUE = //

// "x" and "y" are two independent variables
// in PRIMITIVE TYPES, the value bound to "x" is copied into "y" but they remain 2 independent variables
let x = 10;
let y = x;

x = 20;
// console.log(x) = 20
// console.log(y) = 10

// === REFERENCE (OBJECTS) TYPES === //
// OBJECT
// FUNCTION
// ARRAY
// = Copied by their REFERENCE (address of memory location) = //

// In OBJECT TYPES, the value (object) is NOT stored in variable "x" 
// The object is stored somewhere else in memory
// The address of that memory location is stored in variable "x" 
// When we copy "x" into "y", we are copying that address, or reference
// Variables "x" and "y" are "POINTING" to the same object in memory
// When we modify that object, its changes are immediately visible to the other variable
let x2 = { value: 10 }; 
let y2 = x2;

x2.value = 20;
// console.log(x) = 20
// console.log(y) = 20

// ===== VALUE(PRIMITIVE) VS REFERENCE TYPES =====//
// EXAMPLES

// == PRIMITIVE TYPE Example
let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);
// 10

// == OBJECT TYPE Example
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

// Here, when we call "increase" and pass "obj", this object is passed by its REFERENCE
// Local parameter "obj" will point to the same object defined in line 133
// Here we are NOT dealing with 2 independent copies
// We have 2 variables pointing to the same object
increase(obj);
console.log(obj);
// 11

// ===== ADDING OR REMOVING PROPERTIES (Members) ===== //
// Objects in JS are dynamic
// After you create an object, you can add or delete properties from said object
// This is useful information because:
// Imagine you are working with a "user" object 
// And the client (mobile app or web app) will send "user" object to the server
// On the server, we get this "user" object and then we add additional stuff to it
// We can always add something extra to an existing object
// Because we do not have classes, we don't need to define these properties which are being added on the fly ahead of time (in comparison to C# or Java where you would have to go back and change classes)
// We can add them whenever we need them - THIS makes JavaScript extremely powerful and easy to work with


function Circle2(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(`Drawing in the second CONSTRUCTOR function example`);
  }
}

const circle = new Circle2(10);

// Adding new property to circle object with "dot notation"
circle.location = { x: 1 };
// Adding new property to circle object with "bracket notation"
circle['location'] = { X: 1 };
// "bracket notation" is useful when you want to dynamically access a property name
const propertyName = 'location';
circle[propertyName] = { x: 1 };
// or when you have special characters in your property name (ie hypen or spaces)
const propertyName1 = 'center-location';
circle[propertyName1] = { x: 1 };


// DELETING Properties from an existing object
// Use case: 
// When you get a "user" object from a db and want to return it to the client
// But maybe that "user" object has certain properties you don't want to send to the client 
// For example, password, credit card info, etc.
// In that case you will dynamically delete one or more properties from that object 
// Use "delete" operator 

delete circle.location;



