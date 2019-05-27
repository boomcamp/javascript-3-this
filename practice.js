//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer: 'this keyword' is used as reference to an object when it's being called. 

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer:
      //1. When using a dot notation for invoking a function, implicit binding occurs wherein whatever's in the left of the dot becomes the context for 'this' in the function.
      //2. We could also use .call(), .apply() or .bind() on a function wherein 'this' inside the function is the object that is passed in as the argument.
      //3. We may not use any other rules when invoking a function wherein 'this'is the global context, also called as default binding.
      //4. New keyword can also be used when calling th function, where 'this' inside the function is a brand new object.

  // 3) What does .bind do?

      //Answer:
      //Bind creates a new function of the same name with bound this.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    // function user(username, email, getUsername){
    //   this.username = 'Emelyn Soria';
    //   this.email = 'emelynsoria@boom.camp';
      

    // }
    // function getUsername(user){
    //   return this.username;
    // }
    // user.getUsername = getUsername;

    var user = {
      username: 'Emelyn Soria',
      email: 'emelyn.soria@boom.camp',
      // getUsername = function(){
      //   return this.username;
      // }
    };

    var getUsername = function(user){
      return this.username;
    };
    // user.getUsername = getUsername;
    // getUsername.user(username));
    user.getUsername = getUsername;

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
  function Car(brand, model, year, move, speed){
    this.brand= brand,
    this.model= model,
    this.year= year,
    this.move= 0,
    this.distanceMoved= 10;
  }

  // const Car = function(brand, model, year, move, speed){
  //   this.brand= brand,
  //   this.model= model,
  //   this.year= year,
  //   this.move= 0,
  //   this.distanceMoved= 10;
  // }

// var moveCar = function(){
  Car.prototype.moveCar = function(){
    this.move += this.distanceMoved;
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
var getMustangYear = getYear.bind(mustang);
console.log(getPriusYear());
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
var userName = myUser.getMyUsername(); //Fix this
console.log(userName);
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here: iliketurtles

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here: myUser



//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

