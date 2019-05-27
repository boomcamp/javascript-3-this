//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // the 'this keyword' references the value of the object where the 'this keyword' is used. 

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // if the 'this keyword' is in the global scope, it is bound to the window object

      // when a method like call or bind is used, 'this keyword' is explicitly defined

      // the object before the function separated by the dot, can be replaced by 'this keyword'

      //Whenever a constructor function is used, 'this keyword' refers to the specific instance of 
      //the object that is created and returned by the constructor function

  // 3) What does .bind do?

      //Answer
      // bind overrides the function and explicitly tells the interpreter to use the value in the arguments


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
     var user = {
      username: 'EJBarba',
      email: 'elijah.barba@boom.camp',
      getUsername(){
        return this.username;
      },
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
  user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  
}
  //Function Invocations Here
  
  Car.prototype.moveCar = function(){
    this.move += 10;
    return this.move;
    
  }

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
  


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  // username of global
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  // MyUser.username



//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
var userName = getMyUsername.call(myUser);
