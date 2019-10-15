//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      /* The "this" keyword refers to the owner of the function that being executed or the top window object */
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /*
      The four rules that govern what the 'this' keyword in javascript are:
      1. Implicit Binding - The Implicit Binding occurs when the dot notation is being used in invoking a function.
      2. Explicit Binding - The Explicit Binding occurs when the these three (call, apply, bind) are used in a function.
      3. New binding - The New Binding occurs when the new keyword is used to invoke a constructor function.
      4. Default Binding - The Default Binding occurs when a function invoked without any rules like using the implicit binding or explicit binding.
      */
  // 3) What does .bind do?

      //Answer
      /* The .bind method allows "this" to set the value by returning a new function.*/

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "sampleUser",
      email: "sample.user@boom.camp",
      getUsername(){
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
var Car = function(brand,model,prodYear){
  this.brand = brand;
  this.model = model;
  this.year = prodYear;
  this.move = 0;
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

Car.prototype.moveCar = function(){
  this.move +=10;
  return this.move;
}

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
var getMustangYear = getYear.bind(mustang);
console.log(getPriusYear);
console.log(getMustangYear);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

//var userName = getMyUsername(); //Fix this
var userName = getMyUsername.bind(myUser)(); //Fix this
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  'iliketurtles'
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  'myUser'

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

