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



