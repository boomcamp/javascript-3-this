// IMPORTANT NOTE: use var for declaring variables

//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//The purpose of 'this keyword' is to reference the current o0bject, and can be passed as variable in methods 

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//1. If a function is inside a global scope, 'this' will be window object
//2. object before the dot is 'this'
//3. if a theres a constructor function, 'this' refers to the specific object created.
//4. in javascript, if there is a method, 'this' is used.

// 3) What does .bind do?

//.bind creates a new bound function


//Next Problem

//Create an object called user which has the following properties.
//username --> which is astring
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*


var user = {
    username: 'beastmast64',
    email: 'beastmaster64',
    getUsername() {
        return this.username;
    }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

user.getUsername();

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function() {
        this.move = this.move + 10;
        return this.move;
    }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

Car.prototype.moveCar = function() {
    return 10;
}


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

var getPriusYear = this.getYear.bind(prius);
var getMustangYear = this.getYear.bind(mustang);



//New Problem

var myUser = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
    return this.username;
};
var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?


//The getMyUsername function will return object


//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

//The this keyword is bounded to the getMyUsername.


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.s b