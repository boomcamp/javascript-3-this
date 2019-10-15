//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

"To reference a variable";

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

"a.Default Binding - if the variable is defined in a window context the value will refer to window context";
"b.Implicit Binding - the obeject before the dot is where it will be bound to";
"c.Explicit Binding - you can use a particular object for this binding by using functions call,apply and bind";
"d.New Binding - the function that is called with new operator ,the following things will happen (an empty object is created and reference by this variable),(Properties and methods are added to the object referenced by this)";

// 3) What does .bind do?

"bind() method creates a function that when called, its this keyword set to the provided value";

// Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
	username: "marsh",
	email: "marcial.norte@boom.camp",
	getUsername: function() {
		return this.username;
	}
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem

// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(make, type, year) {
	this.make = make;
	this.type = type;
	this.year = year;
	this.move = 0;
	this.moveCar = function() {
		return this.move + 10;
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
var getPriusYear = getYear.bind(prius);
console.log(getPriusYear());

var getMustangYear = getYear.bind(mustang);
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
//undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

("myUser");

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
