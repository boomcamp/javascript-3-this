//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //The 'this keyword' makes our code unambiguous. It is a reference to an object.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //1. When a function was called by new keyword, this keyword contains the value of the object created by the constructor function.
      //2. Use .bind(), .call(), or .apply() method when this keyword was used in a function and you want to set it's value to a specific object.
      //3. when a function was invoked, the left of the dot is the value of the this keyword.
      //4.  When this keyword was used in a function outside the object or function with a global scope, this return an undefined or window value.
  // 3) What does .bind do?

      //Answer
      // .bind method sets a specific value to the this keyword in a function. So, when a function was invoked it return the value of the object.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
let user = {
  username : "Shey",
  email : "shey@gmail.com",
  getUsername : function(){
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user["getUsername"]();
//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(brand, model, year, move){
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.distancemove = 10;
  this.move = 0;
}

Car.prototype.moveCar = function() {
  this.move += this.distancemove;
  return this.move;
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)
  //Code Here
  var getPriusYear = getYear.bind(prius);
  console.log(getPriusYear());
  var getMustangYear = getYear.bind(mustang);
  console.log(getMustangYear());

//New Problem
var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

myUser.getMyUsername = getMyUsername;
var userName = myUser.getMyUsername();


//var userName = myUser.getMyUsername; //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  //undefined
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  //The 'this keyword' contains a value of undefined because it was used in a anonymous function that is not bound to the object.

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

