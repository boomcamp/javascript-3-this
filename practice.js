//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //To reference an object so that we can avoid ambiguity.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      /* 1. Implicitly Binding
            - happens when using dot notation in invoking a function
         2. Explicitly Binding
            - happens when using .call(), .apply(), and .bind() in invoking a function
         3. Default Binding
            - happens when dot notation or explicit binding are not used to call a function. 'This' keyword becomes global object here.
         4. New Binding
            - Uses a constructor function with the new keyword to build a new instance.
      
      */

  // 3) What does .bind do?

      //It allows us to easily set which specific object will be bound to 'this' when function/method was called.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: 'seatiel',
  email: 'seatiel.austria@boom.camp',
  getUsername: function(){
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername;

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year, move){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = move;
}

Car.prototype.moveCar = function(){
  this.move += 10;
  return this.move;
}

var prius = new Car('Toyota', 'Prius', 2011, 0);
var mustang = new Car('Ford', 'Mustang', 2013, 0);

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
var getPriusYear = this.getYear.bind(prius);

var getMustangYear = this.getYear.bind(mustang);
console.log(getPriusYear);
console.log(getMustangYear);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
}

var getMyUsername = function() {
 return this.username;
}

var userName = getMyUsername.call(myUser); //Fix this
userName;
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here

//undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here

//Window

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

