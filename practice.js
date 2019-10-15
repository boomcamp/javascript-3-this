//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//Answer
"'this' keyword can be used to reference a variable and and it always has a reference to an object and in strict mode can be any value";

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//Answer
"Four rules that govern 'this keyword' are the function called new, call() apply() bind(), obj.func(), and global scope";
"1. The new keyword in JavaScript makes a standard function in to a constructor function.";
"2. call() a function and sets its this to the provided value, arguments can be passed as they are.";
"   apply() a function and sets its this to the provided value, arguments can be passed as an Array object.";
"   bind() creates a new function which, when called, has its this set to the provided value, with a given sequence of arguments preceding any provided when the new function was called.";
"3. obj.func() a function object includes a string which holds the actual code -- the function body -- of the function. The code is literally just a string";
"4. global scope functions If strict mode is enabled, return undefined, Otherwise, return the global object for example is window";

// 3) What does .bind do?

//Answer
".bind() method used to create a new function that, when called, displays a keyword set to the provided value, and given sequence of arguments preceding any provided when the new function is called";

//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here
var user = {
  username: "XLR8",
  email: "xlr8@boom.camp",

  getUsername: function() {
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

//Next Problem

// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.moveCar = function() {
    this.move += 10;
    return this.move;
  };
}

//Function Invocations Here

var prius = new Car("Toyota", "Prius", 2011);
var mustang = new Car("Ford", "Mustang", 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Continuation of previous problem

var getYear = function() {
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.

//Note(no tests)
//Code Here
var getPriusYear = getYear.bind(prius);
var getMustangYear = getYear.bind(mustang);

console.log(getPriusYear());
console.log(getMustangYear());

//New Problem

var myUser = {
  username: "iliketurtles",
  age: 13,
  email: "iliketurtles@gmail.com"
};

var getMyUsername = function() {
  return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
//Answer Here
("undefined");

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

//Answer Here
("myUser");

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
